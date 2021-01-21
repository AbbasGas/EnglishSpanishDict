import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Words from './components/Words'
import AddWord from './components/AddWord'
import About from './components/About'

function App() {
  const [showAddWord, setShowAddWord] = useState(false)
  const [words, setWords] = useState([])

  useEffect(() => {
    const getWords = async () => {
      const wordsFromServer = await fetchWords()
      setWords(wordsFromServer)
    }

    getWords()
  }, [])

  // Fetch Words
  const fetchWords = async () => {
    const res = await fetch('http://localhost:5000/words')
    const data = await res.json()

    return data
  }

  // Fetch Word
  const fetchWord = async (id) => {
    const res = await fetch(`http://localhost:5000/words/${id}`)
    const data = await res.json()

    return data
  }

  // Add Word
  const addWord = async (word) => {
    const res = await fetch('http://localhost:5000/words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    })

    const data = await res.json()

    setWords([...words, data])

    // const id = Math.floor(Math.random() * 10000) + 1

    // const newWord = {
    //   id,
    //   ...word
    // }
    // setWords([...words, newWord])
  }

  // Delete Word
  const deleteWord = async (id) => {
    await fetch(`http://localhost:5000/words/${id}`, {
      method: 'DELETE',
    })

    setWords(words.filter((word) => word.id !== id))
  }

  // Toggle learned 
  const toggleReminder = async (id) => {

    const wordToToggle = await fetchWord(id)
    const updWord = {...wordToToggle, learned: !wordToToggle.learned}

    const res = await fetch(`http://localhost:5000/words/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updWord)
    })

    const data = await res.json()

    setWords(words.map((word) => word.id === id ? { ...word, learned: data.learned } : word))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddWord(!showAddWord)} showAdd={showAddWord}/>
        
        <Route path='/' exact render={(props) => (
          <>
          {showAddWord && <AddWord onAdd={addWord}/>}
          {words.length > 0 ? (<Words words={words} onDelete={deleteWord} onToggle={toggleReminder}/>) : ('No Words To learn')}
            
          </>
        )} />
        <Route path='/about' component={About}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
