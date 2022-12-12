import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import DarfPunk from "./darf-punk";

const darkTheme = {
  borderRadius: "8px",
  main: {
    backgroundColor: "black",
    color: "white",
  },
};

const AnimationIndexWrap = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.main.backgroundColor};
  color: ${({ theme }) => theme.main.color};
`;

export default function AnimationIndex() {
  const [theme, setTheme] = useState(darkTheme);
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <AnimationIndexWrap>
        <DarfPunk />
      </AnimationIndexWrap>
    </ThemeProvider>
  );
}
