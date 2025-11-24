import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="main-wrapper">
        <section className="form-details__wrapper">
          <Form />
        </section>
        <aside>
          <img src="#" alt="Weather icon" />
        </aside>
      </div>
    </>
  );
}

export default App;
