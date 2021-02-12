import React from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import { getTodosTableData } from 'src/redux/selectors/todosSelectors';
import PageFrame from '@components/pageFrame/pageFrame';
import TodosTable from './todosTable/todosTable';

const TodosPage: React.FC = () => {
  const todos = useSelector(getTodosTableData);

  return (
    <PageFrame
      title="Todo List"
      buttonOnClick={() => console.log('Todos button')} //todo add functionality
      buttonTitle="Prioritized Todo List"
    >
      {todos ? (
        <TodosTable tableData={todos} />
      ) : (
        <Skeleton active paragraph={{ rows: 6 }} />
      )}
    </PageFrame>
  );
};

export default TodosPage;
