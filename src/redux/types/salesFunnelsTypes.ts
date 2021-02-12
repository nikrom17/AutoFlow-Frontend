import { ThunkType, DefaultSchema } from "./commonTypes";

// ------ COMMON INTERFACES ------ //
export interface SalesFunnels {
  funnelSteps: number[];
  id: number;
  name: string;
}

export interface FunnelSteps {
  id: number;
  name: string;
  salesFunnel: number;
}

export interface SalesFunnelsState {
  salesFunnels: DefaultSchema<SalesFunnels>;
  funnelSteps: DefaultSchema<FunnelSteps>;
}

// ------ THUNK ACTION TYPES ------ //
export type FetchSalesFunnels = () => ThunkType;
export type FetchSalesFunnel = (clientId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_SALES_FUNNELS_START = "FETCH_SALES_FUNNELS_START";
export const FETCH_SALES_FUNNELS_SUCCESS = "FETCH_SALES_FUNNELS_SUCCESS";
export const FETCH_SALES_FUNNELS_FAILED = "FETCH_SALES_FUNNELS_FAILED";

export const FETCH_SALES_FUNNEL_START = "FETCH_SALES_FUNNEL_START";
export const FETCH_SALES_FUNNEL_SUCCESS = "FETCH_SALES_FUNNEL_SUCCESS";
export const FETCH_SALES_FUNNEL_FAILED = "FETCH_SALES_FUNNEL_FAILED";

// ------ TYPES ------ //
interface FetchSalesFunnelsSuccess {
  type: typeof FETCH_SALES_FUNNELS_SUCCESS;
  data: SalesFunnelsState;
}

interface FetchSalesFunnelSuccess {
  type: typeof FETCH_SALES_FUNNEL_SUCCESS;
  data: SalesFunnelsState;
}

export type Types = FetchSalesFunnelsSuccess | FetchSalesFunnelSuccess;
