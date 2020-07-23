import React from "react";
import { NavContext } from "@components/navigation/context/navigation";
import * as styles from "./navigation.module.less";
import { Menu } from "antd";
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Navigation = () => {
  const {
    navigationContext: { collapsed },
  } = React.useContext(NavContext);

  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <img
          alt="logo"
          src="https://cdn.canopytax.com/static/primary-navbar/canopy-logo-light.svg"
        />
      </div>
    </div>
  );
};

export default Navigation;

// <Menu
//   defaultSelectedKeys={["1"]}
//   defaultOpenKeys={["sub1"]}
//   mode="vertical"
//   theme="dark"
//   inlineCollapsed={collapsed}
// >
//   <Menu.Item key="1" icon={<MailOutlined width={60} />}>
//     Navigation One
//   </Menu.Item>
//   <Menu.Item key="2" icon={<CalendarOutlined />}>
//     Navigation Two
//   </Menu.Item>
//   <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
//     <Menu.Item key="3">Option 3</Menu.Item>
//     <Menu.Item key="4">Option 4</Menu.Item>
//     <SubMenu key="sub1-2" title="Submenu">
//       <Menu.Item key="5">Option 5</Menu.Item>
//       <Menu.Item key="6">Option 6</Menu.Item>
//     </SubMenu>
//   </SubMenu>
//   <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
//     <Menu.Item key="7">Option 7</Menu.Item>
//     <Menu.Item key="8">Option 8</Menu.Item>
//     <Menu.Item key="9">Option 9</Menu.Item>
//     <Menu.Item key="10">Option 10</Menu.Item>
//   </SubMenu>
//   <Menu.Item key="link" icon={<LinkOutlined />}>
//     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//       Ant Design
//     </a>
//   </Menu.Item>
// </Menu>
