import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "src/redux/rootReducer";
import * as todosActions from "src/redux/actions/todosActions";
import * as todosTypes from "src/redux/types/todosTypes";
import * as locationsActions from "src/redux/actions/locationsActions";
import * as locationsTypes from "src/redux/types/locationsTypes";
import * as clientsActions from "src/redux/actions/clientsActions";
import * as clientsTypes from "src/redux/types/clientsTypes";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

interface StateProps {
  todos: todosTypes.TodosState;
  locations: locationsTypes.LocationsState;
  clients: clientsTypes.ClientsState;
}

interface Props extends StateProps {
  fetchTodos: todosTypes.FetchTodos;
  fetchClientTodos: todosTypes.FetchClientTodos;
  fetchTodo: todosTypes.FetchTodo;
  fetchLocations: locationsTypes.FetchLocations;
  fetchClientLocations: locationsTypes.FetchClientLocations;
  fetchLocation: locationsTypes.FetchLocation;
  fetchClients: clientsTypes.FetchClients;
  fetchClient: clientsTypes.FetchClient;
}

const Home: React.FC<Props> = ({
  todos,
  fetchTodos,
  fetchClientTodos,
  fetchTodo,
  locations,
  fetchLocations,
  fetchClientLocations,
  fetchLocation,
  clients,
  fetchClient,
  fetchClients,
}) => {
  const history = useHistory();
  const { isAuthenticated, user } = useAuth0();

  React.useEffect(() => {
    // fetchTodos();
    // fetchClientTodos(1);
    // fetchTodo(6);
    // fetchLocations();
    // fetchClientLocations(1);
    // fetchLocation(1);
    // fetchClient(1);
    // fetchClients();
  }, [
    fetchClientTodos,
    fetchTodos,
    fetchTodo,
    fetchClientLocations,
    fetchLocation,
    fetchLocations,
    fetchClient,
  ]);

  return (
    <>
      <h1>This is the home page</h1>
      <p>User Info:</p>
      <p>{`First Name: ${isAuthenticated && user.given_name}`}</p>
      <p>{`Last Name: ${isAuthenticated && user.family_name}`}</p>
      <p>{`Email: ${isAuthenticated && user.email}`}</p>
      <div>
        <Button onClick={() => history.push("/about")} type="primary">
          Go to the about page
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  todos: state.todos,
  locations: state.locations,
  clients: state.clients,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchTodos: () => dispatch(todosActions.fetchTodos()),
  fetchClientTodos: (clientId: number) =>
    dispatch(todosActions.fetchClientTodos(clientId)),
  fetchTodo: (todoId: number) =>
    dispatch(todosActions.fetchTodo(todoId)),
  fetchLocations: () => dispatch(locationsActions.fetchLocations()),
  fetchClientLocations: (clientId: number) =>
    dispatch(locationsActions.fetchClientLocations(clientId)),
  fetchLocation: (locationId: number) =>
    dispatch(locationsActions.fetchLocation(locationId)),
  fetchClients: () => dispatch(clientsActions.fetchClients()),
  fetchClient: (clientId: number) =>
    dispatch(clientsActions.fetchClient(clientId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
