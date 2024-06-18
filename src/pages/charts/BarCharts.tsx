import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Chart";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[120, 340, 450, 670, 890, 720, 600]}
            data_2={[230, 450, 560, 300, 150, 420, 500]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(210, 70%, 50%)`} 
            bgColor_2={`hsl(120, 60%, 70%)`} 
          />
          <h2>Top Selling Products and Top Customers</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data_1={[340, 450, 670, 890, 720, 600,756,454,765,323,233,987]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(30, 100%, 60%)`} 
            bgColor_2={``} 
            labels={months}
          />
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
