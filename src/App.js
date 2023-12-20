import "./App.css";
import { Card } from "./Card";
import Comp from "./Comp.jpeg";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal",
      }}
    >
      <Card title="Programming" desc=" develop your own wepsite" />

      <img src={Comp} width="50%" />
    </div>
  );
}

export default App;
