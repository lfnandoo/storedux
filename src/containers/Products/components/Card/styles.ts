import styled from 'styled-components';

export const CardContainer = styled.li`
  background: #fff;
  border-radius: 15px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;

  border-radius: 15px 15px 0 0;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardInfo = styled.div`
  text-align: center;
  padding: 20px;
`;