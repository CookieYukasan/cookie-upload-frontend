const ButtonStyles = {
  baseStyle: {
    fontWeight: "normal",
    borderRadius: "10px",
  },
  sizes: {
    md: {
      fontSize: "xl",
      px: 16,
      py: 8,
    },
  },
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "#002DCD",
      color: "black",
    },
    solid: {
      bg: "#002DCD",
      color: "white",
      _hover: {
        opacity: 0.4,
        bg: "#002DCD",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
    background: "#002DCD",
  },
};

export default ButtonStyles;
