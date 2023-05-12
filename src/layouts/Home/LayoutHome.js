import React from "react";
import { Layout } from "antd";
import "./LayoutHome.scss";

export const LayoutHome = (props) => {
    const { children } = props;
    const { Content } = Layout;
  return (
    <Layout>
        <Content className="layout-general-content">{children}</Content>
    </Layout>
  );
};