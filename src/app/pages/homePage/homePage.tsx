import * as React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card, Statistic, Divider, Skeleton } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { getNumberOfTodos } from 'src/redux/todos/todosSelectors';
import { getNumberOfLeads } from 'src/redux/leads/leadsSelectors';
import { getTotalOpportunityValue } from 'src/redux/opportunities/opportunitiesSelectors';
import { fetchTodos } from 'src/redux/todos/todosActions';
import { fetchLeads } from 'src/redux/leads/leadsActions';
import { fetchOpportunityInfos } from 'src/redux/opportunities/opportunitiesActions';
import useReduxFetch from '@hooks/useReduxFetch';
import PageFrame from '@components/pageFrame/pageFrame';
import * as styles from './homePage.module.less';

const Home: React.FC = () => {
  const numberOfTodos = useSelector(getNumberOfTodos);
  const numberOfLeads = useSelector(getNumberOfLeads);
  const totalOpportunityValue = useSelector(getTotalOpportunityValue);

  const { isFetching: isFetchingTodos } = useReduxFetch([fetchTodos]);
  const { isFetching: isFetchingLeads } = useReduxFetch([fetchLeads]);
  const { isFetching: isFetchingOpportunityInfo } = useReduxFetch([
    fetchOpportunityInfos,
  ]);

  return (
    <PageFrame>
      <h1 className={styles.home}>Home</h1>
      <Divider />
      <Row gutter={[24, 48]} className="rowStatistics">
        <Col xl={6} xs={12}>
          {isFetchingLeads ? (
            <Skeleton title={false} paragraph={{ rows: 4 }} active />
          ) : (
            <Card>
              <Row justify="space-between" align="bottom">
                <Col span={18}>
                  <Statistic title="Total Leads" value={numberOfLeads} precision={0} />
                </Col>
                <Col span={6}>
                  <div className={styles.statisticPercentageUp}>
                    <ArrowUpOutlined /> 4%
                  </div>
                </Col>
              </Row>
            </Card>
          )}
        </Col>
        <Col xl={6} xs={12}>
          {isFetchingTodos ? (
            <Skeleton title={false} paragraph={{ rows: 4 }} active />
          ) : (
            <Card>
              <Row align="bottom">
                <Col span={18}>
                  <Statistic title="Total Todos" value={numberOfTodos} precision={0} />
                </Col>
                <Col span={6}>
                  <div className={styles.statisticPercentageUp}>
                    <ArrowDownOutlined /> 1%
                  </div>
                </Col>
              </Row>
            </Card>
          )}
        </Col>
        <Col xl={6} xs={12}>
          {isFetchingOpportunityInfo ? (
            <Skeleton title={false} paragraph={{ rows: 4 }} active />
          ) : (
            <Card>
              <Row align="bottom">
                <Col span={18}>
                  <Statistic
                    title="Opportunity Value"
                    value={totalOpportunityValue}
                    precision={0}
                    prefix="$"
                  />
                </Col>
                <Col span={6}>
                  <div className={styles.statisticPercentageUp}>
                    <ArrowUpOutlined /> 11%
                  </div>
                </Col>
              </Row>
            </Card>
          )}
        </Col>
        <Col xl={6} xs={12}>
          <Card>
            <Row align="bottom">
              <Col span={18}>
                <Statistic title="Conversion Rate" value={13} precision={0} suffix="%" />
              </Col>
              <Col span={6}>
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
