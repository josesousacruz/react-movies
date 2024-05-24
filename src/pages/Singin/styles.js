import styled from "styled-components";
import backgroudImg from "../../assets/something-magical.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items:stretch;  
`;

export const Form = styled.form`
padding:0 136px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

text-align: center;

>h1{
  font-size:32px;
  color:${({ theme }) => theme.COLORS.PINK}
}

>h2{
  font-size:24px;
  margin-top: 84px;
  margin-bottom: 24px;

}

>p{
font-size:14px;
color:${({ theme }) => theme.COLORS.GRAY_100}
}

> a {
  color:${({ theme }) => theme.COLORS.PINK}
}
`

export const Background = styled.div`
flex:1;
background: url(${backgroudImg}) no-repeat center center;
background-size: cover;
`