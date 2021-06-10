import { Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import '@fontsource/roboto'

import './App.css'

function App() {
  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const todos = ["eat pomelo", "eat durian", "eat mango", "eat mangosteen"]

  return (
    <>
      <CssBaseline />
      <Button variant="contained" color="primary">Hello World</Button>
      <select onChange={handleChange}>
        {todos.map((todo, i) => <option key={todo} value={todo}>{todo}</option>)}
      </select>
    </>
  )
}

export default App
