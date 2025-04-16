// styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  text-align: center;
  color: #4F46E5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 1rem;
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #4338CA;
  }
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Affinity = styled.div<{ value: number }>`
  margin-top: 0.5rem;
  font-weight: bold;
  color: ${({ value }) => value > 80 ? '#10B981' : value > 60 ? '#F59E0B' : '#EF4444'};
`;
