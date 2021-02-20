import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { getLeadDetails } from 'src/redux/selectors/leadsSelectors';
import { Modal, Progress, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as styles from './leadDetails.module.less';

interface Props {
  isModalVisible: boolean;
  leadId: number;
  setLeadId(leadId: number): void;
}

const LeadDetails: React.FC<Props> = ({ isModalVisible, setLeadId, leadId }) => {
  const leadDetails = useSelector((state: RootState) => getLeadDetails(state, leadId));
  // console.log(leadDetails);
  const { name, chanceToConvert, status } = leadDetails;
  return (
    <Modal visible={isModalVisible} footer={null} onCancel={() => setLeadId(0)}>
      <p>{name}</p>
      <p>{`Status: ${status}`}</p>
      <Progress percent={chanceToConvert * 100} />
      <Button icon={<PlusOutlined />}>Send Message</Button>
    </Modal>
  );
};

export default LeadDetails;
