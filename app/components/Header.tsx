export default function Header()
{
const pessoa ={
    nome: 'Leandro',
    cidade: 'União da Vitoria'
}
const nomeApp = 'Teste';
  return (
    <>
    <h1>
      Bem-vindo á minha primeira aplIcação React {nomeApp}
    </h1>
    <p>
        {pessoa.nome}
        {pessoa.cidade}
    </p>
    </>
  )
}