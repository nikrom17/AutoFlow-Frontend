import React from "react";
import { connect } from "react-redux";
import { AppState } from "src/redux/rootReducer";
import { Skeleton } from "antd";
import { DefaultSchema } from "src/redux/types/commonTypes";
import * as deliveriesActions from "src/redux/actions/deliveriesActions";
import * as deliveriesTypes from "src/redux/types/deliveriesTypes";
import PageFrame from "@components/pageFrame/pageFrame";
import DeliveriesTable from "./deliveriesTable/deliveriesTable";

interface StateProps {
  deliveries: deliveriesTypes.DeliveriesState;
}

interface Props extends StateProps {
  fetchClientDeliveries: deliveriesTypes.FetchClientDeliveries;
  // fetchDelivery: deliveriesTypes.FetchDelivery;
}

const DeliveriesPage: React.FC<Props> = ({
  deliveries,
  fetchClientDeliveries,
  // fetchDelivery,
}) => {
  const { deliveries: delivery } = deliveries;
  React.useEffect(() => {
    fetchClientDeliveries(1);
  }, [fetchClientDeliveries]);

  const transformData = (data: DefaultSchema<any>) =>
    data.allIds.map((id) => data.byId[id]);

  return (
    <PageFrame
      title="Deliveries"
      buttonOnClick={() => console.log("Deliveries button")}
      buttonTitle="Schedule delivery"
    >
      {delivery.allIds.length ? (
        <DeliveriesTable tableData={transformData(delivery)} />
      ) : (
        <Skeleton active paragraph={{ rows: 6 }} />
      )}
    </PageFrame>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  deliveries: state.deliveries,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchClientDeliveries: (clientId: number) =>
    dispatch(deliveriesActions.fetchClientDeliveries(clientId)),
  // fetchDelivery: (deliveryId: number) =>
  //   dispatch(deliveriesActions.fetchDelivery(deliveryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliveriesPage);
