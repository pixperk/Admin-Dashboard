import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/Chart";
import { categories } from "../../assets/data.json";

const PieCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Pie Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              backgroundColor={["#007BFF", "#FF8474", "#C4E17F"]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fulfillment ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 6},${i.value}%,50%)`
              )}
              legends={false}
              offset={categories.map((i) => i.value)}
            />
          </div>
          <h2>Product Categories</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["Available", "Out Of Stock"]}
              data={[40, 20]}
              backgroundColor={["green", "red"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={[
                "Electronics",
                "Clothing",
                "Books",
                "Toys",
                "Home Decor",
                "Sports Equipment",
              ]}
              data={[25, 15, 20, 10, 15, 15]} // Example data percentages for 6 items
              backgroundColor={[
                "#4CAF50",
                "#FF9800",
                "#9C27B0",
                "#2196F3",
                "#F44336",
                "#FFEB3B",
              ]} // Example background colors for 6 items
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
        <section>
          <div>
            <PieChart
              labels={[
                "Teenager(Below 20)",
                "Adult(20-65)",
                "Senior Citizens(above 65)",
              ]}
              data={[30, 250, 70]}
              backgroundColor={["#FF9800", "#9C27B0", "#2196F3"]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Age group of customers</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["Admins", "Customers"]}
              data={[40, 250]}
              backgroundColor={["#F44336", "#FFEB3B"]}
              offset={[0, 80]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
