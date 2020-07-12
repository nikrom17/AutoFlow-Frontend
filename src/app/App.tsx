import * as React from "react";
import { Button } from "antd";
import ErrorPage from "@pages/errorPage/errorPage";

const App: React.FC = () => {
  const raiseError = () => {
    throw new Error();
  };
  return (
    <div>
      <p>This is my app</p>
      <ErrorPage>
        <Button onClick={raiseError}>Throw Error</Button>
      </ErrorPage>
    </div>
  );
};

export default App;
