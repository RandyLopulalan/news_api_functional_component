import axios from "axios";
import React, { useCallback, useEffect } from "react";

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=55bfc216f16a4f40bce62049a80c1140`;

const GetApi = ({ news, setNews }) => {

  const getApi = useCallback(() => {
    axios.get(apiUrl).then((res) => {
      const result = res.data.articles;
      setNews((prev) => (prev = result));
    });
    console.log("GET API");
  }, [setNews]);

  useEffect(() => {
    getApi();
    console.log("UPDATE");
  }, [getApi]);

  return (
    <div className="list_news">
      {news.map(
        ({ urlToImage, title, author, publishedAt, description, url }) => {
          return (
            <div key={title} className="list_news_data">
              <img src={urlToImage} alt="" className="list_news_data_image" />
              <article>
                <h3 className="list_news_data_title">{title}</h3>
                <p className="list_news_data_author_date">{`${author} - ${publishedAt}`}</p>
                <p className="list_news_data_description">{description}</p>
                <p className="list_news_data_more_details">
                  <a href={url} target="_blank" rel="noreferrer">
                    More details
                  </a>
                </p>
              </article>
            </div>
          );
        }
      )}
    </div>
  );
};

export default GetApi;
