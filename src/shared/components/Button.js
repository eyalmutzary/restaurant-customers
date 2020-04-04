import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  padding: 8px;
  transition: background-color 0.4s;
  opacity: ${({ disabled }) => disabled && 0.3};
  border: solid 2px ${({ theme }) => theme.colors.silver};
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  width: 60px;

  &:hover {
    background: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white};
  }
`;

Button.Primary = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.green};
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.red};
  }
`;

export default Button;
