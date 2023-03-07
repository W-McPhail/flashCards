import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Card from './components/card'

function App() {

  return (
    <div className="App">
      <Header />
      <Card className="Card" front="Cat question 1" back="Answer"/>
      <p>Work in Progress. Will is tired. Will needs sleep.</p>
    </div>
  )
}

export default App
