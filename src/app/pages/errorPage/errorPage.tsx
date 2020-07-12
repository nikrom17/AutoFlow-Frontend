import React from "react";
// import { Button } from "antd";

interface Props {
  error: Error | null;
  componentStack: string | null;
}

const ErrorPage: React.FC<Props> = ({ componentStack, error }) => (
  <>
    <div>You have encountered an error</div>
    <div>{error || error!.toString()}</div>
    <div>{componentStack}</div>
  </>
);

export default ErrorPage;
