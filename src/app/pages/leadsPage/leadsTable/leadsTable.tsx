import * as React from "react";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import getStatusColor from "@utils/getTagColor";

const columns: ColumnsType<any> = [
  {
    title: "Lead",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Sales Funnel",
    dataIndex: "salesFunnel",
    key: "salesFunnel",
  },
  {
    title: "Last Comm.",
    dataIndex: "lastComm",
    key: "lastComm",
  },
  {
    title: "Price Estimate",
    dataIndex: "opportunityInfo",
    key: "opportunityInfo",
    render: ((opportunityInfo: any) => <span>{opportunityInfo.quotedPrice}</span>)
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => <Tag color={getStatusColor(status)}>{status}</Tag>
  },
];

interface Props {
  tableData: any;
}

const DeliveriesTable: React.FC<Props> = ({ tableData }) => (
  <Table columns={columns} dataSource={tableData} rowSelection={{type: "checkbox"}}/>
);

export default DeliveriesTable;
