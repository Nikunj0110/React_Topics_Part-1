import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeComponent = () => {
  const { Theme, themetoggler } = useContext(ThemeContext);

  const style = {
    backgroundColor: Theme === "light" ? "#fff" : "#333",
    color: Theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "2rem",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <div style={style}>
        <h1>{Theme.charAt(0).toUpperCase() + Theme.slice(1)} Theme</h1>
        <button onClick={themetoggler}>
          Toggle to {Theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
    </>
  );
};

export default ThemeComponent;
