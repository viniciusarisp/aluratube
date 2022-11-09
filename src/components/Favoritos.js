import styled from "styled-components";

export const StyledFavs = styled.div`
overflow: hidden;
padding: 16px;

h2{
  font-size: 16px;
  padding: 20px;
}
section{
  width: 100%;
  padding: 0;
  overflow: hidden;
  div {
  width: calc(100vw - 16px * 4);
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    
    scroll-snap-align: start;
    img {
      aspect-ratio: 1/1;
      object-fit: cover;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    span {
      font-size: 14px;
      padding-top: 8px;
      display: block;
      padding-left: 25px;
      color: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
}
}

`;