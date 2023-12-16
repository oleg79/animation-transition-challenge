import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animateChild, query, transition, trigger } from "@angular/animations";
import {
  EmojiButtonComponent,
  MAIN_TRANSITION_TRIGGER_NAME as emojiButtonTransitionTriggerName
} from "./emoji-button/emoji-button.component";
import {
  PopupComponent,
  MAIN_TRANSITION_TRIGGER_NAME as popupTransitionTriggerName
} from "./popup/popup.component";

const CHILD_TRANSITIONS_QUERY = query(`@${emojiButtonTransitionTriggerName}, @${popupTransitionTriggerName}`, animateChild());

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmojiButtonComponent, PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  animations: [
    trigger('blockInitialMountAnimation', [
      transition(':enter', [])
    ]),
    trigger('triggerChildTransition', [
      transition(':enter', [CHILD_TRANSITIONS_QUERY]),
      transition(':leave', [CHILD_TRANSITIONS_QUERY]),
    ]),
  ]
})
export class AppComponent {
  isPopupOpen = false;
  animateButton = true;

  togglePopup(isPopupOpen: boolean) {
    this.isPopupOpen = isPopupOpen;
    this.animateButton = false;
  }
}
