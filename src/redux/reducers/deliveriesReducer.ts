import * as deliveriesActionType from "../actionTypes/deliveriesActionTypes";

export const initialDeliveriesState: deliveriesActionType.DeliveriesState = {
  deliveries: {
    allIds: [],
    byId: {},
  },
};

export const deliveriesReducer = (
  state = initialDeliveriesState,
  action: deliveriesActionType.Types
): deliveriesActionType.DeliveriesState => {
  switch (action.type) {
    case deliveriesActionType.FETCH_DELIVERIES_SUCCESS:
      return {
        ...action.data.deliveries,
      };
    default:
      return state;
  }
};
