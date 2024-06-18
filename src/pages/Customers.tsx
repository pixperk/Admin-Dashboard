import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrashAlt } from "react-icons/fa";

interface DataType {
  icon: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}



const columns: Column<DataType>[] = [
  {
    Header: "Icon",
    accessor: "icon",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr:DataType[] = [
  {
    icon: <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Doe" />,
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "Male",
    role: "Administrator",
    action:<button><FaTrashAlt/></button>,
  },
  {
    icon: <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Jane Smith" />,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    gender: "Female",
    role: "Editor",
    action: <button><FaTrashAlt/></button>,
  },
  {
    icon: <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Robert Brown" />,
    name: "Robert Brown",
    email: "robert.brown@example.com",
    gender: "Male",
    role: "Moderator",
    action: <button><FaTrashAlt/></button>,
  },
  {
    icon: <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Emily Davis" />,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    gender: "Female",
    role: "Subscriber",
    action: <button><FaTrashAlt/></button>,
  },
  {
    icon: <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="Michael Wilson" />,
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    gender: "Male",
    role: "Contributor",
    action: <button><FaTrashAlt/></button>,
  },
  {
    icon: <img src="https://randomuser.me/api/portraits/women/6.jpg" alt="Sarah Johnson" />,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    gender: "Female",
    role: "Subscriber",
    action: <button><FaTrashAlt/></button>,
  },
  {
    icon: <img src="https://randomuser.me/api/portraits/men/7.jpg" alt="David Lee" />,
    name: "David Lee",
    email: "david.lee@example.com",
    gender: "Male",
    role: "Administrator",
    action: <button><FaTrashAlt/></button>,
  },
  {
    icon: <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="Laura Martinez" />,
    name: "Laura Martinez",
    email: "laura.martinez@example.com",
    gender: "Female",
    role: "Editor",
    action: <button><FaTrashAlt/></button>,
  },
];


const Customers = () => {
 const[data] = useState<DataType[]>(arr)

 const Table = useCallback(TableHOC<DataType>(
  columns,
  data,
  "dashboardProductBox",
  "Customers",
  true
),[])

  return (
    <div className="adminContainer">
    <AdminSidebar/>
    <main>{Table()}</main>
  </div>
  )
}

export default Customers