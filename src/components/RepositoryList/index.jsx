import { useState, useEffect } from "react";
import { RepositoryItem } from "./item";
import './styles.scss'

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
        {
        repositories.map(repo =>(<RepositoryItem key={repo.name} repository={repo}/>) )
        }
      </ul>
    </section>
  )
}