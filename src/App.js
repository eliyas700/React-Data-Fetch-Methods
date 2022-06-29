import { Suspense } from "react";
import "./App.css";
import Quote from "./Components/SWR/Quote";

function App() {
  return (
    <div className="App">
      <h2>Let's Fetch Data from URL</h2>

      <Quote />
    </div>
  );
}

export default App;
