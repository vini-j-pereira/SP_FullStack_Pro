// import { useState } from "react";


// function App() {

//   const[nome, setNome] = useState('');
//   const[email, setEmail] = useState('');
//   const[idade, setIdade] = useState('');

//   const[user, setUser] = useState({});

//   function handleRegister(e){
//     e.preventDefault();

//     alert('Usuario registrado com sucesso!')

//     setUser({
//       nome: nome,
//       idade: idade,
//       email: email,
//     })
//   }

//   return (
//     <div>
//      <form onSubmit={handleRegister}>
//       <label>Nome:</label><br></br>
//       <input 
//       placeholder="Digite seu nome:"
//       value={nome}
//       onChange={(e) => setNome(e.target.value)}
//       ></input><br></br>

//       <label>E-mail:</label><br></br>
//       <input 
//       placeholder="Digite seu email:"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       ></input><br></br>

//       <label>Idade:</label><br></br>
//       <input 
//       placeholder="Digite seu idade:"
//       value={idade}
//       onChange={(e) => setIdade(e.target.value)}
//       ></input><br></br>

//       <button type="submit">Registrar</button>
//      </form>

//      <br/><br/>

//       <div>
//         <span>Bem vindo: {user.nome} </span><br></br>
//         <span>Idade: {user.idade} </span><br></br>
//         <span>E-mail: {user.email} </span><br></br>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App(){
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState(['Pagar a conta de luz']);

  function handleRegister(e){
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return(
    <div>

      <h1>Lista de Tarefas</h1>

      <form onSubmit={handleRegister}>
        <input 
        placeholder="Digite uma tarefa:"
        value={input}
        onChange={ (e) => setInput(e.target.value)}
        ></input><br/>
        <button type="submit">Salvar</button>
      </form>

      <br/><br/>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;


