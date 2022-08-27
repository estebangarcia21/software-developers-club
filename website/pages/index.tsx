import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

interface CommandLineTextProps {
  content: string;
}

const CommandLineText = ({ content }: CommandLineTextProps) => {
  return <span className={styles.commandLineText}>{`> ${content}`}</span>;
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.reactLogo}>
          <h1 className={styles.title}>SOFTWARE DEVELOPERS CLUB</h1>
        </div>

        <div className={styles.reactLogo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Logo for the React framework, a popular library for front end development."
            src="/react.svg"
          />
        </div>
      </header>

      <div className={styles.subHeader}>
        <CommandLineText content="cat about.txt" />
        <p>LEARN SOFTWARE DEVELOPMENT WITH NO PRIOR PROGRAMMING KNOWLEDGE!</p>
      </div>
    </div>
  );
};

export default Home;
