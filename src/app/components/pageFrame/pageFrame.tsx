import * as React from "react";
import * as styles from "./pageFrame.module.less";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Props {
  buttonOnClick(): void;
  buttonTitle: string;
  children: React.ReactNode;
  title: string;
}

const PageHeader: React.FC<Props> = ({
  buttonOnClick,
  buttonTitle,
  children,
  title,
}) => {
  return (
    <>
      <div className={styles.pageHeader}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.buttonWrapper}>
          <Button
            icon={<PlusOutlined />}
            onClick={buttonOnClick}
            type="primary"
          >
            {buttonTitle}
          </Button>
        </div>
      </div>
      <div className={styles.pageFrame}>{children}</div>
    </>
  );
};

export default PageHeader;
