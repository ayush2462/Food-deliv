
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";
function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured/>
      <Footer/>
      <Delivery/>
    </div>
  );
}

export default App;
