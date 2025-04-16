import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import ConnectionCard from "../../components/Card/ConnectionCard";
import { Container, Title } from "../../components/Card/style";
import { GlobalStyle } from "../../global";
import { Connection, MOCK_RESULTS } from "../../utils/mock";
import { Form } from "../../components/Form/Form";
import { Loading } from "./style";


export function Home (){
  const [results, setResults] = useState<Connection[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    
    setTimeout(() => {
      const shuffled = [...MOCK_RESULTS].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      setResults(selected);
      setLoading(false); 
    }, 2000); 
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Buscar Conexões</Title>
        <Form onSearch={handleSearch} />
        {loading ? (
            <Loading>
              <FaSpinner /> 
            </Loading> 
        ) : (
          results.map((conn, i) => (
            <ConnectionCard key={i} {...conn} />
          ))
        )}
      </Container>
    </>
  );
}