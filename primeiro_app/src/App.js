import { useState } from "react";




function App() {

  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[idade, setIdade] = useState('');

  const[user, setUser] = useState({});

  function handleRegister(e){
    e.preventDefault();

    alert('Usuario registrado com sucesso!')

    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }

  return (
    <div>
     <form onSubmit={handleRegister}>
      <label>Nome:</label><br></br>
      <input 
      placeholder="Digite seu nome:"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      ></input><br></br>

      <label>E-mail:</label><br></br>
      <input 
      placeholder="Digite seu email:"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      ></input><br></br>

      <label>Idade:</label><br></br>
      <input 
      placeholder="Digite seu idade:"
      value={idade}
      onChange={(e) => setIdade(e.target.value)}
      ></input><br></br>

      <button type="submit">Registrar</button>
     </form>

     <br/><br/>

      <div>
        <span>Bem vindo: {user.nome} </span><br></br>
        <span>Idade: {user.idade} </span><br></br>
        <span>E-mail: {user.email} </span><br></br>
      </div>
    </div>
  );
}

export default App;


