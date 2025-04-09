

const articles = ['Articolo 1', 'Articolo 2', 'Articolo 3', 'Articolo 4']


function App() {

  return (
    <>
      <h1>Nome del Blog</h1>

      {articles.map(article => <div>{article}</div>)}
    </>
  )
}

export default App
