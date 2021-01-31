import React from "react";
import { connect } from "react-redux";
import { AppState } from "src/redux/rootReducer";
import { Skeleton } from "antd";
import { DefaultSchema } from "src/redux/types/commonTypes";
import * as todosActions from "src/redux/actions/todosActions";
import * as todosTypes from "src/redux/types/todosTypes";
import PageFrame from "@components/pageFrame/pageFrame";
import TodosTable from "./todosTable/todosTable";

interface StateProps {
  todos: todosTypes.TodosState;
}

interface Props extends StateProps {
  fetchTodos: todosTypes.FetchTodos;
}

const TodosPage: React.FC<Props> = ({
  todos,
  fetchTodos,
}) => {
  const { todos: todo } = todos;
  
  // React.useEffect(() => {
  //   fetchClientTodos(1);
  // }, [fetchClientTodos]);

  //todo make this reusable
  const transformData = (data: DefaultSchema<any>) =>
    data.allIds.map((id) => data.byId[id]);

  return (
    <PageFrame
      title="Todo List"
      buttonOnClick={() => console.log("Todos button")} //todo add functionality
      buttonTitle="Prioritized Todo List"
    >
      {todo.allIds.length ? (
        <TodosTable tableData={transformData(todo)} />
      ) : (
        <Skeleton active paragraph={{ rows: 6 }} />
      )}
    </PageFrame>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchTodos: () =>
    dispatch(todosActions.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
