import TextReveal from "./components/TextReveals";
import MagneticButton from "./components/MagneticButton";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MagneticButton>
        <button
          style={{
            padding: "20px 40px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Hover Me
        </button>
      </MagneticButton>
    </div>
  );
}

export default App;
