import styled from "styled-components"

export const HomePageContainer = styled.div`
    position: absolute;
    top: 50px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      height: 400px;
      width: 100vw;
    }
    h1{
      color: white;
      font-size: 100px;
      text-align: center;
    }

    p{
      color:white;
      font-size: 40px;
      text-align: center;
    }

    button{
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
    padding: 0.78571429em 1.5em 0.78571429em;
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
    }

    a{
    text-decoration: none;
    color: white;
  }

 `
