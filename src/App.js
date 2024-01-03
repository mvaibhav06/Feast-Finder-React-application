import "./App.css";
import Meal from "./Meal";
import NavBar from "./NavBar";
import RandomMeal from "./RandomMeal";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    setData(response.data.meals);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <NavBar />
      <Meal handleClick={handleClick} />
      {data.length > 0 && <RandomMeal data={data} />}
    </div>
  );
}

export default App;
