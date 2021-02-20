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

// const thing = (
//   <div className={styles.subHeader}>
//     <div className={styles.pageHeaderTop}>
//       <h2 className={styles.title}>{title}</h2>
//       <div className={styles.buttonWrapper}>
//         {buttonOnClick && buttonTitle && (
//           <Button icon={<PlusOutlined />} onClick={buttonOnClick} type="primary">
//             {buttonTitle}
//           </Button>
//         )}
//       </div>
//     </div>
//     {renderTabs}
//   </div>
// );
