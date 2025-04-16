import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;


export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; 
  min-width: 200px; 
  margin-right: 1rem;

  small {
    height: 1rem; 
    color: #e63946;
    font-size: 0.8rem;
    margin-top: 4px;
  }
`;


export const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Select = styled.select`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  min-width: 150px;

  &:hover {
    background-color: #4338CA;
  }
`;

