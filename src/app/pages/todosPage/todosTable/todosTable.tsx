import * as React from 'react';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import getStatusColor from '@utils/getStatusColor';
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
    dataIndex: ['lead', 'lastComm'],
  },
  {
    title: 'Price Estimate',
    dataIndex: ['opportunity', 'info', 'quotedPrice'],
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: string) => <Tag color={getStatusColor(status)}>{status}</Tag>,
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
