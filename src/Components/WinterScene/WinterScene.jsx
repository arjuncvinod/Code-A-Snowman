import Snowman from "../Snowman/Snowman";
import ChristmasTree from "../ChristmasTree/ChristmasTree";
import Snowflake from "../SnowFlake/Snowflake";
import Footer from "../Footer/Footer";
import Ground from "../Ground/Ground";
import Sky from "../Sky/Sky";
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
