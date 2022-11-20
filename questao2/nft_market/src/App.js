import "./App.css";
import TopBar from "./components/topbar/Topbar";
import Background from "./components/background/Background";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TextImageSection from "./components/TextImageSection/TextImageSection";
import Number from "./components/number/Number";
import Carousel from "./components/carousel/carousel";


function App() {
  return (
    <div className="App">
        {/* <Background/> */}
        <TopBar/>
        <Header/>
        <Carousel/>
        <TextImageSection/>
        <Number/>
        <Footer/>
    </div>
  );
}

export default App;
