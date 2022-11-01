// Tipagem 
interface HomeProps {
  count: number;
}

// TSC - Typescript + JSX
export default function Home(props: HomeProps) {

  // requição HTTP, só vai executar quando o JS estiver habilitado
  // fetch('http://localhost:3333/pools/count')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   })

  return (<h1>Contagem: {props.count}</h1>)
}

// permite a indexação nas buscas dos google
export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  // roda na camada do servidor no FE
  console.log(data);

  return {
    props: {
      count: data.count,
    }
  }
}
