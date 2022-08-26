import Chart from "../../component/chart/Chart";
import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetLarge from "../../component/widgetLarge/WidgetLarge";
import WidgetSmall from "../../component/widgetSmall/WidgetSmall";

export default function home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
