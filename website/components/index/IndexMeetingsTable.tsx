import styles from './IndexMeetingsTable.module.scss';

interface RowProps {
  day: 'tuesday' | 'thursday';
  location: 'HG1' | 'zoom';
  /**
   * 12-Hour timew automatically set to PM.
   *
   * @example { time: ['4:30', '5:30'] }
   */
  time: [string, string];
}

const Row = ({ day, location, time }: RowProps) => {
  return (
    <>
      <li className={styles.row}>{day}</li>
      <li className={styles.row}>{location}</li>
      <li className={styles.row}>{`${time[0]} -> ${time[1]}`}</li>
    </>
  );
};

const IndexMeetingsTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.queryText}>
          {'>'} DESCRIBE{' '}
          <span className={styles.emphasized}>CLUB MEETINGS</span>;
        </p>

        <div className={styles.infoTab}>
          <p>EVERY WEEK</p>
        </div>
      </div>

      <ul className={styles.table}>
        <li className={styles.headerRow}>DAY</li>
        <li className={styles.headerRow}>LOCATION</li>
        <li className={styles.headerRow}>TIME</li>

        <Row day="tuesday" location="HG1" time={['3:20', '4:30']} />
        <Row day="thursday" location="zoom" time={['4:30', '6:00']} />
      </ul>
    </div>
  );
};

export default IndexMeetingsTable;
