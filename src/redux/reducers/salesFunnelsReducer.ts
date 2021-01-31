import { cloneDeep } from "lodash";
import * as salesFunnelsTypes from "../types/salesFunnelsTypes";

export const initialSalesFunnelsState: salesFunnelsTypes.SalesFunnelsState = {
  salesFunnels: {
    allIds: [1,2,3,4,5,6,7,8,9],
    byId: { 
      1: {
        id: 1,
        address: "1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612",
        chanceToConvert: 0.923,
        email: "coolDude@gmail.com",
        lastComm: "1 hour ago",
        name: "Johnathon SalesFunnelerson",
        opportunityInfo: {
          filingStatus: "Single",
          occupation: "Senior Consultant",
          yearlyIncome: "$150k+",
          quotedPrice: "$350"
        },
        phone: "(847) 460-8607",
      },
      2: {
        id: 2,
        address: "1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612",
        chanceToConvert: 0.923,
        email: "coolDude@gmail.com",
        lastComm: "1 hour ago",
        name: "Johnathon SalesFunnelerson",
        opportunityInfo: {
          filingStatus: "Single",
          occupation: "Senior Consultant",
          yearlyIncome: "$150k+",
          quotedPrice: "$350"
        }, 
        phone: "(847) 460-8607",
      },
      3: {
        id: 3,
        address: "1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612",
        chanceToConvert: 0.923,
        email: "coolDude@gmail.com",
        lastComm: "1 hour ago",
        name: "Johnathon SalesFunnelerson",
        opportunityInfo: {
          filingStatus: "Single",
          occupation: "Senior Consultant",
          yearlyIncome: "$150k+",
          quotedPrice: "$350"
        },
        phone: "(847) 460-8607",
      },
      4: {
        id: 4,
        address: "1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612",
        chanceToConvert: 0.923,
        email: "coolDude@gmail.com",
        lastComm: "1 hour ago",
        name: "Johnathon SalesFunnelerson",
        opportunityInfo: {
          filingStatus: "Single",
          occupation: "Senior Consultant",
          yearlyIncome: "$150k+",
          quotedPrice: "$350"
        },
        phone: "(847) 460-8607",
      },
      5: {
        id: 5,
        address: "1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612",
        chanceToConvert: 0.923,
        email: "coolDude@gmail.com",
        lastComm: "1 hour ago",
        name: "Johnathon SalesFunnelerson",
        opportunityInfo: {
          filingStatus: "Single",
          occupation: "Senior Consultant",
          yearlyIncome: "$150k+",
          quotedPrice: "$350"
        },
        phone: "(847) 460-8607",
      },
      6: {
        id: 6,
        address: "1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612",
        chanceToConvert: 0.923,
        email: "coolDude@gmail.com",
        lastComm: "1 hour ago",
        name: "Johnathon SalesFunnelerson",
        opportunityInfo: {
          filingStatus: "Single",
          occupation: "Senior Consultant",
          yearlyIncome: "$150k+",
          quotedPrice: "$350"
        },
        phone: "(847) 460-8607",
      },
      7: {
        id: 7,
        address: "1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612",
        chanceToConvert: 0.923,
        email: "coolDude@gmail.com",
        lastComm: "1 hour ago",
        name: "Johnathon SalesFunnelerson",
        opportunityInfo: {
          filingStatus: "Single",
          occupation: "Senior Consultant",
          yearlyIncome: "$150k+",
          quotedPrice: "$350"
        },
        phone: "(847) 460-8607",
      },
      8: {
        id: 8,
        address: "1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612",
        chanceToConvert: 0.923,
        email: "coolDude@gmail.com",
        lastComm: "1 hour ago",
        name: "Johnathon SalesFunnelerson",
        opportunityInfo: {
          filingStatus: "Single",
          occupation: "Senior Consultant",
          yearlyIncome: "$150k+",
          quotedPrice: "$350"
        },
        phone: "(847) 460-8607",
      },
      9: {
        id: 9,
        address: "1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612",
        chanceToConvert: 0.923,
        email: "coolDude@gmail.com",
        lastComm: "1 hour ago",
        name: "Johnathon SalesFunnelerson",
        opportunityInfo: {
          filingStatus: "Single",
          occupation: "Senior Consultant",
          yearlyIncome: "$150k+",
          quotedPrice: "$350"
        },
        phone: "(847) 460-8607",
      },
    },
  },
};

export const salesFunnelsReducer = (
  state = initialSalesFunnelsState,
  action: salesFunnelsTypes.Types
): salesFunnelsTypes.SalesFunnelsState => {
  switch (action.type) {
    case salesFunnelsTypes.FETCH_SALES_FUNNELS_SUCCESS:
      return {
        salesFunnels: { ...action.data.salesFunnels },
      };
    case salesFunnelsTypes.FETCH_SALES_FUNNEL_SUCCESS: //todo verify allIds is merged correctly
      return {
        salesFunnels: {
          allIds: [...state.salesFunnels.allIds, ...action.data.salesFunnels.allIds],
          byId: {
            ...cloneDeep(state.salesFunnels.byId),
            ...action.data.salesFunnels.byId,
          },
        },
      };
    default:
      return state;
  }
};
