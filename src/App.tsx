import { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './global';
import { Form } from './components/Form/Form';
import ConnectionCard from './components/Card/ConnectionCard';
import { Connection, MOCK_RESULTS } from './utils/mock';
import { FaSpinner } from 'react-icons/fa'; 

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #4F46E5;
`;
const Loading = styled.div`
  text-align: center;
  font-size: 2rem;
  color: #4F46E5;
  animation: spin 1s linear infinite; 

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;



function App() {
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

export default App;
