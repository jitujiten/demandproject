import "./Form.css";

const Form = () => {

   const submitinghandler=(e)=>{
    e.preventDefault();

   
   }



  return (
    <div className="mainwraper">
      <form onSubmit={submitinghandler}>
        <span className="mainwraperis">
          <select>
            <option value="Выберите тип системы" id="Выберите">Выберите тип системы</option>
          </select>
          <input type="email" placeholder="Ваш e-mail" id="email"/>
          <input type="text" placeholder="Ваше имя" id="Ваше"/>
        </span>

        <span className="mainwraperis">
          <span className="rangewrapper">
            <label className="label">
              Sed ut perspiciatis, unde omnis iste natus
            </label>
            <input type="range" id="range" />
          </span>
          <input type="text" placeholder="Прикрепить файл" id="Прикрепить"/>
        </span>

        <span className="mainwraperis">
       <button className="button">Отправить</button>
       </span>
      </form>
    </div>
  );
};

export default Form;
