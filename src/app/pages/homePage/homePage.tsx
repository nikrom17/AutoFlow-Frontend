import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "src/redux/rootReducer";
import * as deliveriesActions from "src/redux/actions/deliveriesActions";
import * as deliveriesTypes from "src/redux/types/deliveriesTypes";
import * as locationsActions from "src/redux/actions/locationsActions";
import * as locationsTypes from "src/redux/types/locationsTypes";
import * as clientsActions from "src/redux/actions/clientsActions";
import * as clientsTypes from "src/redux/types/clientsTypes";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

interface StateProps {
  deliveries: deliveriesTypes.DeliveriesState;
  locations: locationsTypes.LocationsState;
  clients: clientsTypes.ClientsState;
}

interface Props extends StateProps {
  fetchDeliveries: deliveriesTypes.FetchDeliveries;
  fetchClientDeliveries: deliveriesTypes.FetchClientDeliveries;
  fetchDelivery: deliveriesTypes.FetchDelivery;
  fetchLocations: locationsTypes.FetchLocations;
  fetchClientLocations: locationsTypes.FetchClientLocations;
  fetchLocation: locationsTypes.FetchLocation;
  fetchClients: clientsTypes.FetchClients;
  fetchClient: clientsTypes.FetchClient;
}

const Home: React.FC<Props> = ({
  deliveries,
  fetchDeliveries,
  fetchClientDeliveries,
  fetchDelivery,
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
    // fetchDeliveries();
    // fetchClientDeliveries(1);
    // fetchDelivery(6);
    fetchLocations();
    // fetchClientLocations(1);
    fetchLocation(1);
  }, [
    fetchClientDeliveries,
    fetchDeliveries,
    fetchDelivery,
    fetchClientLocations,
    fetchLocation,
    fetchLocations,
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
  deliveries: state.deliveries,
  locations: state.locations,
  clients: state.clients,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchDeliveries: () => dispatch(deliveriesActions.fetchDeliveries()),
  fetchClientDeliveries: (clientId: number) =>
    dispatch(deliveriesActions.fetchClientDeliveries(clientId)),
  fetchDelivery: (deliveryId: number) =>
    dispatch(deliveriesActions.fetchDelivery(deliveryId)),
  fetchLocations: () => dispatch(locationsActions.fetchLocations()),
  fetchClientLocations: (clientId: number) =>
    dispatch(locationsActions.fetchClientLocations(clientId)),
  fetchLocation: (locationId: number) =>
    dispatch(locationsActions.fetchLocation(locationId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
