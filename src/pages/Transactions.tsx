import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const arr: DataType[] = [
  {
    user: "John Doe",
    amount: 120.5,
    discount: 10,
    quantity: 2,
    status: <span className = 'green'>Completed</span>,
    action: <Link to="/admin/transaction/1">Manage</Link>,
  },
  {
    user: "Jane Smith",
    amount: 75.0,
    discount: 5,
    quantity: 1,
    status: <span style={{ color: 'orange' }}>Pending</span>,
    action: <Link to="/admin/transaction/2">Manage</Link>,
  },
  {
    user: "Robert Brown",
    amount: 200.0,
    discount: 20,
    quantity: 4,
    status: <span className = 'green'>Completed</span>,
    action: <Link to="/admin/transaction/3">Manage</Link>,
  },
  {
    user: "Emily Davis",
    amount: 50.0,
    discount: 0,
    quantity: 1,
    status: <span className="red">Cancelled</span>,
    action: <Link to="/admin/transaction/4">Manage</Link>,
  },
  {
    user: "Michael Wilson",
    amount: 150.0,
    discount: 15,
    quantity: 3,
    status: <span className = 'green'>Completed</span>,
    action: <Link to="/admin/transaction/5">Manage</Link>,
  },
  {
    user: "Sarah Johnson",
    amount: 90.0,
    discount: 10,
    quantity: 2,
    status: <span style={{ color: 'orange' }}>Pending</span>,
    action: <Link to="/admin/transaction/6">Manage</Link>,
  },
  {
    user: "David Lee",
    amount: 180.0,
    discount: 25,
    quantity: 3,
    status: <span className = 'green'>Completed</span>,
    action: <Link to="/admin/transaction/7">Manage</Link>,
  },
  {
    user: "Laura Martinez",
    amount: 130.0,
    discount: 15,
    quantity: 2,
    status: <span style={{ color: 'orange' }}>Pending</span>,
    action: <Link to="/admin/transaction/8">Manage</Link>,
  },
];


const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];




const Transactions = () => {
  const [data] = useState<DataType[]>(arr)

  const Table = useCallback(TableHOC<DataType>(
    columns,
    data,
    "dashboardProductBox",
    "Transactions",
    true
  ),[])

  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main>{Table()}</main>
    </div>
  )
}

export default Transactions