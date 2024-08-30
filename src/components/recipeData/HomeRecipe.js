import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import PaginationLoop from "../pagination/paginationRecipe";
import './HomeRecipe.css';

const RecipeData = () => {
  const [data, setData] = useState([]);
  const [input1, setInput1] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    setTimeout(() => {
      setData(response.data.recipes);
    }, 5000);
  };

  const filterData = data.filter((e) =>
    e.name.toLowerCase().includes(input1.toLowerCase())
  );

  const lastData = currentPage * postPerPage;
  const resData = lastData - postPerPage;
  const value = filterData.slice(resData, lastData);

  return (
    <div className="container">
      <div className="mb-4 d-flex justify-content-center">
        <input
          type="text"
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter Recipe Name"
          className="search-input"
        />
      </div>
      <div className="card-container">
        {value.map((e, index) => (
          <Card className="card" key={index}>
            <Card.Img
              variant="top"
              src={`https://cdn.dummyjson.com/recipe-images/${e.id}.webp`}
              className="card-img"
            />
            <Card.Body className="card-body">
              <Card.Title className="card-title">{e.name}</Card.Title>
              <div className="d-flex justify-content-center">
                <NavLink to={`/recipe/${e.id}`}>
                  <button className="btn-custom">More Details</button>
                </NavLink>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="pagination-container">
        <PaginationLoop totalPosts={filterData.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default RecipeData;
