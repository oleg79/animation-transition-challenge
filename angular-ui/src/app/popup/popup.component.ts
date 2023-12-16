import {Component, Input, Output} from '@angular/core';
import {animate, animateChild, group, query, sequence, transition, trigger} from "@angular/animations";
import togglePopupEvent from "../common/togglePopupEvent";
import {
  ANIMATION_DURATION, borderRadius20px,
  borderRadius50px, dimensionsMaximized,
  dimensionsMinimized,
  opacity0,
  opacity1
} from "../common/animation-styles";

export const MAIN_TRANSITION_TRIGGER_NAME = 'popupContainerTransition';

const childTriggersQuery = query('@popupContentTransition', animateChild());

const mountedStyles = [opacity1, dimensionsMaximized, borderRadius20px]
@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.sass',
  animations: [
    trigger(MAIN_TRANSITION_TRIGGER_NAME, [
      transition(':enter', sequence([
        opacity0,
        borderRadius50px,
        dimensionsMinimized,
        group(mountedStyles.map(ms => animate(`${ANIMATION_DURATION} ease`, ms))),
        childTriggersQuery,
      ])),
      transition(':leave', [
        ...mountedStyles,
        childTriggersQuery,
        group([
          animate(`${ANIMATION_DURATION} ease`, borderRadius50px),
          animate(`${ANIMATION_DURATION} ease`, dimensionsMinimized),
        ]),
        animate(`${ANIMATION_DURATION} 0.2s ease`, opacity0),
      ]),
    ]),
    trigger('popupContentTransition', [
      transition(':enter', [
        opacity0,
        animate(`${ANIMATION_DURATION} ease`, opacity1),
      ]),
      transition(':leave', [
        opacity1,
        animate(`${ANIMATION_DURATION} ease`, opacity0),
      ]),
    ]),
  ]
})
export class PopupComponent {
  @Input() text = '';
  @Output() togglePopupEvent = togglePopupEvent;

  onClick() {
    this.togglePopupEvent.emit(false);
  }
}
