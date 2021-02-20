import * as React from 'react';
import * as styles from './subHeader.module.less';
import { Button, PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Props {
  addButtonOnClick?(): void;
  addButtonTitle?: string;
  title: string;
  children?: React.ReactChild;
}

const SubHeader: React.FC<Props> = ({
  addButtonOnClick,
  addButtonTitle,
  title,
  children,
}) => {
  const addButton = (
    <Button icon={<PlusOutlined />} onClick={addButtonOnClick} type="primary">
      {addButtonTitle}
    </Button>
  );

  return (
    <div className={styles.subHeader}>
      <PageHeader title={title} extra={addButtonTitle && addButtonOnClick && addButton}>
        {children}
      </PageHeader>
    </div>
  );
};

export default SubHeader;
