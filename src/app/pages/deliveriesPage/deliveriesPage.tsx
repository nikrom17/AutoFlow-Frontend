import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import PageFrame from "@components/pageFrame/pageFrame";

const DeliveriesPage: React.FC = () => {
  const history = useHistory();
  return (
    <PageFrame
      title="Deliveries"
      buttonOnClick={() => console.log("Deliveries button")}
      buttonTitle="Schedule delivery"
    >
      <h1>This is the deliveries page</h1>
      <div>
        <Button onClick={() => history.push("/home")} type="primary">
          Go to the home page
        </Button>
      </div>
    </PageFrame>
  );
};

export default DeliveriesPage;
