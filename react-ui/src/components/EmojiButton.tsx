import React, { ButtonHTMLAttributes } from "react";
import styles from './EmojiButton.module.css';

export type EmojiButtonProps = {
  emoji: string;
} & ButtonHTMLAttributes<HTMLButtonElement>
export const EmojiButton: React.FC<EmojiButtonProps> = ({ emoji, ...attributeProps }) =>
  <button {...attributeProps} className={styles.button}>{emoji}</button>;
