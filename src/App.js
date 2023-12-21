import "./App.css";
// import { Card } from "./Card";
import { Products } from "./Products";
import Comp from "./Comp.jpeg";

import "bootstrap/dist/css/bootstrap.css";
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
      {Products.map((product) => (
        <>
          <h1>{product.name}</h1>

          <h2>{product.price}</h2>

          <img src={product.image} width="50%" />
        </>
        // <h1>{Products[1].name}</h1>

        // <h2>{Products[1].price}</h2>

        // <img src={Products[1].image} width="50%" />
      ))}
      {/* 
      <Card title="Programming" desc=" develop your own wepsite" />
      <Products></Products>
      <img src={Comp} width="50%" /> */}
    </div>
  );
}

export default App;
