import styled from "styled-components"

export const DeckByIdContainer = styled.div`
  height: fit-content;
  width: 100vw;
  position: relative;
  margin-bottom: 75px;
  margin-left: 35px;
  /* margin-top: 5em; */
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
