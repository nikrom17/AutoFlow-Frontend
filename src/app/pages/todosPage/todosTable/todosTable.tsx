import * as React from 'react';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import getStatusColor from '@utils/getTagColor';
import * as styles from './todosTable.module.less';

const columns: ColumnsType<any> = [
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Lead',
    dataIndex: ['lead', 'name'],
  },
  {
    title: 'Last Comm.',
    dataIndex: 'pickup_location_id',
  },
  {
    title: 'Price Estimate',
    dataIndex: ['lead', 'opportunityInfo', 'quotedPrice'],
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: string) => (
      <Tag color={getStatusColor(status)}>{status}</Tag>
    ),
  },
  {
    title: 'Rank ',
    dataIndex: 'priority_rank',
    render: (rank: number) => <span className={styles.rank}>{rank}</span>,
  },
];

interface Props {
  tableData: any;
}

const DeliveriesTable: React.FC<Props> = ({ tableData }) => {
  console.log(tableData);
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      rowKey={(todo) => todo.id}
      rowSelection={{ type: 'checkbox' }}
    />
  );
};

export default DeliveriesTable;
