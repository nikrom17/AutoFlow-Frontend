import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import PageFrame from "@components/pageFrame/pageFrame";

const LocationsPage = () => {
  const history = useHistory();
  return (
    <PageFrame
      title="Locations"
      buttonOnClick={() => console.log("Locations button")}
      buttonTitle="Add new location"
    >
      <h1>This is the Locations page</h1>
      <div>
        <Button onClick={() => history.push("/home")} type="primary">
          Go to the home page
        </Button>
      </div>
    </PageFrame>
  );
};

export default LocationsPage;
