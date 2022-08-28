import classNames from 'classnames';
import React from 'react';
import { Children } from '../../misc/types';
import ContentContainer from '../ContentContainer';
import styles from './IndexInformationSection.module.scss';

export interface IndexInformationSectionProps extends Children {
  reversed?: boolean;
  title: string;
  boxShadowColor: 'Orange' | 'Green' | 'Aqua';
  /**
   * Source path and alt text, in order.
   */
  image?: [string, string];
}

const IndexInformationSection = ({
  image,
  reversed,
  title,
  children,
  boxShadowColor
}: IndexInformationSectionProps) => {
  const contents = [
    <div
      className={classNames(styles.textContent, {
        [styles.rightMargin]: reversed,
        [styles.leftMargin]: !reversed
      })}
    >
      <h1>{title}</h1>
      <p>{children}</p>
    </div>,
    <div
      className={classNames(styles.visualContent, {
        [styles.rightMargin]: !reversed,
        [styles.leftMargin]: !reversed
      })}
    >
      {image && <img src={image[0]} alt={image[1]} />}
    </div>
  ];

  return (
    <ContentContainer>
      <div
        className={classNames(
          styles.container,
          styles[`boxShadow${boxShadowColor}`]
        )}
      >
        {reversed ? contents.reverse() : contents}
      </div>
    </ContentContainer>
  );
};

export default IndexInformationSection;
