// import { cloneDeep } from "lodash";
import * as salesFunnelsTypes from "../types/salesFunnelsTypes";

export const initialSalesFunnelsState: salesFunnelsTypes.SalesFunnelsState = {
  salesFunnels: {
    allIds: [1,2],
    byId: { 
      1: {
        id: 1,
        name: "Personal Tax Returns",
        funnelSteps: [1,2,3,4],
      },
      2: {
        id: 2,
        name: "BusinessTax Returns",
        funnelSteps: [1,2,3,4],
      },
    },
  },
  funnelSteps: {
    allIds: [1,2,3,4],
    byId: {
      1: {
        id: 1,
        name: "Initial Inquiry",
        salesFunnel: 1,
      },
      2: {
        id: 2,
        name: "Took Questionnaire",
        salesFunnel: 1,
      },
      3: {
        id: 3,
        name: "Scheduled Phone Consult",
        salesFunnel: 1,
      },
      4: {
        id: 4,
        name: "Has Phone Consult",
        salesFunnel: 1,
      },
      5: {
        id: 5,
        name: "Initial Inquiry",
        salesFunnel: 2,
      },
      6: {
        id: 6,
        name: "Took Questionnaire",
        salesFunnel: 2,
      },
      7: {
        id: 7,
        name: "Scheduled Phone Consult",
        salesFunnel: 2,
      },
      8: {
        id: 8,
        name: "Has Phone Consult",
        salesFunnel: 2,
      },
    },
  },
};

export const salesFunnelsReducer = (
  state = initialSalesFunnelsState,
  action: salesFunnelsTypes.Types
): salesFunnelsTypes.SalesFunnelsState => {
  switch (action.type) {
    default:
      return state;
  }
};
