import Snowman from "./Snowman";
import ChristmasTree from "./ChristmasTree";
import Snowflake from "./Snowflake";
import Footer from "./Footer";
import Ground from "./Ground";
import Sky from "./Sky";
import "./WinterScene.css";

const WinterScene = () => (
  <div className="scene">
    <Sky />
    <Ground />
    <Snowman />
    <ChristmasTree />
    <ChristmasTree position="75%" />
    <Snowflake />
    <Footer />
  </div>
);

export default WinterScene;
