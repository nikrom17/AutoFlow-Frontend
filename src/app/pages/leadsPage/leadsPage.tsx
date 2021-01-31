import React from "react";
import { connect } from "react-redux";
import { AppState } from "src/redux/rootReducer";
import { DefaultSchema } from "src/redux/types/commonTypes";
import { Skeleton } from "antd";
import * as leadsTypes from "src/redux/types/leadsTypes";
import PageFrame from "@components/pageFrame/pageFrame";
import LeadsTable from './leadsTable/leadsTable';

interface StateProps {
  leads: leadsTypes.LeadsState;
}

interface Props extends StateProps {
  fetchLeads: leadsTypes.FetchLeads;
}

const LeadsPage: React.FC<Props> = ({ leads }) => {
  const { leads: lead } = leads;

    //todo make this reusable
    const transformData = (data: DefaultSchema<any>) =>
    data.allIds.map((id) => data.byId[id]);

  return (
    <PageFrame
      title="Leads"
      buttonOnClick={() => console.log("Leads button")}
      buttonTitle="Add new lead"
    >
      {lead.allIds.length ? (
        <LeadsTable tableData={transformData(lead)} />
      ) : (
        <Skeleton active paragraph={{ rows: 6 }} />
      )}
    </PageFrame>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  leads: state.leads,
})

export default connect(mapStateToProps)(LeadsPage);
