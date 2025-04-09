import { useState } from "react"

const articles = ['Articolo 1', 'Articolo 2', 'Articolo 3', 'Articolo 4']


function App() {

  const [articlesList, setArticlesList] = useState(articles)
  const [newArticle, setNewArticle] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    setArticlesList([...articlesList, newArticle])
    setNewArticle('')
  }

  return (
    <>
      <h1>Nome del Blog</h1>

      {articlesList.map((article, i) => <div key={i}>{article}</div>)}

      <hr />

      <form onSubmit={handleSubmit}>
        <input type="text" value={newArticle} onChange={e => setNewArticle(e.target.value)} />
        <button type="submit">Inserisci Articolo</button>
      </form>
    </>
  )
}

export default App
