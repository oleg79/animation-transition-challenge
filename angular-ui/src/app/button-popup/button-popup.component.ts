import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {
  animate,
  animateChild, AnimationEvent,
  group,
  keyframes,
  query,
  sequence,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";


const ViewState = {
  button: 'button',
  popup: 'popup'
} as const;

type TViewState = keyof typeof ViewState;

@Component({
  selector: 'app-button-popup',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './button-popup.component.html',
  styleUrl: './button-popup.component.sass',
  animations: [
    trigger('transformView', [
      state(ViewState.button, style({ width: '100px', height: '100px', borderRadius: '50px', boxShadow: '0 0 20px 5px rgba(0,0,0, 0)' })),
      state(ViewState.popup, style({ width: 'calc(100dvw - 100px)', height: 'calc(100dvh - 200px)', borderRadius: '20px', boxShadow: '0 0 20px 5px rgba(0,0,0, 0.3)' })),
      transition(`${ViewState.button} => ${ViewState.popup}`, sequence([
        group([
          animate('1s ease'),
          query('@transitionEmoji', animateChild())
        ]),
        query('@transitionContent', animateChild())
      ])),
      transition(`${ViewState.popup} => ${ViewState.button}`, [
        sequence([
          query('@transitionContent', animateChild()),
          group([
            animate('2s', keyframes([
              style({ width: 'calc(100dvw - 100px)', height: 'calc(100dvh - 200px)', borderRadius: '20px', offset: 0 }),
              style({ width: '100px', height: '100px', borderRadius: '50px', offset: 0.3 }),
              style({ boxShadow: '0 0 20px 5px rgba(0,0,0, 0.3)', offset: 0.75 }),
              style({ boxShadow: '0 0 20px 5px rgba(0,0,0, 0)', offset: 1 }),
            ])),
            query('@transitionEmoji', animateChild()),
          ])
        ])
      ]),
    ]),
    trigger('transitionEmoji', [
      state(ViewState.button, style({ opacity: 1, transform: 'translateY(0px)' })),
      state(ViewState.popup, style({ opacity: 0, transform: 'translateY(-50px)' })),
      transition(`${ViewState.button} => ${ViewState.popup}`, [animate('1s ease')]),
      transition(`${ViewState.popup} => ${ViewState.button}`, [animate('1s')]),
    ]),
    trigger('transitionContent', [
      state(ViewState.button, style({ opacity: 0 })),
      state(ViewState.popup, style({ opacity: 1 })),
      transition(`${ViewState.button} => ${ViewState.popup}`, [animate('1s')]),
      transition(`${ViewState.popup} => ${ViewState.button}`, [animate('1s ease')]),
    ]),
  ],
})
export class ButtonPopupComponent {
  @Input() buttonEmoji = '';
  @Input() popupTitle = '';
  @Input() popupText = '';

  @ViewChild('popup') popupRef: ElementRef | undefined;

  currentView: TViewState = ViewState.button;
  playPulseAnimation = true;

  switchView(event: MouseEvent, ignore = false) {
    event.stopPropagation();

    if (ignore) return;

    this.playPulseAnimation = false;
    this.currentView = this.currentView === ViewState.button
      ? ViewState.popup
      : ViewState.button;
  }

  restoreScroll(event: AnimationEvent) {
    if (event.fromState === ViewState.button && this.popupRef) {
      this.popupRef.nativeElement.scrollTop = 0;
    }
  }
}
