import React from "react";
import { Button } from "antd";

const Home = () => {
  const raiseError = () => {
    throw new Error();
  };
  return (
    <>
      <h1>This is the home page</h1>
      <div>
        <Button type="primary">Button</Button>
      </div>
      <p>This is my app</p>
      <Button onClick={raiseError}>Throw Error</Button>
    </>
  );
};

export default Home;
