import { useState } from "react"

const articles = ['Articolo 1', 'Articolo 2', 'Articolo 3', 'Articolo 4']


function App() {

  const [articlesList, setArticlesList] = useState(articles)
  const [newArticle, setNewArticle] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (newArticle) {
      setArticlesList([...articlesList, newArticle])
      setNewArticle('')
    }
  }

  return (
    <>
      <h1>Blog di Articoli</h1>

      <ul>
        {articlesList.map((article, i) => <li key={i}>{article}</li>)}
      </ul>

      <hr />

      <form onSubmit={handleSubmit}>
        <input type="text" value={newArticle} onChange={e => setNewArticle(e.target.value)} />
        <br />
        <button type="submit">Inserisci Nuovo Articolo</button>
      </form>
    </>
  )
}

export default App
