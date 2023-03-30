import "./Header.css";

const Header = () => {
  return (
    <div className="wrapper">
      <p className="firstname">Оформление<span className="inner">Заказа</span></p>
      <p className="subject">Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
    </div>
  );
};

export default Header;
