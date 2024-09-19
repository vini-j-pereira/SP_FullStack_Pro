function Nome(props) {// Ainda é possivel desestruturar ex: ({aluno})
    return(
      <span>Bem vindo - {props.aluno} {props.idade}</span> // aqui usaria somente => {aluno}
    );
  }

  export default Nome;

  //Ex: do component acima desestruturado --

//   function Nome({aluno}) { <-------
//     return(
//         <span>Bem vindo - {aluno}</span> <--------
//       );
//   }