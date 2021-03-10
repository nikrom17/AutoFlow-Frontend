import * as React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import timeDelta from '@utils/timeDelta';
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
    title: 'Last Contact',
    dataIndex: ['lead', 'lastContact'],
    render: (date: Date) => timeDelta(date),
  },
  {
    title: 'Quoted Price',
    dataIndex: ['opportunity', 'info', 'quotedPrice'],
    render: (quotedPrice: number) => `$${quotedPrice}`,
  },
  {
    title: 'Priority Rank ',
    dataIndex: 'priorityRank',
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
