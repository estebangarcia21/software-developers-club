import styles from './CommandLineText.module.scss';

export interface CommandLineTextProps {
  content: string;
}

const CommandLineText = ({ content }: CommandLineTextProps) => {
  return <p className={styles.text}>{`> ${content}`}</p>;
};

export default CommandLineText;
