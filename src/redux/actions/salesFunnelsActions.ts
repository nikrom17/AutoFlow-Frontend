import * as salesFunnelsTypes from "../types/salesFunnelsTypes";
import api from "src/api/api";

// ------ SIMPLE ACTIONS ------ //

// fetch all salesFunnels
export const fetchSalesFunnelsStart = () => ({
  type: salesFunnelsTypes.FETCH_SALES_FUNNELS_START,
});

export const fetchSalesFunnelsSuccess = (data: salesFunnelsTypes.SalesFunnelsState) => ({
  type: salesFunnelsTypes.FETCH_SALES_FUNNELS_SUCCESS,
  data,
});

export const fetchSalesFunnelsFailed = () => ({
  type: salesFunnelsTypes.FETCH_SALES_FUNNELS_FAILED,
});

// fetch a single salesFunnel
export const fetchSalesFunnelStart = () => ({
  type: salesFunnelsTypes.FETCH_SALES_FUNNEL_START,
});

export const fetchSalesFunnelSuccess = (data: salesFunnelsTypes.SalesFunnelsState) => ({
  type: salesFunnelsTypes.FETCH_SALES_FUNNEL_SUCCESS,
  data,
});

export const fetchSalesFunnelFailed = () => ({
  type: salesFunnelsTypes.FETCH_SALES_FUNNEL_FAILED,
});

// ------ COMPLEX ACTIONS ------ //

// Admin

// fetch all salesFunnels
export const fetchSalesFunnels: salesFunnelsTypes.FetchSalesFunnels = () => async (
  dispatch
) => {
  try {
    dispatch(fetchSalesFunnelsStart());
    const response = await api.get("salesFunnels");
    dispatch(fetchSalesFunnelsSuccess(response));
  } catch (error) {
    dispatch(fetchSalesFunnelsFailed());
  }
};

// fetch a single salesFunnel
export const fetchSalesFunnel: salesFunnelsTypes.FetchSalesFunnel = (
  salesFunnelId: number
) => async (dispatch) => {
  try {
    dispatch(fetchSalesFunnelStart());
    const response = await api.get(`salesFunnels/${salesFunnelId}`);
    dispatch(fetchSalesFunnelSuccess(response));
  } catch (error) {
    dispatch(fetchSalesFunnelFailed());
  }
};
