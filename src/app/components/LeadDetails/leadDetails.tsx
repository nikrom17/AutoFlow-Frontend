import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { getLeadDetails } from 'src/redux/selectors/leadsSelectors';
import { Modal, Progress, Button, Space, Card } from 'antd';
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
  const { name, chanceToConvert, status, phone, email, address } = leadDetails;
  return (
    <Modal
      visible={isModalVisible}
      footer={null}
      onCancel={() => setLeadId(0)}
      width="100%"
    >
      <div className={styles.header}>
        <p>{name}</p>
        <p>{`Status: ${status}`}</p>
        <Progress percent={Math.round(chanceToConvert * 100)} />
        <Button icon={<PlusOutlined />}>Send Message</Button>
      </div>
      <div className={styles.header}>
        <Card title="Contact Info">
          <p>{`Phone Number: ${phone}`}</p>
          <p>{`Email: ${email}`}</p>
          <p>{`Address: ${address}`}</p>
        </Card>
        <Card title="Contact Info">
          <p>{`Phone Number: ${phone}`}</p>
          <p>{`Email: ${email}`}</p>
          <p>{`Address: ${address}`}</p>
        </Card>
        <Card title="Contact Info">
          <p>{`Phone Number: ${phone}`}</p>
          <p>{`Email: ${email}`}</p>
          <p>{`Address: ${address}`}</p>
        </Card>
      </div>
    </Modal>
  );
};

export default LeadDetails;
