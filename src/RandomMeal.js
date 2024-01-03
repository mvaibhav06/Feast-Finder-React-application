import React from "react";
import ReactPlayer from "react-player";

const RandomMeal = ({ data }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img
            className="img-fluid"
            src={data[0].strMealThumb}
            alt={data[0].strMeal}
          />
        </div>
        <div className="col-7">
          <h3 className="mt-1">{data[0].strMeal}</h3>
          <p className="mt-4">{data[0].strInstructions}</p>
        </div>
      </div>
      <div className="random-meal mt-2">
        <p>
          <strong>Category: </strong> <span>{data[0].strCategory}</span>
        </p>
        <p>
          <strong>Area: </strong> <span>{data[0].strArea}</span>
        </p>
        {data[0].strTags && (
          <p>
            <strong>Tags: </strong> <span>{data[0].strTags}</span>
          </p>
        )}
        <h4 className="mt-3">Ingredients:</h4>
        <ul>
          {data[0].strIngredient1 && <li>{data[0].strIngredient1}</li>}
          {data[0].strIngredient2 && <li>{data[0].strIngredient2}</li>}
          {data[0].strIngredient3 && <li>{data[0].strIngredient3}</li>}
          {data[0].strIngredient4 && <li>{data[0].strIngredient4}</li>}
          {data[0].strIngredient5 && <li>{data[0].strIngredient5}</li>}
          {data[0].strIngredient6 && <li>{data[0].strIngredient6}</li>}
          {data[0].strIngredient7 && <li>{data[0].strIngredient7}</li>}
          {data[0].strIngredient8 && <li>{data[0].strIngredient8}</li>}
          {data[0].strIngredient9 && <li>{data[0].strIngredient9}</li>}
          {data[0].strIngredient10 && <li>{data[0].strIngredient10}</li>}
          {data[0].strIngredient11 && <li>{data[0].strIngredient11}</li>}
          {data[0].strIngredient12 && <li>{data[0].strIngredient12}</li>}
          {data[0].strIngredient13 && <li>{data[0].strIngredient13}</li>}
          {data[0].strIngredient14 && <li>{data[0].strIngredient14}</li>}
          {data[0].strIngredient15 && <li>{data[0].strIngredient15}</li>}
          {data[0].strIngredient16 && <li>{data[0].strIngredient16}</li>}
          {data[0].strIngredient17 && <li>{data[0].strIngredient17}</li>}
          {data[0].strIngredient18 && <li>{data[0].strIngredient18}</li>}
          {data[0].strIngredient19 && <li>{data[0].strIngredient19}</li>}
          {data[0].strIngredient20 && <li>{data[0].strIngredient20}</li>}
        </ul>
      </div>

      <div className="mt-4 video">
        <h4>Video Recipe</h4>
        <div className="mt-2" style={{ height: "400px" }}>
          <ReactPlayer
            url={data[0].strYoutube}
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default RandomMeal;
