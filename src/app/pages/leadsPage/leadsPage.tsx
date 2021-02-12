import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { Skeleton } from 'antd';
import PageFrame from '@components/pageFrame/pageFrame';
import LeadsTable from './leadsTable/leadsTable';

const LeadsPage: React.FC = () => {
  const leadsTableData = useSelector((state: RootState) => state.leads);

  return (
    <PageFrame
      title="Leads"
      buttonOnClick={() => console.log('Leads button')}
      buttonTitle="Add new lead"
    >
      {leadsTableData ? (
        <LeadsTable tableData={leadsTableData} />
      ) : (
        <Skeleton active paragraph={{ rows: 6 }} />
      )}
    </PageFrame>
  );
};

export default LeadsPage;
