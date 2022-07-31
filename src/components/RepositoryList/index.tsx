import { useState, useEffect } from "react";
import { RepositoryItem } from "./item";
import './styles.scss'

interface Repository{
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])
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
        repositories.map(repository =>(<RepositoryItem key={repository.name} repository={repository}/>) )
        }
      </ul>
    </section>
  )
}