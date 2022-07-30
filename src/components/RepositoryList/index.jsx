import { useState, useEffect } from "react";
import { RepositoryItem } from "./item";
import './styles.scss'

const repository = {
  name: 'unform',
  description:'form in react',
  link:'https://github.com/ismaelgomesdasilva'
}
export function RepositoryList() {
  const [repositories, setRepositories] = useState([])
  useEffect(() =>{
    fetch('https://api.github.com/users/ismaelgomesdasilva/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  },[])
  return (
    <section>
      <h1>Lista de repositorio</h1>
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}