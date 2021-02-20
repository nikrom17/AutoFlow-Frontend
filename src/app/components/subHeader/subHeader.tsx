import * as React from 'react';
import * as styles from './subHeader.module.less';
import { Button, PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Props {
  buttonOnClick?(): void;
  buttonTitle?: string;
  title: string;
  renderTabs?: any;
  rightMargin?: boolean;
}

const SubHeader: React.FC<Props> = ({
  buttonOnClick,
  buttonTitle,
  renderTabs,
  title,
  rightMargin = true,
}) => {
  return (
    <div className={styles.subHeader}>
      <PageHeader title="opportunities" />
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
