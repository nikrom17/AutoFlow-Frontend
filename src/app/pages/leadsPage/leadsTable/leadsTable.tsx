import * as React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import LeadDetails from '@components/LeadDetails/leadDetails';
import * as styles from './leadsTable.module.less';
import timeDelta from '@utils/timeDelta';

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
    title: 'Last Contact',
    dataIndex: 'lastContact',
    key: 'lastContact',
    render: (dateString) => timeDelta(dateString),
  },
  {
    title: 'Quoted Price',
    dataIndex: ['opportunity', 'info', 'quotedPrice'],
    render: (quotedPrice: number) =>
      quotedPrice ? `$${quotedPrice}` : 'No opportunity info',
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

const LeadsTable: React.FC<Props> = ({ tableData }) => {
  const [leadId, setLeadId] = React.useState(0);
  return (
    <>
      <Table
        columns={columns}
        dataSource={tableData}
        rowSelection={{ type: 'checkbox' }}
        rowClassName={styles.row}
        rowKey={(lead) => lead.id}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => setLeadId(record.id),
          };
        }}
      />
      {Boolean(leadId) && (
        <LeadDetails
          isModalVisible={Boolean(leadId)}
          leadId={leadId}
          setLeadId={setLeadId}
        />
      )}
    </>
  );
};

export default LeadsTable;
