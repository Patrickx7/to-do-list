import { useState } from "react"
import './App.css'

function App() {

  const [titulo, setTitulo] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [erro, setErro] = useState ('')

  function adicionarTarefa() {
    if (titulo.trim() === '') {
      setErro('Digite uma tarefa!')
      return
    }

    const novaTarefa = { id: Date.now(), titulo: titulo.trim(), criadaEm: new Date().toLocaleString('pt-BR') }
    setTarefas([...tarefas, novaTarefa])
    setTitulo('')
    setErro('')

  }

  function excluirTarefa(id) {
    if (!confirm('Tem certeza?')) {
      return
    }

    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
  }

  return (
    <div className="container">
      <h1>Lista de tarefas</h1>
        <div className="form">
          <input maxLength={100} value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="Nova tarefa..." />
          <button onClick={adicionarTarefa}>Adicionar</button>
        </div>
      <p>{titulo.length}/100</p>
      {tarefas.length === 0 && <p>Nenhuma tarefa</p>}
      {erro.length !== 0 && <p>{erro}</p>}


      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            <button onClick={() => excluirTarefa(tarefa.id)}>X</button>
            {tarefa.titulo}
            {tarefa.criadaEm}
          </li>

        ))}
      </ul>
    </div>
  )
}

export default App


