import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.silver};
  height: 100vh;
`;
