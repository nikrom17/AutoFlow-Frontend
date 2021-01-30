import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import PageFrame from "@components/pageFrame/pageFrame";

const FunnelPage: React.FC = () => {
  const history = useHistory();
  return (
    <PageFrame
      title="Funnel"
      buttonOnClick={() => console.log("Funnel button")}
      buttonTitle="Add new funnel"
    >
      <h1>This is the Funnel page</h1>
      <div>
        <Button onClick={() => history.push("/home")} type="primary">
          Go to the home page
        </Button>
      </div>
    </PageFrame>
  );
};

export default FunnelPage;
