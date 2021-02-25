import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { Tabs, Space } from 'antd';
import SubHeader from '@components/subHeader/subHeader';
import FunnelStepLeadContainer from '@components/funnelStepLeadContainer/funnelStepLeadContainer';
import LeadDetails from '@components/LeadDetails/leadDetails';
import FunnelStepLeadCard from '@components/funnelStepLeadCard/funnelStepLeadCard';
import './opportunities.module.less';
import PageFrame from '@components/pageFrame/pageFrame';

const { TabPane } = Tabs;

const FunnelPage: React.FC = () => {
  const opportunities = useSelector((state: RootState) => state.opportunities.name);
  const opportunityInfo = useSelector((state: RootState) => state.opportunities.info);
  const leads = useSelector((state: RootState) => state.leads);
  const funnelSteps = useSelector((state: RootState) => state.funnelSteps);
  const [opportunityId, setOpportunityId] = React.useState<number>(
    opportunities.allIds[0] || null
  );
  const [leadId, setLeadId] = React.useState(0);

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

              return (
                <FunnelStepLeadCard
                  key={leadId}
                  lastComm={lead.lastComm}
                  leadName={lead.name}
                  quotedPrice={opportunity.quotedPrice}
                  status={lead.status}
                  onClick={() => setLeadId(leadId)}
                />
              );
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
          defaultActiveKey="9"
          onChange={(activeKey: string) => setOpportunityId(Number(activeKey))}
        >
          {opportunities.allIds.map((opportunityId: number) => {
            const opportunity = opportunities.byId[opportunityId];
            return <TabPane tab={opportunity.name} key={opportunityId} />;
          })}
        </Tabs>
      </SubHeader>
      <PageFrame>
        <Space size="large" align="start">
          {opportunityId && opportunities ? renderFunnelSteps() : <p>No Opportunities</p>}
        </Space>
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

export default FunnelPage;
