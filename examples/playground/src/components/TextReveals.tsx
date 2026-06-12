import { TextReveal } from "react-gsap-effects";

function TextReveals() {
  return (
    <div
      style={{
        padding: "100px",
        fontSize: "6rem",
        fontWeight: "bold",
      }}
    >
      <TextReveal  text="Hello from react-gsap-effects" />
    </div>
  );
}

export default TextReveals;
