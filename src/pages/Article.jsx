import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/articles.css';

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

  if (!article) return <div className="p-8">Loading...</div>;

  return (
    <div className="single-article">
      <img src={article.image} alt={article.title} className="article-img" />
      <h1>{article.title}</h1>
      <p className="meta">
        Published on {article.publishedDate} | Location: {article.location}
      </p>
      <div className="content">{article.content}</div>
    </div>
  );
};

export default Article;
