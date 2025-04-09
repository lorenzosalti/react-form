function ArticlesList({ data }) {

  console.log(data)

  return <ul>
    {data.map((article, i) => <li key={i}>{article}</li>)}
  </ul>
}

export default ArticlesList