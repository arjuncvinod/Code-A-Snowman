import "./ChristmasTree.css";

const LightRope = () => {
  const lights = [
    { top: "40.8%", left: "36%" },
    { top: "41.3%", left: "42%" },
    { top: "40.6%", left: "48%" },
    { top: "38.5%", left: "54%" },
    { top: "55.5%", left: "28%" },
    { top: "56%", left: "34%" },
    { top: "56.2%", left: "40%" },
    { top: "55.5%", left: "46%" },
    { top: "53.9%", left: "52%" },
    { top: "51.3%", left: "58%" },
    { top: "49.1%", left: "62%" },
    { top: "72%", left: "24%" },
    { top: "72.6%", left: "30%" },
    { top: "72.8%", left: "36%" },
    { top: "72.7%", left: "42%" },
    { top: "72%", left: "48%" },
    { top: "70.8%", left: "54%" },
    { top: "68.8%", left: "60%" },
    { top: "65.2%", left: "66%" },
  ];

  return (
    <ul className="lightrope">
      {lights.map((light, index) => (
        <li key={index} style={{ top: light.top, left: light.left }}></li>
      ))}
    </ul>
  );
};

// eslint-disable-next-line react/prop-types
const TreeSection = ({ sectionClass }) => (
  <ul className={`tree ${sectionClass}`}>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
);

// eslint-disable-next-line react/prop-types
const ChristmasTree = ({ position }) => {
  return (
    <div className="tree-container">
      <div className="tree-wrap" style={{ width: position }}>
        <div className="star">
          <div className="star-inner"></div>
        </div>

        <TreeSection sectionClass="top" />
        <TreeSection sectionClass="middle" />
        <TreeSection sectionClass="bottom" />
        <LightRope />
      </div>
    </div>
  );
};

export default ChristmasTree;
