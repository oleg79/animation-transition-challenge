import React, { ButtonHTMLAttributes } from "react";
import styles from './EmojiButton.module.css';



export type EmojiButtonProps = {
  emoji: string;
  isPopupOpen: boolean | null
} & ButtonHTMLAttributes<HTMLButtonElement>
export const EmojiButton: React.FC<EmojiButtonProps> = ({ emoji, isPopupOpen, ...attributeProps }) => {

  let anim;
  if (isPopupOpen === true) anim = styles.transitionToPopup;
  if (isPopupOpen === false) anim = styles.transitionToButton;

  return (
    <button
      {...attributeProps}
      className={`${styles.button} ${anim}`}
    >
      <span>{emoji}</span>
    </button>
  );
}