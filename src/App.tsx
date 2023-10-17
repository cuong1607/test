import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { PageHeader } from "@ant-design/pro-layout";
import { Button, Card, Image, Layout } from "antd";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import logo from "../src/assets/images/JITS.png";
import Filter from "./components/Filter";
import SliderComponent from "./components/Slider";
import TableComponent from "./components/TableComponent";
import { columns } from "./components/TableComponent/Column.config";
import SideBar from "./layout/SideBar";
import { Services } from "./services";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  height: "100%",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#ffff",
  padding: "5px",
  overflow: "hidden",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#002447",
  overflowY: "scroll",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#002447",
  height: "300px",
};
const initFilter = {};
const App: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [page, setPage] = React.useState<number>(1);
  const [filterQuery, setFilterQuery] = React.useState(initFilter);
  const { data, isRefetching, isLoading, refetch } = useQuery<any>(
    ["data", page, filterQuery],
    () => Services.get({ page, ...filterQuery, size: 15 })
  );

  const returnFilter = React.useCallback(
    (filter: any) => {
      setPage(1);
      setFilterQuery({ ...filterQuery, ...filter });
    },
    [filterQuery]
  );
  console.log("data", data);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <div
            style={{
              height: "64px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button
              onClick={toggleCollapsed}
              style={{ color: "#ffff", border: "none", background: "none" }}
            >
              {collapsed ? (
                <MenuUnfoldOutlined style={{ color: "#ffff" }} />
              ) : (
                <MenuFoldOutlined style={{ color: "#ffff" }} />
              )}
            </Button>
            <div style={{ padding: "10px" }}>
              <Image
                style={{ height: "50px", borderRadius: "10px" }}
                src={logo}
                preview={false}
              />
            </div>
          </div>
          <SideBar collapsed={collapsed} />
        </Sider>
        <div style={{ width: "100%" }}>
          <Header style={headerStyle}>Header Banner</Header>
          <Content style={contentStyle}>
            <PageHeaderStyled title="Payroll services in bank" />
            <CardStyled
              title={<Filter returnFilter={returnFilter} key="filter" />}
              bordered={false}
              style={{ width: "100%", height: "75%" }}
              extra={<Button icon={<SearchOutlined />}>Search</Button>}
            >
              <TableComponent
                showTotalResult
                reLoadData={refetch}
                loading={isRefetching || isLoading}
                page={page}
                rowSelect={false}
                onChangePage={(_page) => setPage(_page)}
                dataSource={data?.data ? data?.data : []}
                columns={columns(page)}
                total={200}
              />
            </CardStyled>
          </Content>
        </div>
      </Layout>
      <Footer style={footerStyle}>
        <SliderComponent />
      </Footer>
    </Layout>
  );
};
const CardStyled = styled(Card)`
  & .ant-card-head-title {
    text-align: left;
    padding-left: 10px;
  }
  & .ant-card-body {
    height: 90%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 10px 0;
  }
  padding: 5px 10px 5px 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 8px 8px 8px 8px;
`;

const PageHeaderStyled = styled(PageHeader)`
  background: #ffff;
  padding: 5px 5px 5px;
  border-radius: 10px;
  margin-bottom: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
`;

export default App;
