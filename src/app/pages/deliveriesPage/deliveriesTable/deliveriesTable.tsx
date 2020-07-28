import * as React from "react";
import { Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";

const columns: ColumnsType<any> = [
  {
    title: "Item",
    dataIndex: "item",
    key: "item",
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes",
  },
  {
    title: "Pickup Location",
    dataIndex: "pickup_location_id",
    key: "pickup_location",
  },
  {
    title: "Dropoff Location",
    dataIndex: "dropoff_location_id",
    key: "dropoff_location",
  },
  {
    title: "Fulfilled",
    dataIndex: "date_fulfilled",
    key: "fulfilled",
    align: "center",
    render: (date: any) => {
      const fulfilled = (
        <Tooltip placement="bottom" title={date}>
          <CheckCircleTwoTone
            twoToneColor="#306317"
            style={{ fontSize: "24px" }}
          />
        </Tooltip>
      );
      const notFulfilled = (
        <Tooltip placement="bottom" title="Not fulfilled">
          <CloseCircleTwoTone
            twoToneColor="#791a1f"
            style={{ fontSize: "24px" }}
          />
        </Tooltip>
      );
      return date ? fulfilled : notFulfilled;
    },
  },
];

interface Props {
  tableData: any;
}

const DeliveriesTable: React.FC<Props> = ({ tableData }) => (
  <Table columns={columns} dataSource={tableData} />
);

export default DeliveriesTable;
