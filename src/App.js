import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <div className="encabezado">
        <NavBar />
      </div>
      <div className="contenido">
        <ItemListContainer />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
