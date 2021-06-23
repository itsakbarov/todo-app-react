import styled from "styled-components";

export const ListItem = styled.li`
  border: 1 px solid cyan;
  transition: all ease 0.5s;
  display: flex;
  width: 90%;
  border-radius:12px;
  padding: 12px;
  margin: 15px auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-bottom: 8px;
  position: relative;
  &.checked {
    *{
    opacity: 0.2;

    }
    &::before{
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      transform: rotate(-5deg);
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      height: 3px;
      background: #ff0000b5;
    }
    &::after{
      content: 'DONE';
      position: absolute;
      top: 8px;
      left: 15px;
      color: red;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 800;
    }
  }
  input {
    width: 80%;
    border: none;
    background: white;
    transition: all ease 0.5s;
    outline: none;
    &:focus {
      border-bottom: 1px solid green;
    }
  }
`;
export const Footer= styled.div`
  padding: 10px;
  display: flex;
  justify-content: end;
  position: absolute;
  bottom: 0;
  background: white;
  z-index: 9;
  place-content: flex-end;
  width: 96%;
  box-sizing: border-box;
  align-items: center;
`

export const Button = styled.button`
  width: 35px;
  height:35px;
  border: none;
  margin: 0 4px;
  font-weight: bold;
  color: white;
  font-size: 16px;
  background: #6fbb27;
  border-radius: 6px;
`;

export const Delete = styled.button `
  border: none;
  margin: 0 4px;
  padding: 7px 10px;
  font-weight: bold;
  color: white;
  font-size: 16px;
  background: red;
  border-radius: 3px;
`;
export const List = styled.div`
  /* border: 1px solid red; */
  max-height: 75%;
  overflow-y: scroll;
`;
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #CAC531;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #F3F9A7, #CAC531);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #F3F9A7, #CAC531); 
`;
export const Form = styled.form`
  display: flex;
  margin-bottom: 25px;
  border-radius:18px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  input {
    width: 80%;
    padding: 18px 12px;
    border: none;
    outline: none;
  }
  button {
    padding: 10px 8px;
    outline: none;
    border: none;
    cursor:pointer;
    font-size: 18px;
    color: white;
    transition: all ease 0.2s;
    background: #27b025;
      border-radius: 15px;
    width: 20%;
    &:active {
      transform: scale(0.9);
    }
  }
`;
export const Card = styled.div`
  width: 30em;
  height: 70%;
  overflow: hidden;
  padding: 14px;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  bottom: 0;
  background: white;
  border-radius: 10px;
  left: 0;
  right: 0;
  margin: auto;
`;
export const Heading = styled.h2`
  font-family: 'Noto Sans JP', sans-serif;
`;
