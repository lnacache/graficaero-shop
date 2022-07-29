import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <div className="encabezado">
        <NavBar />
      </div>
      <div className="contenido">
        <ItemDetailContainer />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
