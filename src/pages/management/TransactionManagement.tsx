import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const orderItems: OrderItemType[] = [
  {
    name: "Wireless Mouse",
    photo: "https://m.media-amazon.com/images/I/41KuRShR97L._SL1200_.jpg",
    price: 25.0,
    quantity: 2,
    _id: "item123",
  },
  {
    name: "Mechanical Keyboard",
    photo: "https://m.media-amazon.com/images/I/61WUmAjikrL._SL1500_.jpg",
    price: 100.0,
    quantity: 4,
    _id: "item124",
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "John Doe",
    address: "123 Main St",
    city: "Springfield",
    country: "USA",
    state: "IL",
    pinCode: 62701,
    status: "Processing",
    subTotal: 150.0,
    discount: 10.0,
    shippingCharges: 5.0,
    tax: 12.75,
    total: 157.75,
    orderItems,
    _id: "order456",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subTotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <section style={{
          padding:"2rem",
        }}>
          <h2>Order Items</h2>
          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
        </section>
        <article className="shippingInfoCard">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name : {name}</p>
          <p>
            Address :{" "}
            {`${address}, \n${city}-${pinCode}, \n${state}, \n${country}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal : ₹{subTotal}</p>
          <p>Shipping Charges : ₹{shippingCharges}</p>
          <p>Tax : ₹{tax}</p>
          <p>Discount : ₹{discount}</p>
          <p>Total : ₹{total}</p>

          <h5>Status Info</h5>
          <p>
            Status :{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transactionProductCard">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ₹{price} X {quantity} = ₹{quantity * price}
    </span>
  </div>
);

export default TransactionManagement;
