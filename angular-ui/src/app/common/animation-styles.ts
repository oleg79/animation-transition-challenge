import {style} from "@angular/animations";

export const ANIMATION_DURATION = '0.5s';

export const dimensionsMaximized = style({ width: 'calc(100dvw - 100px)', height: 'calc(100dvh - 200px)' });
export const dimensionsMinimized = style({ width: '100px', height: '100px' });
export const borderRadius20px = style({ borderRadius: '20px' });
export const borderRadius50px = style({ borderRadius: '50px' });
export const translateY0px = style({ transform: 'translateY(0px)' });
export const translateYMinus50px = style({ transform: 'translateY(-50px)' });
export const opacity0 = style({ opacity: 0 });
export const opacity1 = style({ opacity: 1 });
