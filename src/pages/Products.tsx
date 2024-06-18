import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  picture: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Picture",
    accessor: "picture",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];



const arr:DataType[] = [
  {
    picture: <img src="https://via.placeholder.com/150?text=Macbook" alt="Macbook" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/macbook">Manage</Link>,
  },
  {
    picture: <img src="https://via.placeholder.com/150?text=Shoes" alt="Shoes" />,
    name: "Shoes",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/shoes">Manage</Link>,
  },
  {
    picture: <img src="https://via.placeholder.com/150?text=Phone" alt="Phone" />,
    name: "Phone",
    price: 1200,
    stock: 150,
    action: <Link to="/admin/product/phone">Manage</Link>,
  },
  {
    picture: <img src="https://via.placeholder.com/150?text=Headphones" alt="Headphones" />,
    name: "Headphones",
    price: 299,
    stock: 50,
    action: <Link to="/admin/product/headphones">Manage</Link>,
  },
  {
    picture: <img src="https://via.placeholder.com/150?text=Watch" alt="Watch" />,
    name: "Watch",
    price: 199,
    stock: 80,
    action: <Link to="/admin/product/watch">Manage</Link>,
  },
  {
    picture: <img src="https://via.placeholder.com/150?text=Tablet" alt="Tablet" />,
    name: "Tablet",
    price: 350,
    stock: 120,
    action: <Link to="/admin/product/tablet">Manage</Link>,
  },
  {
    picture: <img src="https://via.placeholder.com/150?text=Camera" alt="Camera" />,
    name: "Camera",
    price: 800,
    stock: 40,
    action: <Link to="/admin/product/camera">Manage</Link>,
  },
  {
    picture: <img src="https://via.placeholder.com/150?text=Speaker" alt="Speaker" />,
    name: "Speaker",
    price: 150,
    stock: 60,
    action: <Link to="/admin/product/speaker">Manage</Link>,
  },
  {
    picture: <img src="https://via.placeholder.com/150?text=Monitor" alt="Monitor" />,
    name: "Monitor",
    price: 400,
    stock: 90,
    action: <Link to="/admin/product/monitor">Manage</Link>,
  },
  {
    picture: <img src="https://via.placeholder.com/150?text=Keyboard" alt="Keyboard" />,
    name: "Keyboard",
    price: 100,
    stock: 200,
    action: <Link to="/admin/product/keyboard">Manage</Link>,
  },
];


const Products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(TableHOC<DataType>(
    columns,
    data,
    "dashboardProductBox",
    "Products",
    true
  ),[])

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="createProductButton">
      <FaPlus/>
      </Link>
    </div>
  );
};

export default Products;
