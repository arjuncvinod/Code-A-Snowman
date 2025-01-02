import "./SnowFlake.css";

const Snowflake = () => {
  return (
    <div className="snowflakes">
      {Array.from({ length: 100 }).map((_, index) => {
        const randomDelay = `${Math.random() * 5}s`;
        const randomDuration = `${6 + Math.random() * 6}s`;
        const randomOpacity = Math.random() * 0.7 + 0.3;
        return (
          <i
            key={index}
            style={{
              animationDelay: randomDelay,
              animationDuration: randomDuration,
              opacity: randomOpacity,
            }}
          ></i>
        );
      })}
    </div>
  );
};

export default Snowflake;
