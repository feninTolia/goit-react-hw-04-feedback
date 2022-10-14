import styled from 'styled-components';

export const FeedbackCard = styled.div`
  width: 600px;
  margin: 100px auto;
  padding: 35px 5px;
  border-radius: 10px;
  background-color: lightpink;
  text-align: center;
`;

export const FeedbackControl = styled.button`
  font-size: 24px;
  margin: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #25c2a0;
  border: none;
  transition: 200ms linear;

  :hover {
    background-color: #45d2b5;
    box-shadow: 0 0 10px 1px gray;
  }
`;

export const StatList = styled.ul`
  font-size: 18px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
