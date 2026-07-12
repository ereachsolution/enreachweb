import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/articles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch('/data/articles.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(a => a.id === parseInt(id));
        setArticle(found);
        if (found) document.title = `${found.title} | Enreach Solution`;
      });
  }, [id]);

  if (!article) return (
    <>
      <Navbar />
      <div style={{ padding: "4rem 5%", textAlign: "center" }}>Loading...</div>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <div className="single-article">
        <Link
          to="/articles"
          style={{
            display: "inline-block",
            marginBottom: "1.5rem",
            color: "#e60000",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          ← Back to Articles
        </Link>
        <img src={article.image} alt={article.title} className="article-img" />
        <h1>{article.title}</h1>
        <p className="meta">
          Published on {article.publishedDate} | Location: {article.location}
        </p>
        <div className="content">{article.content}</div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
