import { Hero } from "./components";
import "./index.css";

const App = () => (
<div className="bg-hero-bg bg-primary bg-black flexStart">
  <header className="p-4 w-full">
    <div className="flex justify-center boxWidth">
      <Hero />
    </div>
  </header>
</div>
);

export default App;