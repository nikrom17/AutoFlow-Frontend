import React from 'react';
import { useSelector } from 'react-redux';
import { getLeadsTableData } from 'src/redux/selectors/leadsSelectors';
import { Skeleton, Tabs } from 'antd';
import SubHeader from '@components/subHeader/subHeader';
import LeadsTable from './leadsTable/leadsTable';
import PageFrame from '@components/pageFrame/pageFrame';

const { TabPane } = Tabs;

const LeadsPage: React.FC = () => {
  const leadsTableData = useSelector(getLeadsTableData);

  return (
    <>
      <SubHeader
        title="Leads"
        addButtonOnClick={() => console.log('Leads button')}
        addButtonTitle="Add new lead"
      >
        <Tabs defaultActiveKey="9=1">
          <TabPane tab="All Leads" key="1" />
          <TabPane tab="Hot Leads" key="2" />
          <TabPane tab="Converted Leads" key="3" />
          <TabPane tab="Dead Leads" key="4" />
        </Tabs>
      </SubHeader>
      <PageFrame>
        {leadsTableData ? (
          <LeadsTable tableData={leadsTableData} />
        ) : (
          <Skeleton active paragraph={{ rows: 6 }} />
        )}
      </PageFrame>
    </>
  );
};

export default LeadsPage;
