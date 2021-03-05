import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { Tabs, Space, Empty } from 'antd';
import {
  fetchOpportunities,
  fetchOpportunityInfos,
} from 'src/redux/opportunities/opportunitiesActions';
import { fetchFunnelSteps } from 'src/redux/funnelSteps/funnelStepsActions';
import { fetchLeads } from 'src/redux/leads/leadsActions';
import SubHeader from '@components/subHeader/subHeader';
import FunnelStepLeadContainer from '@components/funnelStepLeadContainer/funnelStepLeadContainer';
import LeadDetails from '@components/LeadDetails/leadDetails';
import FunnelStepLeadCard from '@components/funnelStepLeadCard/funnelStepLeadCard';
import './opportunities.module.less';
import PageFrame from '@components/pageFrame/pageFrame';
import useReduxFetch from '@hooks/useReduxFetch';

const { TabPane } = Tabs;

const OpportunitiesPage: React.FC = () => {
  // ------ REDUX ------ //
  const opportunities = useSelector((state: RootState) => state.opportunities.name);
  const opportunityInfo = useSelector((state: RootState) => state.opportunities.info);
  const leads = useSelector((state: RootState) => state.leads);
  const funnelSteps = useSelector((state: RootState) => state.funnelSteps);

  // ------ HOOKS ------ //
  const [opportunityId, setOpportunityId] = React.useState(opportunities.allIds[0] || 0);
  const [leadId, setLeadId] = React.useState(0);
  const { isFetching } = useReduxFetch([
    fetchFunnelSteps,
    fetchLeads,
    fetchOpportunities,
    fetchOpportunityInfos,
  ]);

  // ------ LOGIC ------ //
  if (opportunities.allIds[0] && !opportunityId) {
    setOpportunityId(opportunities.allIds[0]);
  }

  const renderFunnelSteps = () => {
    const opportunityFunnelSteps = opportunities.byId[opportunityId].funnelSteps;
    return opportunityFunnelSteps.map((funnelStepId: number) => {
      const funnelStep = funnelSteps.byId[funnelStepId];

      return (
        <FunnelStepLeadContainer funnelStepName={funnelStep.name} key={funnelStepId}>
          <Space size="middle" direction="vertical">
            {funnelStep.leads.map((leadId) => {
              const lead = leads.byId[leadId];
              const opportunity = opportunityInfo.byId[leadId];

              return lead && opportunity ? (
                <FunnelStepLeadCard
                  key={leadId}
                  lastComm={lead.lastContact}
                  leadName={lead.name}
                  quotedPrice={opportunity.quotedPrice}
                  status={lead.status}
                  onClick={() => setLeadId(leadId)}
                />
              ) : null;
            })}
          </Space>
        </FunnelStepLeadContainer>
      );
    });
  };

  return (
    <>
      <SubHeader
        addButtonOnClick={() => console.log('add opportunity')}
        addButtonTitle="Add New Opportunity"
        title="Opportunities"
      >
        <Tabs
          defaultActiveKey={opportunityId?.toString()}
          onChange={(activeKey: string) => setOpportunityId(Number(activeKey))}
        >
          {opportunities.allIds.map((opportunityId: number) => {
            const opportunity = opportunities.byId[opportunityId];
            return <TabPane tab={opportunity.name} key={opportunityId} />;
          })}
        </Tabs>
      </SubHeader>
      <PageFrame>
        {isFetching || !opportunityId ? (
          <Empty
            description={<span>No Opportunities</span>}
            style={{ margin: '5rem auto' }}
          />
        ) : (
          <Space size="large" align="start">
            {renderFunnelSteps()}
          </Space>
        )}
      </PageFrame>
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

export default OpportunitiesPage;
