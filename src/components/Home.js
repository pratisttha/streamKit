import React, { useEffect, useState } from 'react'

function Home() {
  const [name, setName] = useState("Sumin") //string state
  const [number, setNumber] = useState(0)  //integer state
  const [bool, setBool] = useState(false)  //bool state
  const [list, setList] = useState([]) //array state
  const [object, setObject] = useState({}) //object state
  useEffect(() => {
    setName("Prathistha Parajulu")
    return () => {
      setName("Maskey")
    }
  }, [])
  useEffect(() => {
    setNumber()
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <h2>{name}</h2>
      <h2>{number}</h2>

      <button onClick={() => {

        // setNumber(number + 1)
        setName('Rishav')

      }}>Change nickname</button>

    </div>
  )
}

export default Home
