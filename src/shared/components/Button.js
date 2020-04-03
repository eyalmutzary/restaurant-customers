import styled from "styled-components";

const Button = styled.button`
  border-radius: 2px;
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  padding: 8px;
  transition: background-color 0.4s;
  opacity: ${({ disabled }) => disabled && 0.3};
  border: solid 1px ${({ theme }) => theme.colors.blue};
  outline: none;
`;

Button.Primary = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.green};
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.red};
  }
`;

export default Button;
