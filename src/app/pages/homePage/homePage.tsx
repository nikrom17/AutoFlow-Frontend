import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "src/redux/rootReducer";
import * as todosActions from "src/redux/actions/todosActions";
import * as todosTypes from "src/redux/types/todosTypes";
import * as locationsActions from "src/redux/actions/locationsActions";
import * as locationsTypes from "src/redux/types/locationsTypes";
import * as leadsActions from "src/redux/actions/leadsActions";
import * as leadsTypes from "src/redux/types/leadsTypes";
import { useAuth0 } from "@auth0/auth0-react";
import PageFrame from "@components/pageFrame/pageFrame";
import { Button } from "antd";

interface StateProps {
  todos: todosTypes.TodosState;
  locations: locationsTypes.LocationsState;
  leads: leadsTypes.LeadsState;
}

interface Props extends StateProps {
  fetchTodos: todosTypes.FetchTodos;
  fetchLeadTodos: todosTypes.FetchClientTodos;
  fetchTodo: todosTypes.FetchTodo;
  fetchLocations: locationsTypes.FetchLocations;
  fetchLeadLocations: locationsTypes.FetchClientLocations;
  fetchLocation: locationsTypes.FetchLocation;
  fetchLeads: leadsTypes.FetchLeads;
  fetchLead: leadsTypes.FetchLead;
}

const Home: React.FC<Props> = ({
  todos,
  fetchTodos,
  fetchLeadTodos,
  fetchTodo,
  locations,
  fetchLocations,
  fetchLeadLocations,
  fetchLocation,
  leads,
  fetchLead,
  fetchLeads,
}) => {
  const history = useHistory();
  const { isAuthenticated, user } = useAuth0();

  React.useEffect(() => {
    // fetchTodos();
    // fetchLeadTodos(1);
    // fetchTodo(6);
    // fetchLocations();
    // fetchLeadLocations(1);
    // fetchLocation(1);
    // fetchLead(1);
    // fetchLeads();
  }, [
    fetchLeadTodos,
    fetchTodos,
    fetchTodo,
    fetchLeadLocations,
    fetchLocation,
    fetchLocations,
    fetchLead,
  ]);

  return (
    <PageFrame title="Home Page">
      <p>User Info:</p>
      <p>{`First Name: ${isAuthenticated && user.given_name}`}</p>
      <p>{`Last Name: ${isAuthenticated && user.family_name}`}</p>
      <p>{`Email: ${isAuthenticated && user.email}`}</p>
      <div>
        <Button onClick={() => history.push("/about")} type="primary">
          Go to the about page
        </Button>
      </div>
    </PageFrame>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  todos: state.todos,
  locations: state.locations,
  leads: state.leads,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchTodos: () => dispatch(todosActions.fetchTodos()),
  fetchLeadTodos: (leadId: number) =>
    dispatch(todosActions.fetchClientTodos(leadId)),
  fetchTodo: (todoId: number) =>
    dispatch(todosActions.fetchTodo(todoId)),
  fetchLocations: () => dispatch(locationsActions.fetchLocations()),
  fetchLeadLocations: (leadId: number) =>
    dispatch(locationsActions.fetchClientLocations(leadId)),
  fetchLocation: (locationId: number) =>
    dispatch(locationsActions.fetchLocation(locationId)),
  fetchLeads: () => dispatch(leadsActions.fetchLeads()),
  fetchLead: (leadId: number) =>
    dispatch(leadsActions.fetchLead(leadId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
