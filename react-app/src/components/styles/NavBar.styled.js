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

  .logout{
    background-color: #21ba45;
    color: #fff;
    text-shadow: none;
    background-image: none;
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    color: rgba(0,0,0,.6);
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin: 0 0.25em 0 0;
    padding: 0.5em 1.5em 0.5em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: 0.28571429rem;
    -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: opacity .1s ease,background-color .1s ease,color .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
    transition: opacity .1s ease,background-color .1s ease,color .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
    transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
    transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
    will-change: '';
    -webkit-tap-highlight-color: transparent;
    color:white;
  }

`
