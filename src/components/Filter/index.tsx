import { Input, Select, Space } from "antd";
const { Option } = Select;
const Filter = ({ returnFilter }: { returnFilter: (filter: any) => void }) => {
  const onChange = (value: any) => {
    returnFilter({ username: value });
  };

  return (
    <Space size="middle" wrap>
      <Input onChange={onChange} placeholder="Search User Name" />
      <Input onChange={onChange} placeholder="Search Phone Number" />
      <Input onChange={onChange} placeholder="Search Address" />
      <Select
        placeholder="Payment Method"
        allowClear
        style={{ width: "160px" }}
        defaultValue={null}
        // onChange={handleChangeStatus}
      >
        <Option value={"Cheque"}>Cheque</Option>
        <Option value={"WeChat Pay"}>WeChat Pay</Option>
        <Option value={"Visa checkout"}>Visa checkout</Option>
        <Option value={"Google Pay"}>Google Pay</Option>
        <Option value={"Debit card"}>Debit card</Option>
      </Select>
      <Select
        placeholder="Status"
        allowClear
        style={{ width: "160px" }}
        defaultValue={null}
        // onChange={handleChangeStatus}
      >
        <Option value={"Active"}>Active</Option>
        <Option value={"Idle"}>Idle</Option>
        <Option value={"Blocked"}>Blocked</Option>
        <Option value={"Pending"}>Pending</Option>
      </Select>
    </Space>
  );
};

export default Filter;
