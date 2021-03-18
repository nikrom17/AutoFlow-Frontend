import React from 'react';
import { useHistory } from 'react-router';
import { Button, Row, Col, Result } from 'antd';

const NotFoundPage = () => {
  const history = useHistory();
  return (
    <Row justify="center" style={{ width: '100%', marginTop: '8rem' }}>
      <Col span={24}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" onClick={() => history.push('/')}>
              Back Home
            </Button>
          }
        />
      </Col>
    </Row>
  );
};

export default NotFoundPage;
