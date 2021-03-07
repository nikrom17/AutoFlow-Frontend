import React from 'react';
import PageFrame from '@components/pageFrame/pageFrame';
import { Row, Col, Card, Statistic, Divider } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import * as styles from './homePage.module.less';

const Home: React.FC = () => {
  return (
    <PageFrame>
      <h1 className={styles.home}>Home</h1>
      <Divider />
      <Row gutter={[24, 48]} className="rowStatistics">
        <Col span={6}>
          <Card>
            <Row justify="space-between" align="bottom">
              <Col span={12}>
                <Statistic title="Total Leads" value={13} precision={0} />
              </Col>
              <Col span={5}>
                <div className={styles.statisticPercentageUp}>
                  <ArrowUpOutlined /> 4%
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Row justify="space-between" align="bottom">
              <Col span={12}>
                <Statistic title="Total Todos" value={10} precision={0} />
              </Col>
              <Col span={5}>
                <div className={styles.statisticPercentageUp}>
                  <ArrowDownOutlined /> 1%
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Row justify="space-between" align="bottom">
              <Col span={12}>
                <Statistic
                  title="Opportunity Value"
                  value={5000}
                  precision={0}
                  prefix="$"
                />
              </Col>
              <Col span={5}>
                <div className={styles.statisticPercentageUp}>
                  <ArrowUpOutlined /> 11%
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Row justify="space-between" align="bottom">
              <Col span={12}>
                <Statistic title="Conversion Rate" value={13} precision={0} suffix="%" />
              </Col>
              <Col span={5}>
                <div className={styles.statisticPercentageDown}>
                  <ArrowDownOutlined /> 5%
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </PageFrame>
  );
};

export default Home;
