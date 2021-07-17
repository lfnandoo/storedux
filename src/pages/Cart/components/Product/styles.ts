import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 15px;
  background-color: #fff;

  > img {
    border-radius: 15px 0 0 15px;
    width: 23%;
    height: 100%;

    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  flex: 1;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 50%;
  margin-right: 20px;

  span {
    color: var(--color-main-dark);
  }

  p {
    color: rgba(0, 0, 0, 0.5);
    font-size: .7rem;
  }

  strong {
    font-size: .9rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  background-color: var(--color-background);
  border-radius: 30px;
  padding: 5px;

  span {
    margin: 0 10px;
    color: rgba(0,0,0,0.8);
  }

  p {
    color: red;
    font-weight: bold;
    cursor: pointer;
  }

  p:last-child {
    color: green;
  }
`;