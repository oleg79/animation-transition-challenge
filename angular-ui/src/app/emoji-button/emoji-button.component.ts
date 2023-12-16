import {Component, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {
  animate,
  animateChild,
  group,
  query,
  sequence,
  transition,
  trigger
} from "@angular/animations";
import togglePopupEvent from "../common/togglePopupEvent";
import {
  ANIMATION_DURATION,
  borderRadius20px,
  borderRadius50px,
  dimensionsMaximized,
  dimensionsMinimized, opacity1,
  translateY0px,
  translateYMinus50px
} from "../common/animation-styles";

export const MAIN_TRANSITION_TRIGGER_NAME = 'buttonContainerTransition';

const childTriggersQuery = query('@*', animateChild());

@Component({
  selector: 'app-emoji-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './emoji-button.component.html',
  styleUrl: './emoji-button.component.sass',
  animations: [
    trigger(MAIN_TRANSITION_TRIGGER_NAME, [
      transition(':enter', group([
        childTriggersQuery,
        dimensionsMaximized,
        animate(`${ANIMATION_DURATION} ${ANIMATION_DURATION} ease`, dimensionsMinimized)
      ])),
      transition(':leave', [
        group([
          childTriggersQuery,
          sequence([
            dimensionsMinimized,
            animate(`${ANIMATION_DURATION} ease`, dimensionsMaximized),
            animate(`${ANIMATION_DURATION} ease`, opacity1)
          ]),
        ]),
      ]),
    ]),
    trigger('buttonTransition', [
      transition(':enter', [
        borderRadius20px,
        animate(`${ANIMATION_DURATION} ${ANIMATION_DURATION} ease`, borderRadius50px),
      ]),
      transition(':leave', [
        borderRadius50px,
        animate(`${ANIMATION_DURATION} ease`, borderRadius20px)
      ]),
    ]),
    trigger('fireTransition', [
      transition(':enter', [
        translateYMinus50px,
        animate(`${ANIMATION_DURATION} ${ANIMATION_DURATION} ease`, translateY0px),
      ]),
      transition(':leave', [
        translateY0px,
        animate(`${ANIMATION_DURATION} ease`, translateYMinus50px)
      ]),
    ]),
  ],

})
export class EmojiButtonComponent {
  @Input() emoji = '';
  @Input() animate = true;
  @Output() togglePopupEvent = togglePopupEvent;

  onClick() {
    this.togglePopupEvent.emit(true);
  }
}
