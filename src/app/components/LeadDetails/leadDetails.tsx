import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { getLeadDetails } from 'src/redux/selectors/leadsSelectors';
import { Modal, Progress, Button, Card, Checkbox, List } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import * as styles from './leadDetails.module.less';

const todosMockData = [
  {
    description: 'Send Welcome Email',
    completed: true,
  },
  {
    description: 'Send email to take questionnaire',
    completed: true,
  },
  {
    description: 'Send text to take questionnaire',
    completed: false,
  },
  {
    description: 'Send email to ask if still interested',
    completed: false,
  },
];

const notesMockData = [
  'Phone consult notes',
  'Final terms',
  "Don't e-file",
  'Things to include',
];

interface Props {
  isModalVisible: boolean;
  leadId: number;
  setLeadId(leadId: number): void;
}

const LeadDetails: React.FC<Props> = ({ isModalVisible, setLeadId, leadId }) => {
  const leadDetails = useSelector((state: RootState) => getLeadDetails(state, leadId));
  // console.log(leadDetails);
  const {
    name,
    chanceToConvert,
    status,
    phone,
    email,
    address,
    opportunityInfo: { filingStatus, occupation, yearlyIncome, quotedPrice },
  } = leadDetails;
  return (
    <Modal
      visible={isModalVisible}
      footer={null}
      onCancel={() => setLeadId(0)}
      width="100%"
      style={{ maxWidth: '1100px' }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p>{name}</p>
            <p>{`Status: ${status}`}</p>
          </div>
          <Progress
            percent={Math.round(chanceToConvert * 100)}
            style={{ maxWidth: '500px' }}
          />
          <Button type="primary" ghost icon={<MailOutlined />}>
            Send Message
          </Button>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardColumnContainer}>
            <Card title="Contact Info" className={styles.card}>
              <p>{`Phone Number: ${phone}`}</p>
              <p>{`Email: ${email}`}</p>
              <p>{`Address: ${address}`}</p>
            </Card>
            <Card title="Opportunity Info" className={styles.card}>
              <p>{`Filing Status: ${filingStatus}`}</p>
              <p>{`Occupation: ${occupation}`}</p>
              <p>{`Yearly Income: ${yearlyIncome}`}</p>
              <p>{`Quoted Price: ${quotedPrice}`}</p>
            </Card>
          </div>
          <div className={styles.cardColumnContainer}>
            <Card title="Contact Info" className={styles.card}>
              <p>{`Phone Number: ${phone}`}</p>
              <p>{`Email: ${email}`}</p>
              <p>{`Address: ${address}`}</p>
            </Card>
            <Card title="Contact Info" className={styles.card}>
              <p>{`Phone Number: ${phone}`}</p>
              <p>{`Email: ${email}`}</p>
              <p>{`Address: ${address}`}</p>
            </Card>
          </div>
          <div className={styles.cardColumnContainer}>
            <Card title="Todos" className={styles.card}>
              <List
                dataSource={todosMockData}
                size="small"
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Checkbox checked={item.completed} />}
                      title={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
            <Card title="Notes" className={styles.card}>
              <List
                dataSource={notesMockData}
                size="small"
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta title={item} />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LeadDetails;
