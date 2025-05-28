import Image from "next/image";
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
    <Image src = "/ifpr.png" alt ="Logo do IFPR" width= "100" height="100"/>
    </>
  )
}