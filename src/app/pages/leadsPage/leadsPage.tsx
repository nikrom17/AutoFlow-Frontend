import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import PageFrame from "@components/pageFrame/pageFrame";

const LeadsPage: React.FC = () => {
  const history = useHistory();
  return (
    <PageFrame
      title="Leads"
      buttonOnClick={() => console.log("Leads button")}
      buttonTitle="Add new lead"
    >
      <h1>This is the Leads page</h1>
      <div>
        <Button onClick={() => history.push("/home")} type="primary">
          Go to the home page
        </Button>
      </div>
    </PageFrame>
  );
};

export default LeadsPage;
