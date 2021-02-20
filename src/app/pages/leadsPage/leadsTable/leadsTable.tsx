import * as React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import LeadDetails from '@components/LeadDetails/leadDetails';

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
  const [leadId, setLeadId] = React.useState(0);
  return (
    <>
      <Table
        columns={columns}
        dataSource={tableData}
        rowSelection={{ type: 'checkbox' }}
        rowKey={(lead) => lead.id}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => setLeadId(record.id),
          };
        }}
      />
      {leadId && (
        <LeadDetails
          isModalVisible={Boolean(leadId)}
          leadId={leadId}
          setLeadId={setLeadId}
        />
      )}
    </>
  );
};

export default DeliveriesTable;
