import * as deliveriesTypes from "../types/deliveriesTypes";

export const initialDeliveriesState: deliveriesTypes.DeliveriesState = {
  deliveries: {
    allIds: [],
    byId: {},
  },
};

export const deliveriesReducer = (
  state = initialDeliveriesState,
  action: deliveriesTypes.Types
): deliveriesTypes.DeliveriesState => {
  switch (action.type) {
    case deliveriesTypes.FETCH_DELIVERIES_SUCCESS:
      return {
        deliveries: { ...action.data.deliveries },
      };
    case deliveriesTypes.FETCH_CLIENT_DELIVERIES_SUCCESS:
      return {
        deliveries: { ...action.data.deliveries },
      };
    default:
      return state;
  }
};