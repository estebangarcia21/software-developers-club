import { animated, SpringValues } from 'react-spring';
import useAnimations from '../../hooks/index/useAnimations';
import styles from '../../styles/Home.module.scss';
import CommandLineText from '../CommandLineText';
import ContentContainer from '../ContentContainer';
import IndexInformationSection from '../index/IndexInformationSection';
import IndexMeetingsTable from './IndexMeetingsTable';

const DiscordButton = ({ animation }: { animation?: SpringValues }) => (
  <animated.a style={animation} href={DISCORD_LINK} className={styles.discord}>
    JOIN OUR DISCORD COMMUNITY
  </animated.a>
);

const SUBTITLE =
  'LEARN SOFTWARE DEVELOPMENT WITH NO PRIOR PROGRAMMING KNOWLEDGE!';

const INSTAGRAM_LINK = 'https://www.instagram.com/franklinsoftwaredevs/';
const DISCORD_LINK = 'https://discord.gg/ruRQUGSDQy';

const ClientHome = () => {
  const [typing, [title, last, [up0, u1, up2]]] = useAnimations(
    SUBTITLE.length
  );

  return (
    <div>
      <div className={styles.container}>
        <ContentContainer root>
          <header className={styles.header}>
            <div className={styles.reactLogo}>
              <animated.h1 style={title} className={styles.title}>
                SOFTWARE DEVELOPERS CLUB
              </animated.h1>
            </div>

            <div className={styles.reactLogo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <animated.img
                style={up0}
                alt="Logo for the React framework, a popular library for front end development."
                src="/react.svg"
              />
            </div>
          </header>

          <div className={styles.headerButtons}>
            <DiscordButton animation={title} />

            <animated.a
              style={up0}
              href={INSTAGRAM_LINK}
              className={styles.instagram}
            >
              VIEW OUR INSTAGRAM
            </animated.a>
          </div>

          <div className={styles.subtitleContainer}>
            <animated.div style={u1}>
              <CommandLineText content="cat about.txt" />
            </animated.div>

            <animated.h2 className={styles.subtitle}>
              {typing.to((n) => SUBTITLE.slice(0, n))}
            </animated.h2>
          </div>

          <animated.div style={last}>
            <IndexMeetingsTable />
          </animated.div>
        </ContentContainer>

        <animated.div style={up2} className={styles.informationSections}>
          <ContentContainer>
            <div className={styles.divider}>
              <hr />
              <span>WHY JOIN?</span>
              <hr />
            </div>
          </ContentContainer>

          <IndexInformationSection
            title="CREATE WEBSITES"
            image={['/html.svg', 'Picture of the react framework.']}
            boxShadowColor="Orange"
          >
            LEARN HOW TO DESIGN AND CREATE YOUR OWN WEBSITES USING REACT, THE
            MOST IN DEMAND UI FRAMEWORK IN THE SOTWARE ENGINEERING INDUSTRY.
          </IndexInformationSection>

          <IndexInformationSection
            title="MANAGE SERVERS"
            image={['/node.svg', 'Picture of the Node JS framework.']}
            boxShadowColor="Green"
            reversed
          >
            EVERY DAY, USERS UPLOAD BILLIONS OF BYTES WORTH OF DATA TO SERVERS.{' '}
            <br /> <br />
            LEARN HOW TO MANAGE AND STORE DATA FOR YOUR APPLICATIONS.
          </IndexInformationSection>

          <IndexInformationSection
            title="TAKE ON THE CLOUD"
            boxShadowColor="Aqua"
            image={['/azure.png', 'Picture of the react framework.']}
          >
            DEVELOPERS UPLOAD APPLICATIONS TO &quot;THE CLOUD&quot;, A
            COLLECTION OF SERVERS MANAGED BY THE PROVIDER.
            <br />
            <br />
            LEARN HOW TO DEPLOY APPLICATIONS TO THE WEB USING INDUSTRY-STANDARD
            TOOLS.
          </IndexInformationSection>

          <ContentContainer end>
            <footer className={styles.footer}>
              <h1>Ready to join us?</h1>

              <p>
                STOP BY ANY CLUB MEETING AND OUR CLUB OFFICERS WILL ASSIST YOU
                IN GETTING SET UP.
                <br />
                <br />
                WE ARE EXCITED TO HAVE YOU WITH US!
              </p>

              <DiscordButton />
            </footer>
          </ContentContainer>
        </animated.div>
      </div>
    </div>
  );
};

export default ClientHome;
