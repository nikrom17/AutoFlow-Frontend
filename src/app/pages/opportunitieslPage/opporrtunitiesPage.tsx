import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { Tabs, Space } from 'antd';
import PageFrame from '@components/pageFrame/pageFrame';
import FunnelStepLeadContainer from '@components/funnelStepLeadContainer/funnelStepLeadContainer';
import FunnelStepLeadCard from '@components/funnelStepLeadCard/funnelStepLeadCard';
import './opportunities.less';

const { TabPane } = Tabs;

const FunnelPage: React.FC = () => {
  const opportunities = useSelector((state: RootState) => state.opportunities.name);
  const opportunityInfo = useSelector((state: RootState) => state.opportunities.info);
  const leads = useSelector((state: RootState) => state.leads);
  const funnelSteps = useSelector((state: RootState) => state.funnelSteps);
  const [opportunityId, setOpportunityId] = React.useState<number>(
    opportunities.allIds[0] || null
  );

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
                />
              );
            })}
          </Space>
        </FunnelStepLeadContainer>
      );
    });
  };

  return (
    <PageFrame
      buttonOnClick={() => console.log('add opportunity')}
      buttonTitle="Add Opportunity"
      rightMargin={false}
      title="Opportunities"
      renderTabs={
        <Tabs
          defaultActiveKey="9"
          onChange={(activeKey: string) => setOpportunityId(Number(activeKey))}
        >
          {opportunities.allIds.map((opportunityId: number) => {
            const opportunity = opportunities.byId[opportunityId];
            return <TabPane tab={opportunity.name} key={opportunityId} />;
          })}
        </Tabs>
      }
    >
      <Space size="large" align="start">
        {opportunityId && opportunities ? renderFunnelSteps() : <p>No Opportunities</p>}
      </Space>
    </PageFrame>
  );
};

export default FunnelPage;
