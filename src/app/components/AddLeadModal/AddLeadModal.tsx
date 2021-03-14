import * as React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Cascader, Input, Skeleton, Row, Col, Form } from 'antd';
import { getSalesFunnelCascaderOptions } from 'src/redux/funnelSteps/funnelStepsSelectors';
import useReduxFetch from '@hooks/useReduxFetch';
import { fetchOpportunities } from 'src/redux/opportunities/opportunitiesActions';
import { fetchFunnelSteps } from 'src/redux/funnelSteps/funnelStepsActions';
import * as styles from './AddLeadModal.module.less';

interface Props {
  isModalVisible: boolean;
  setIsModalVisible(isModalVisible: boolean): void;
}

const AddLeadModal: React.FC<Props> = ({ isModalVisible, setIsModalVisible }) => {
  // ------ REDUX ------ //
  const funnelStepCascaderOptions = useSelector(getSalesFunnelCascaderOptions);

  // ------ HOOKS ------ //
  const { isFetching } = useReduxFetch([fetchOpportunities, fetchFunnelSteps]);
  const [form] = Form.useForm();

  // ------ LOGIC ------ //
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Modal
      visible={isModalVisible}
      title="Add New Lead"
      onCancel={() => setIsModalVisible(false)}
      okButtonProps={{ htmlType: 'submit' }}
      okText="Add Lead"
      onOk={async () => {
        try {
          const values = await form.validateFields();
          form.resetFields();
          onSubmit(values);
        } catch (error) {
          console.log('Validate Failed:', error);
        }
      }}
    >
      {isFetching ? (
        <Skeleton />
      ) : (
        <Form form={form} layout="vertical" name="addNewLead">
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter a name for the lead' }]}
              >
                <Input className={styles.input} type="text" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter an email address for the lead',
                  },
                ]}
              >
                <Input className={styles.input} type="email" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[{ required: true, message: 'Please enter a name for the lead' }]}
              >
                <Input className={styles.input} type="tel" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between" gutter={24}>
            <Col span={12}>
              <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: 'Please enter the city of the lead' }]}
              >
                <Input className={styles.input} type="text" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="state"
                label="State"
                rules={[
                  { required: true, message: 'Please enter the state of the lead' },
                ]}
              >
                <Input className={styles.input} type="text" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="funnelStep"
                label="Funnel Step"
                rules={[
                  { required: true, message: 'Please select a funnel step for the lead' },
                ]}
              >
                <Cascader options={funnelStepCascaderOptions} expandTrigger="hover" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </Modal>
  );
};

export default AddLeadModal;
