import "./App.css";
import backgroudis from "./Images/background.png";
import Header from "./Component/Header/Header";
import MidSec from "./Component/Mid/Midsec";
import Form from "./Component/Form/Form";





const App = (props) => {
  return (
    <div
      className="containr"
      style={{
        backgroundImage: `url(${backgroudis})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
    <Header/>
    <MidSec/>
    <Form/>
    </div>
  );
};

export default App;
