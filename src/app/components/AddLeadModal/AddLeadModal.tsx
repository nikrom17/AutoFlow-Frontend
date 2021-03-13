import * as React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Cascader, Input, Skeleton } from 'antd';
import { getSalesFunnelCascaderOptions } from 'src/redux/funnelSteps/funnelStepsSelectors';
import useReduxFetch from '@hooks/useReduxFetch';
import { fetchOpportunities } from 'src/redux/opportunities/opportunitiesActions';
import { fetchFunnelSteps } from 'src/redux/funnelSteps/funnelStepsActions';

interface Props {
  isModalVisible: boolean;
  setIsModalVisible(isModalVisible: number): void;
}

const AddLeadModal: React.FC<Props> = ({ isModalVisible, setIsModalVisible }) => {
  const { isFetching } = useReduxFetch([fetchOpportunities, fetchFunnelSteps]);
  const funnelStepCascaderOptions = useSelector(getSalesFunnelCascaderOptions);

  return (
    <Modal
      visible={isModalVisible}
      title="Add new lead"
      footer={null}
      onCancel={() => setIsModalVisible(0)}
    >
      {isFetching ? (
        <Skeleton />
      ) : (
        <>
          <div>
            <p>Name</p>
            <Input type="text" />
          </div>
          <div>
            <p>Email</p>
            <Input type="email" />
          </div>
          <div>
            <p>Phone Number</p>
            <Input type="tel" />
          </div>
          <div>
            <div>
              <p>City</p>
              <Input type="text" />
            </div>
            <div>
              <p>State</p>
              <Input type="text" />
            </div>
          </div>
          <div>
            <p>Funnel Step</p>
            <Cascader options={funnelStepCascaderOptions} expandTrigger="hover" />
          </div>
        </>
      )}
    </Modal>
  );
};

export default AddLeadModal;
