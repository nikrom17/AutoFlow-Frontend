import * as React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<any> = [
  {
    title: 'Lead',
    dataIndex: 'name',
  },
  {
    title: 'Opportunity',
    dataIndex: ['opportunity', 'name'],
  },
  {
    title: 'Last Comm.',
    dataIndex: 'lastComm',
    key: 'lastComm',
  },
  {
    title: 'Price Estimate',
    dataIndex: ['opportunity', 'info', 'quotedPrice'],
  },
  {
    title: 'Funnel Step',
    dataIndex: ['funnelStep', 'name'],
    key: 'status',
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
      rowSelection={{ type: 'checkbox' }}
      rowKey={(lead) => lead.id}
    />
  );
};

export default DeliveriesTable;
