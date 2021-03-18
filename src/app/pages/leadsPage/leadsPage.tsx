import * as React from 'react';
import { useSelector } from 'react-redux';
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
import useReduxFetch from '@hooks/useReduxFetch';
import AddLeadModal from '@components/AddLeadModal/AddLeadModal';

const { TabPane } = Tabs;

const LeadsPage: React.FC = () => {
  // ------ REDUX ------ //
  const leadsTableData = useSelector(getLeadsTableData);

  // ------ HOOKS ------ //
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const { isFetching } = useReduxFetch([
    fetchFunnelSteps,
    fetchLeads,
    fetchOpportunities,
    fetchOpportunityInfos,
  ]);

  return (
    <>
      <SubHeader
        title="Leads"
        addButtonOnClick={() => setIsModalVisible(true)}
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
        {isFetching ? (
          <Skeleton active paragraph={{ rows: 6 }} />
        ) : (
          <LeadsTable tableData={leadsTableData} />
        )}
      </PageFrame>
      {Boolean(isModalVisible) && (
        <AddLeadModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </>
  );
};

export default LeadsPage;
