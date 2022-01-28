import styled from "styled-components"

export const DeckByIdContainer = styled.div`
  height: fit-content;
  width: 100vw;
  position: relative;

  h1{
    color:white;
  }

  .cardContainer{
    display: flex;
    flex-wrap: wrap;
  }

  .card{
    padding: 5px;
  }

  button{
    margin: 5px;
  }
`
