import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLeadsTableData } from 'src/redux/leads/leadsSelectors';
import { Skeleton, Tabs } from 'antd';
import { fetchLeads } from 'src/redux/leads/leadsActions';
import {
  fetchOpportunities,
  fetchOpportunityInfos,
} from 'src/redux/opportunities/opportunitiesActions';
import { fetchFunnelSteps } from 'src/redux/funnelSteps/funnelStepsActions';
import SubHeader from '@components/subHeader/subHeader';
import LeadsTable from './leadsTable/leadsTable';
import PageFrame from '@components/pageFrame/pageFrame';

const { TabPane } = Tabs;

const LeadsPage: React.FC = () => {
  const dispatch = useDispatch();
  const leadsTableData = useSelector(getLeadsTableData);

  React.useEffect(() => {
    dispatch(fetchFunnelSteps());
    dispatch(fetchLeads());
    dispatch(fetchOpportunities());
    dispatch(fetchOpportunityInfos());
  }, [dispatch]);

  return (
    <>
      <SubHeader
        title="Leads"
        addButtonOnClick={() => console.log('Leads button')}
        addButtonTitle="Add New Lead"
      >
        <Tabs defaultActiveKey="1">
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
