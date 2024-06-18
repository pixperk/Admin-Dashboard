import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactions"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Toss = lazy(() => import("./pages/apps/Toss"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={
            <Link to="/admin/dashboard">
              <button id="closeSidebar">
                DASHBOARD
              </button>
            </Link>
          }/>

          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/products" element={<Products />}></Route>
          <Route path="/admin/transactions" element={<Transactions />}></Route>
          <Route path="/admin/customers" element={<Customers />}></Route>
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />

          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
