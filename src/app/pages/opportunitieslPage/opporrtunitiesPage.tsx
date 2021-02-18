import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { Button, Tabs } from 'antd';
import PageFrame from '@components/pageFrame/pageFrame';
import './opportunities.less';

const { TabPane } = Tabs;

const FunnelPage: React.FC = () => {
  const history = useHistory();
  const opportunities = useSelector(
    (state: RootState) => state.opportunities.name
  );
  return (
    <PageFrame
      title="Opportunities"
      buttonOnClick={() => console.log('Funnel button')}
      buttonTitle="Add Opportunity"
      renderTabs={
        <Tabs defaultActiveKey="9">
          {opportunities.allIds.map((opportunityId: number) => {
            const opportunity = opportunities.byId[opportunityId];
            return <TabPane tab={opportunity.name} key={opportunityId} />;
          })}
        </Tabs>
      }
    >
      <h1>This is the Funnel page</h1>
      <div>
        <Button onClick={() => history.push('/home')} type="primary">
          Go to the home page
        </Button>
      </div>
    </PageFrame>
  );
};

export default FunnelPage;
