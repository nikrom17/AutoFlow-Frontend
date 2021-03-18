import * as React from 'react';
import { List, Popover, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddLeadModal from '@components/AddLeadModal/AddLeadModal';
import AddTodoModal from '@components/AddTodoModal/AddTodoModal';

const AddButtonPopover: React.FC = () => {
  let AddItemModal;
  const [addItemId, setAddItemId] = React.useState(0);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const addItemList = [
    {
      description: 'Add new lead',
      onClick: () => {
        setAddItemId(1);
        setIsModalVisible(true);
      },
    },
    {
      description: 'Add new todo',
      onClick: () => {
        setAddItemId(2);
        setIsModalVisible(true);
      },
    },
  ];

  switch (addItemId) {
    case 1:
      AddItemModal = AddLeadModal;
      break;
    case 2:
      AddItemModal = AddTodoModal;
      break;
    default:
      AddItemModal = AddLeadModal;
  }

  const popoverContent = (
    <List
      itemLayout="horizontal"
      dataSource={addItemList}
      split={false}
      size="small"
      renderItem={(item) => (
        <List.Item>
          <Button type="text" onClick={item.onClick}>
            {item.description}
          </Button>
        </List.Item>
      )}
    />
  );

  return (
    <>
      <Popover content={popoverContent} trigger="hover" placement="right">
        <Button shape="circle" ghost type="primary" icon={<PlusOutlined />} />
      </Popover>
      {Boolean(addItemId) && (
        <AddItemModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </>
  );
};

export default AddButtonPopover;
