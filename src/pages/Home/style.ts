import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #4F46E5;
`;
export const Loading = styled.div`
  text-align: center;
  font-size: 2rem;
  color: #4F46E5;
  animation: spin 1s linear infinite; 

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

