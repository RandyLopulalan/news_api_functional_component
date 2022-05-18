import React, { useState } from "react";
import Footer from "./Footer";
import GetApi from "./GetApi";
import Header from "./Header";
import "./Main.css";

const Main = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <GetApi
        news={news.filter(
          (searchNews) =>
            searchNews.author?.toLowerCase().includes(search) ||
            searchNews.title?.toLowerCase().includes(search)
        )}
        setNews={setNews}
      />
      <Footer />
    </div>
  );
};

export default Main;
