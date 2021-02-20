import * as React from 'react';
import * as styles from './pageFrame.module.less';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const PageFrame: React.FC<Props> = ({ children }) => (
  <div className={styles.pageFrame}>{children}</div>
);

export default PageFrame;
