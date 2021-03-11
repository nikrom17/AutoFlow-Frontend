import * as React from 'react';
import { Modal } from 'antd';

interface Props {
  isModalVisible: boolean;
  setIsModalVisible(isModalVisible: number): void;
}

const AddLeadModal: React.FC<Props> = ({ isModalVisible, setIsModalVisible }) => {
  return (
    <Modal
      visible={isModalVisible}
      footer={null}
      onCancel={() => setIsModalVisible(0)}
      width="100%"
      style={{ maxWidth: '1100px' }}
    >
      <p>This is the modal for adding Todos</p>
    </Modal>
  );
};

export default AddLeadModal;
