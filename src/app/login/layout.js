import { Box } from "@chakra-ui/react";

// app/login/layout.js
export const metadata = {
  title: "Login",
  description: "Login page",
};

export default function RootLayout({ children }) {
  return <Box bg="gray.100">{children}</Box>;
}
