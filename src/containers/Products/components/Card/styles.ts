import styled from 'styled-components';

export const CardContainer = styled.li`
  width: 100%;
  height: 346px;

  background: #fff;
  border-radius: 15px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;

  object-fit: cover;
`;

export const CardImageShimmer = styled.div`
  width: 100%;
  height: 200px;
  
  background-color: #fff;
  filter: brightness(95%);

  border-radius: 15px 15px 0 0;
  div {
    border-radius: 15px 15px 0 0;
  }
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