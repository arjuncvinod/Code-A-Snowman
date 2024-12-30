const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1em",
        background: "transparent",
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <p
        style={{
          fontFamily: "Shantell Sans",
          color: "rgba(168, 165, 165, 0.95)",
        }}
      >
        Made with ❤️ by{" "}
        <a
          href="https://arjuncvinod.tech"
          style={{ textDecoration: "none", color: "inherit" }}
          target="_blank"
        >
          Arjun
        </a>
      </p>
    </footer>
  );
};

export default Footer;
