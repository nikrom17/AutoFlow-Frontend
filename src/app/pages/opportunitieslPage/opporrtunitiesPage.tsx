import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { Tabs, Space, Empty } from 'antd';
import SubHeader from '@components/subHeader/subHeader';
import FunnelStepLeadContainer from '@components/funnelStepLeadContainer/funnelStepLeadContainer';
import LeadDetails from '@components/LeadDetails/leadDetails';
import FunnelStepLeadCard from '@components/funnelStepLeadCard/funnelStepLeadCard';
import { fetchOpportunities } from 'src/redux/opportunities/opportunitiesActions';
import { fetchFunnelSteps } from 'src/redux/funnelSteps/funnelStepsActions';
import './opportunities.module.less';
import PageFrame from '@components/pageFrame/pageFrame';

const { TabPane } = Tabs;

const OpportunitiesPage: React.FC = () => {
  const dispatch = useDispatch();
  const opportunities = useSelector((state: RootState) => state.opportunities.name);
  const opportunityInfo = useSelector((state: RootState) => state.opportunities.info);
  const leads = useSelector((state: RootState) => state.leads);
  const funnelSteps = useSelector((state: RootState) => state.funnelSteps);
  const [opportunityId, setOpportunityId] = React.useState(
    opportunities.allIds[0] || null
  );
  const [leadId, setLeadId] = React.useState(0);

  React.useEffect(() => {
    dispatch(fetchOpportunities());
    dispatch(fetchFunnelSteps());
  }, [dispatch]);

  const renderFunnelSteps = () => {
    // @ts-ignore
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
        {opportunityId && opportunities ? (
          <Space size="large" align="start">
            {renderFunnelSteps()}
          </Space>
        ) : (
          <Empty
            description={<span>No Opportunities</span>}
            style={{ margin: '5rem auto' }}
          />
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
