import React from "react";
import { Button, Tooltip, Avatar, Badge } from "antd";
import { SearchOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import * as styles from "./header.module.less";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeftSide}>
        <Tooltip title="Search">
          <div className={styles.headerChild}>
            <Button shape="circle" icon={<SearchOutlined />} />
          </div>
        </Tooltip>
        <Tooltip title="Notifications">
          <div className={styles.headerChild}>
            <Badge count={3}>
              <Button shape="circle" icon={<BellOutlined />} />
            </Badge>
          </div>
        </Tooltip>
        <Tooltip title="User settings">
          <div className={styles.headerChild}>
            <Avatar className={styles.avatar} icon={<UserOutlined />} />
            <p>Nik</p>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
