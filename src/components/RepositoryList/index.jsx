import { RepositoryItem } from "./item";

const repository = {
  name: 'unform',
  description:'form in react',
  link:'https://github.com/ismaelgomesdasilva'
}
export function RepositoryList() {
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