import React from "react";
import { Button, Tooltip, Avatar, Badge } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavContext } from "@components/navigation/context/navigation";
import * as styles from "./header.module.less";

const Header = () => {
  const {
    navigationContext: { collapsed },
    setNavigationContext,
  } = React.useContext(NavContext);

  return (
    <div className={styles.header}>
      {/* <Button
        type="primary"
        onClick={() => setNavigationContext({ collapsed: !collapsed })}
        style={{ marginBottom: 16 }}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      ></Button> */}
      <div className={styles.openCloseNav}>
        <Tooltip title={collapsed ? "Expand Navigation" : "Close Navigation"}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Tooltip>
      </div>
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
