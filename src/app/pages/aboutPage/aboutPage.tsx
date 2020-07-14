import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <h1>This is the about page</h1>
      <div>
        <Button onClick={() => history.push("/home")} type="primary">
          Go to the home page
        </Button>
      </div>
    </>
  );
};

export default Home;
