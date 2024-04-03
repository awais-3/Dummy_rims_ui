import { extendTheme } from "@chakra-ui/react";

// Extend the default Chakra UI theme
export const Chakratheme = extendTheme({
  colors: {
    // primaryblue: "blue.500",
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: { base: "12px", md: "14px", lg: "16px" },
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: { base: "12px", md: "12px", lg: "14px" },
        color: "gray.600",
      },
    },
  },
});
