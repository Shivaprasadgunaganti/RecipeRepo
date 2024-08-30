import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './detailsRecipe.css'; 

const RecipeDetails = () => {
    const { id } = useParams();
    const [value, setValue] = useState({});
    console.log(value);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setValue(response.data);
        console.log(response.data);
    };

    return (
        <div className="recipe-details">
            <NavLink to="/recipe" className="back-link">Back</NavLink>
            <div className="recipe-header">
                <img src={value.image} className="recipe-image" alt={value.name} />
                <h1 className="recipe-title">{value.name}</h1>
            </div>
            <div className="recipe-info">
                <h3 className="recipe-ingredients-title">Ingredients:</h3>
                <ul className="recipe-ingredients">
                    {value.ingredients && value.ingredients.map((ingredient, index) => (
                        <li key={index} className="ingredient-item">{ingredient}</li>
                    ))}
                </ul>
                <h2 className="recipe-meal-type">Meal Type: {value.mealType}</h2>
                <h3 className="recipe-instructions-title">Instructions:</h3>
                <p className="recipe-instructions">{value.instructions}</p>
            </div>
        </div>
    );
};

export default RecipeDetails;
