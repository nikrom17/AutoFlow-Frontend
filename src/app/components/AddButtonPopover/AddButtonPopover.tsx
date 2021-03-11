import * as React from 'react';
import { List, Popover, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddLeadModal from '@components/AddLeadModal/AddLeadModal';
import AddTodoModal from '@components/AddTodoModal/AddTodoModal';

const AddButtonPopover: React.FC = () => {
  let AddItemModal;
  const [addItemId, setAddItemId] = React.useState(0);
  const addItemList = [
    {
      description: 'Add new lead',
      onClick: () => setAddItemId(1),
    },
    {
      description: 'Add new todo',
      onClick: () => setAddItemId(2),
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
      break;
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
          isModalVisible={Boolean(addItemId)}
          setIsModalVisible={setAddItemId}
        />
      )}
    </>
  );
};

export default AddButtonPopover;
