import { ColumnsType } from "antd/lib/table";
export interface DataType {
  id: number;
  uid: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: number;
  date_of_birth: string;
  employment: Employment;
  address: Address;
  credit_card: {
    cc_number: number;
  };
  subscription: Subscription;
}

interface Employment {
  title: string;
  key_skill: string;
}
interface Subscription {
  plan: string;
  status: string;
  payment_method: string;
  term: string;
}
interface Address {
  city: string;
  street_name: string;
  street_address: string;
  zip_code: number;
  state: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const columns = (page: number): ColumnsType<DataType> => [
  {
    title: "STT",
    dataIndex: "id",
    align: "center",
    render: (row, record, index) =>
      page === 1 ? ++index : (page - 1) * 15 + ++index,
  },
  {
    title: "User Name",
    dataIndex: "username",
  },
  {
    title: "Phone Number",
    dataIndex: "phone_number",
  },
  {
    title: "Address",
    dataIndex: ["address", "street_address"],
    width: "500px",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Employment Title",
    dataIndex: ["employment", "title"],
  },
  {
    title: "Payment Method",
    dataIndex: ["subscription", "payment_method"],
  },
  {
    title: "Status",
    dataIndex: ["subscription", "status"],
  },
];
