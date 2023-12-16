import React, { ButtonHTMLAttributes } from "react";
import styles from './EmojiButton.module.css';



export type EmojiButtonProps = {
  emoji: string;
  isPopupOpen: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>
export const EmojiButton: React.FC<EmojiButtonProps> = ({ emoji, isPopupOpen, ...attributeProps }) => {


  return (
    <div className={`${styles.buttonContainer} ${isPopupOpen ? styles.transitionToPopup : styles.transitionToButton}`}>
      <button
        {...attributeProps}
        className={`${styles.button} `}
      >
        {emoji}
      </button>
    </div>
  );
}