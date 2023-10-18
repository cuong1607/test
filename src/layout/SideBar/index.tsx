import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <PieChartOutlined />),
  getItem("Contract", "2", <DesktopOutlined />, [
    getItem("Contract list", "3"),
    getItem("Create new contract", "4"),
    getItem("Approve contract", "5"),
    getItem("Approve user", "6"),
    getItem("Unblock contract", "7"),
    getItem("Unblock user", "8"),
    getItem("Reset pin/ password", "8"),
  ]),
  getItem("Fee management", "9", <AppstoreOutlined />, [
    getItem("Set fee", "10"),
    getItem("Transaction fee ", "11", null, [
      getItem("Product fee", "12"),
      getItem("Contract fee", "13"),
      getItem("OTC fee", "14"),
    ]),
    getItem("Set fee share", "15"),
  ]),
  getItem("Limit management", "16", <ContainerOutlined />, [
    getItem("Product limit", "17"),
    getItem("Contract limit", "18"),
    getItem("Wallet balance limit", "19"),
  ]),
  getItem("Transaction", "20", <ContainerOutlined />, [
    getItem("Transaction history", "21"),
    getItem("Top Up to E-wallet", "22"),
    getItem("Withdrawal from E-wallet", "23"),
    getItem("Cash back", "23"),
    getItem("Payroll", "24"),
    getItem("Admin transaction", "25"),
    getItem("TReversal transaction", "26"),
  ]),
  getItem("System", "27", <ContainerOutlined />, [
    getItem("Group management", "28"),
    getItem("User management", "29"),
    getItem("System parameter", "30"),
  ]),
  getItem("Report", "31", <ContainerOutlined />, [
    getItem("Report list", "32"),
  ]),
];

interface IProps {
  collapsed: boolean;
}

const SideBar = (props: IProps) => {
  const { collapsed } = props;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "scroll",
        background: "#ffff",
      }}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={true}
        items={items}
      />
    </div>
  );
};

export default SideBar;
