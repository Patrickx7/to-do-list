import { useState, useEffect } from "react"
import './App.css'

function App() {

  const [titulo, setTitulo] = useState('')
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.getItem('tarefas')) || [])
  const [erro, setErro] = useState('')

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

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

        {titulo.length !== 0 && <p>{titulo.length}/100</p>}
        {erro.length !== 0 && <p>{erro}</p>}
        {tarefas.length === 0 && <p>Nenhuma tarefa</p>}
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            <div className="tituloData">
              <span className="tituloTarefa">{tarefa.titulo}</span>
              <span className="criadaEm">{tarefa.criadaEm}</span>
            </div>
            <button onClick={() => excluirTarefa(tarefa.id)}>X</button>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

  export default App
