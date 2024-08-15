// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Chakratheme } from "./chakraTheme";

export function ChakraProviders({ children }) {
  return <ChakraProvider theme={Chakratheme}>{children}</ChakraProvider>;
}
