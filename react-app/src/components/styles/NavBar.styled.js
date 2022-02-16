import styled from "styled-components"

export const StyledNavBar = styled.nav`
  background-color: black;
  padding: 0 40px;
  margin-top: 0;
  height:50px;
  /* position: absolute; */
  /* position: fixed; */

  ul{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    margin:0;
    padding:0;
    align-items: center;
  }

  li{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: white;
  }

  img{
    height: 50px;
    width: 50px;
  }

  h1{
    color: white;
  }

  .logo{
    gap: 10px;
    display:flex;
    align-items: center;
    justify-content: space-evenly
  }

`
