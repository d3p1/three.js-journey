/**
 * @description People
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React, {useEffect, useState} from 'react'

export default function People() {
  const [people, setPeople] = useState([])

  const getPeople = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => setPeople(result))
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <div style={{marginTop: '5rem'}}>
      <h2 style={{marginBottom: '1rem', textAlign: 'center'}}>People</h2>

      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90vw',
        }}
      >
        {people.map((person, id) => (
          <li style={{listStyle: 'none'}} key={id}>
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
