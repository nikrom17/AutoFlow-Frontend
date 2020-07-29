import { cloneDeep } from "lodash";
import * as clientsTypes from "../types/clientsTypes";

export const initialClientsState: clientsTypes.ClientsState = {
  clients: {
    allIds: [],
    byId: {},
  },
};

export const clientsReducer = (
  state = initialClientsState,
  action: clientsTypes.Types
): clientsTypes.ClientsState => {
  switch (action.type) {
    case clientsTypes.FETCH_CLIENTS_SUCCESS:
      return {
        clients: { ...action.data.clients },
      };
    case clientsTypes.FETCH_CLIENT_SUCCESS: //todo verify allIds is merged correctly
      return {
        clients: {
          allIds: [...state.clients.allIds, ...action.data.clients.allIds],
          byId: {
            ...cloneDeep(state.clients.byId),
            ...action.data.clients.byId,
          },
        },
      };
    default:
      return state;
  }
};
