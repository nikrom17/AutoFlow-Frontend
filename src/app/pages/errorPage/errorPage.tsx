import React, { ErrorInfo } from 'react';
import { Result, Row, Col } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {}
interface State {
  hasError?: Boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Row justify="center" style={{ width: '100%', marginTop: '8rem' }}>
          <Col span={24}>
            <Result status="500" title="500" subTitle="Sorry, something went wrong." />
          </Col>
        </Row>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
