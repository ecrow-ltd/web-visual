import styled from "styled-components";

export interface IProps {}

/**
 * Common Button Component
 */
const Button = styled.button<IProps>`
  border: none;
  border-radius: 5px;
  padding: 8px 14px;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  background-color: #0997bc;
  box-shadow: 0 0 1px #999;
  outline: none;

  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: #0caacd radial-gradient(circle, transparent 1%, #0caacd 1%)
      center/15000%;
  }

  &:active {
    background-color: #0997bc;
    background-size: 100%;
    transition: background 0s;
  }
`;

export default Button;
