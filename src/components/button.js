import React from 'react'
import styled, {css} from 'styled-components'

const ButtonCart = styled.button`
    padding: 15px 30px;
    border: none;
    border-radius: 4px;
    text-transform: capitalize;
    font-weight: 700;
    ${props => props.primary && css`
      background-color: #7fff00;
      color: #fd1015;
    `}
    ${props => props.secondary && css`
      background-color: #a52a2a;
      color: #fff;
    `}
`;

const Button = ({ text, secondary, primary, type, onClick }) => {
  return (
    <div>
      <ButtonCart
        secondary={secondary}
        primary={primary}
        type={type} 
        onClick={onClick}
      >{text}
      </ButtonCart>
    </div>
  );
}

export default Button;