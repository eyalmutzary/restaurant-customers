import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 2px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  padding: 8px;
  transition: background-color 0.4s;
  opacity: ${({ disabled }) => disabled && 0.3};
  border: solid 2px ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  font-size: 16px;
  font-size: 14px;
  outline: none;
  width: 60px;

  &:hover {
    background: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;

Button.Confirm = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.darkGreen};
  }
`;

Button.Warning = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.red};
  }
`;

export default Button;
