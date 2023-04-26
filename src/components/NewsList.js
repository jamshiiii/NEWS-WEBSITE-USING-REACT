import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

const NewsList = ({ cat }) => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  const getAllNews = async () => {
    try {
      const { data } = await axios.get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=a5ff41a6c0f24b40ab246ed45ab6ad2c`
          : "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a5ff41a6c0f24b40ab246ed45ab6ad2c"
      );

      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNews();
  }, [cat]);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <div className="container my-4">
        <h3>
          <u>TOP HEADLINES</u>
        </h3>
        <div className="container my-2 d-flex justify-content-center align-items-center flex-column">
          {news &&
            news
              .filter((blogs) => {
                return search.toLowerCase() === ""
                  ? blogs
                  : blogs.title.toLowerCase().includes(search);
              })
              .map((blogs, index) => {
                return (
                  <div
                    key={index}
                    className="card"
                    style={{
                      margin: "10px",
                      width: "80%",
                      boxShadow: "2px 2px 10px silver",
                    }}
                  >
                    <div className="card-body">
                      <h4 className="card-title">{blogs.title}</h4>
                      <img
                        className="img-fluid d-flex justify-content-center align-items-center"
                        src={blogs.urlToImage}
                        alt="image not found"
                        style={{
                          width: "auto",
                          height: "500px",
                          objectFit: "cover",
                        }}
                      />
                      <p className="card-text">{blogs.description}</p>
                      <p className="card-text">{blogs.content}</p>
                      <a href={blogs.url} target="_blank">
                        View More
                      </a>

                      <p>{blogs.publishedAt}</p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default NewsList;
