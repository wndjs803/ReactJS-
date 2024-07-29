import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcom back to React!</h1>
      <Button text={"start"} />
    </div>
  );
}

export default App;
