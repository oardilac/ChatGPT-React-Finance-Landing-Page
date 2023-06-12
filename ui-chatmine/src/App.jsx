import styles from "./style";
import { Hero } from "./components";

const App = () => (
  <div className={`bg-primary ${styles.flexStart}`}>
    <header className="p-4 w-full">
      <div className={`${styles.boxWidth} flex justify-center`}>
        <Hero />
      </div>
    </header>
  </div>
);

export default App;