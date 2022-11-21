import "./App.css";
import Footer from "./components/footer/Footer";
import TextImageSection from "./components/TextImageSection/TextImageSection";
import Number from "./components/number/Number";
import Carousel from "./components/carousel/carousel";
import Background from "./components/background/Background";


function App() {
  return (
    <div className="App">
        <Background/>
        <Carousel/>
        <TextImageSection/>
        <Number/>
        <Footer/>
    </div>
  );
}

export default App;
