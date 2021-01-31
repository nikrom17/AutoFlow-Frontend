import * as React from "react";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import getStatusColor from "@utils/getTagColor";
import * as styles from './todosTable.module.less';

const columns: ColumnsType<any> = [
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Lead",
    dataIndex: "leadId",
    key: "leadId",
  },
  {
    title: "Last Comm.",
    dataIndex: "pickup_location_id",
    key: "pickup_location",
  },
  {
    title: "Price Estimate",
    dataIndex: "dropoff_location_id",
    key: "dropoff_location",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => <Tag color={getStatusColor(status)}>{status}</Tag>
  },
  {
    title: "Rank ",
    dataIndex: "priority_rank",
    key: "priority_rank",
    render: (rank: number) => <span className={styles.rank}>{rank}</span>
  },
];

interface Props {
  tableData: any;
}

const DeliveriesTable: React.FC<Props> = ({ tableData }) => (
  <Table columns={columns} dataSource={tableData} rowSelection={{type: "checkbox"}}/>
);

export default DeliveriesTable;
