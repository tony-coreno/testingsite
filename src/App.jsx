import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <nav className="bar">
        <div>
          <img className="logo" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-bug-no-code-flaticons-flat-flat-icons-2.png" />
          <img  className="logo2" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-testing-back-to-work-flaticons-lineal-color-flat-icons-4.png"/>
        </div>

      </nav>
      <div className="container-sm">
        <h1 className="mt-4 text-center">Testing<span> QA</span></h1>
        <hr />
        <div className="grid-container">
          <section>
            <h2 className="text-center">Principios Testing</h2>
          </section>
          <section className="text-center">
            <h2>Matriz de Pruebas</h2>
          </section>
          <section className="text-center">
            <h2>Casos de Pruebas</h2>
          </section>
          <section className="text-center">
            <h2>Defectos</h2>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
