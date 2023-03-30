import "./Midsec.css";
import search from "../../Images/search.png";
import percentage from "../../Images/percentage.png";
import pdf from "../../Images/pdf.png";
import mail from "../../Images/mail.png";
import one from "../../Images/one.png";

const MidSec = () => {
  return (
    <div className="mainwrapper">
      <div className="outerwrapper">
        <div className="wrapperis">
          <div className="innerwrapper">
            <div className="roundwrapper">
              <img alt="logoofimg" src={search} />
            </div>
            <h1 className="dot">. . . . .</h1>
          </div>
          <div className="subwrapper">
            <p className="subjct">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>

      <div className="outerwrapper">
        <div className="wrapperis">
          <div className="innerwrapper">
            <div className="roundwrapper">
              <img alt="logoofimg" src={percentage} />
            </div>
            <h1 className="dot">. . . . .</h1>
          </div>
          <div className="subwrapper">
            <p className="subjct">Сonsecteturadipiscing elit</p>
          </div>
        </div>
      </div>

      <div className="outerwrapper">
        <div className="wrapperis">
          <div className="innerwrapper">
            <div className="roundwrapper">
              <img alt="logoofimg" src={pdf} />
            </div>
            <h1 className="dot">. . . . .</h1>
          </div>
          <div className="subwrapper">
            <p className="subjct">Sed do eiusmod tempor</p>
          </div>
        </div>
      </div>
      <div className="outerwrapper">
        <div className="wrapperis">
          <div className="innerwrapper">
            <div className="roundwrapper">
              <img alt="logoofimg" src={mail} />
            </div>
            <h1 className="dot">. . . . .</h1>
          </div>
          <div className="subwrapper">
            <p className="subjct">Esse cillum dolore eu fugiat</p>
          </div>
        </div>
      </div>

      <div className="outerwrapper">
        <div className="wrapperis" id="wrap">
          <div className="innerwrapper">
            <div className="roundwrapper">
              <img alt="logoofimg" src={one} />
            </div>
            <h1 className="dot" id="hide">
              . . . . .
            </h1>
          </div>
          <div className="subwrapper">
            <p className="subjct" id="big">Excepteur sint occaecat cupidatat non proident</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidSec;
