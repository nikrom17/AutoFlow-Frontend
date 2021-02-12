import { createSelector } from 'reselect';
import { LeadsState } from 'src/redux/types/leadsTypes';
import { RootState } from 'src/redux/rootReducer';

const getSalesFunnels = (state: RootState) => state.salesFunnels;
const getLeads = (state: RootState) => state.leads;

const transformLeadsTableData = (leads: LeadsState) =>
  leads.allIds.map((id) => {
    const lead = leads.byId[id];
    // const lead = leads.byId[todo.leadId];

    return { ...lead };
  });

export const getLeadsTableData = createSelector(
  getLeads,
  getSalesFunnels,
  (leads, salesFunnels) => transformLeadsTableData(leads)
);
