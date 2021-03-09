import React from 'react';
import { useSelector } from 'react-redux';
import { Skeleton, Tabs } from 'antd';
import { getTodosTableData } from 'src/redux/todos/todosSelectors';
import PageFrame from '@components/pageFrame/pageFrame';
import TodosTable from './todosTable/todosTable';
import SubHeader from '@components/subHeader/subHeader';
import useReduxFetch from '@hooks/useReduxFetch';
import { fetchLeads } from 'src/redux/leads/leadsActions';
import { fetchFunnelSteps } from 'src/redux/funnelSteps/funnelStepsActions';
import { fetchTodos } from 'src/redux/todos/todosActions';
import {
  fetchOpportunities,
  fetchOpportunityInfos,
} from 'src/redux/opportunities/opportunitiesActions';

const { TabPane } = Tabs;

const TodosPage: React.FC = () => {
  const todos = useSelector(getTodosTableData);
  const { isFetching } = useReduxFetch([
    fetchTodos,
    fetchLeads,
    fetchFunnelSteps,
    fetchOpportunities,
    fetchOpportunityInfos,
  ]);

  return (
    <>
      <SubHeader
        title="Todos"
        addButtonOnClick={() => console.log('add todo')}
        addButtonTitle="Add New Todo"
      >
        <Tabs defaultActiveKey="9=1">
          <TabPane tab="Prioritized Todos" key="1" />
          <TabPane tab="Follow Up" key="2" />
          <TabPane tab="With Client" key="3" />
          <TabPane tab="Completed" key="4" />
        </Tabs>
      </SubHeader>
      <PageFrame>
        {isFetching ? (
          <Skeleton active paragraph={{ rows: 6 }} />
        ) : (
          <TodosTable tableData={todos} />
        )}
      </PageFrame>
    </>
  );
};

export default TodosPage;
