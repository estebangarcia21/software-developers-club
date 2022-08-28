import classNames from 'classnames';
import React from 'react';
import { Children } from '../misc/types';
import styles from './ContentContainer.module.scss';

export interface ContentContainerProps extends Children {
  outerContent?: React.ReactNode;
  root?: boolean;
  end?: boolean;
}

const ContentContainer = ({
  children,
  outerContent,
  root,
  end
}: ContentContainerProps) => {
  const RootElements = () => (
    <div className={styles.container}>
      <div
        className={classNames(styles.content, {
          [styles.rootContent]: root,
          [styles.endContent]: end
        })}
      >
        {children}
      </div>
    </div>
  );

  return outerContent ? (
    <div>
      {outerContent}
      <RootElements />
    </div>
  ) : (
    <RootElements />
  );
};

export default ContentContainer;
