import styled from "styled-components";

const Icon = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ size }) => (size === "large" ? "36px" : "16px")};
`;

export default Icon;
