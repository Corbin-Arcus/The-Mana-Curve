import styled from "styled-components"

export const CategoryContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  overflow-x: scroll;
  align-items: center;
  /* ::-webkit-scrollbar {display:none;} */


  ::-webkit-scrollbar-track {
    background: orange;        /* color of the tracking area */
  }

  h1,h2,h3,p, h5{
  color:white
}

h2{
  padding: 15px;
}

.card{
  min-height: 156px;
  min-width: 160px;
}

`
