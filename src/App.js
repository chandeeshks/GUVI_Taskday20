import React from "react";
import {Counterpage} from "./pages/counter";
import {Pricingpage} from "./pages/pricing";


function App() {
  let data="pricing";
 return(
  <div className="App">
    {
    data === "pricing" ? <Pricingpage/> : <Counterpage/>
    }
  </div>
 )
}

export default App;
