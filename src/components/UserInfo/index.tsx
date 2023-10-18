import { DownOutlined } from "@ant-design/icons";
import { Avatar, Popover, Row } from "antd";

const UserInfo = () => {
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
    </ul>
  );
  return (
    <Row wrap={false} justify="start" className="gx-avatar-row gx-m-0">
      <Popover
        placement="bottomRight"
        content={userMenuOptions}
        trigger="click"
      >
        <Avatar
          src="https://via.placeholder.com/150x150"
          className="gx-size-40 gx-pointer gx-mr-3"
          alt=""
        />
        <span className="gx-avatar-name">
          Đỗ văn cường
          <DownOutlined className="gx-fs-sm gx-ml-4" />
        </span>
      </Popover>
    </Row>
  );
};

export default UserInfo;
