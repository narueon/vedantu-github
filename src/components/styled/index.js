import styled from 'styled-components';

export const Button = styled.button`
  background-color: #e9ecef;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(#eff3f6,#eff3f6 90%);
    border: 1px solid rgba(0,0,0,0.3)
  }
`;

export const Link = styled.a`
text-decoration: none;
color: black;
display: inline-block;
padding: 10px 10px;
position: relative;
margin: 0;
border-bottom: ${props=>props.active?'2px solid #e36209':'2px solid transparent'};
&:hover{
    border-bottom: ${props=>props.active?'2px solid #e36209':'2px solid rgba(0,0,0,0.2)'};
}
`;