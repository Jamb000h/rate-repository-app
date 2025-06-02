const spacing = {
  default: 10,
};

const theme = {
  colors: {
    appBar: "#24292e",
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
  },
  spacing,
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  verticalContainer: {
    flexDirection: "column",
    gap: spacing.default,
  },
  horizontalContainer: {
    flexDirection: "row",
    gap: spacing.default,
  },
};

export default theme;
