import * as React from 'react';
import * as styles from './pageFrame.module.less';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Props {
  buttonOnClick?(): void;
  buttonTitle?: string;
  children: React.ReactNode;
  title: string;
  renderTabs?: any;
  rightMargin?: boolean;
}

const PageHeader: React.FC<Props> = ({
  buttonOnClick,
  buttonTitle,
  children,
  renderTabs,
  title,
  rightMargin = true,
}) => {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderTop}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.buttonWrapper}>
            {buttonOnClick && buttonTitle && (
              <Button
                icon={<PlusOutlined />}
                onClick={buttonOnClick}
                type="primary"
              >
                {buttonTitle}
              </Button>
            )}
          </div>
        </div>
        {renderTabs}
      </div>
      <div
        className={
          rightMargin ? styles.pageFrame : styles.pageFrameNoRightMargin
        }
      >
        {children}
      </div>
    </>
  );
};

export default PageHeader;
