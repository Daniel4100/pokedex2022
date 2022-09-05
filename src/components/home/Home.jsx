import { getName } from "../../store/slices/nameTrainer.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.name.value.trim();
    if (inputValue.length != 0) {
      dispatch(getName(inputValue));
      navigate("/pokedex");
      localStorage.setItem("name", inputValue);
    }
    e.target.name.value = "";
  };

  return (
    <div className="home">
      <div className="container__home">

      <div className="home__video-conatainer">
        <video autoPlay muted loop  src="./media/videoHome.mp4"></video>
      </div>
      <div className="home__form-container">
        <h1>hi triner!</h1>
        <p>to get started, put your trainer name</p>
        <form onSubmit={handleSubmit}>
          <input required maxLength={10} id="name" type="text" placeholder="0 - 10 character" />
          <button className="custom-btn btn-11">catch them all</button>
        </form>
        <img className="home__png" src="./media/home.png" alt="" />
      </div>
      </div>


      
    </div>
  );
};

export default Home;
