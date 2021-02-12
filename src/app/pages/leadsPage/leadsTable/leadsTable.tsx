import * as React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<any> = [
  {
    title: 'Lead',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Sales Funnel',
    dataIndex: 'salesFunnel',
    key: 'salesFunnel',
  },
  {
    title: 'Last Comm.',
    dataIndex: 'lastComm',
    key: 'lastComm',
  },
  {
    title: 'Price Estimate',
    dataIndex: 'opportunityInfo',
    key: 'opportunityInfo',
    render: (opportunityInfo: any) => (
      <span>{opportunityInfo.quotedPrice}</span>
    ),
  },
  {
    title: 'Funnel Step',
    dataIndex: 'status',
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
    />
  );
};

export default DeliveriesTable;
