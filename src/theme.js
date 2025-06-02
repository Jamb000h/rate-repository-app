const spacing = {
  default: 10,
};

const colors = {
  appBar: "#24292e",
  border: {
    default: "#586069",
    error: "#d73a4a",
  },
  textPrimary: "#24292e",
  textSecondary: "#586069",
  primary: "#0366d6",
  white: "#ffffff",
  error: "#d73a4a",
};

const theme = {
  colors,
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
  input: {
    height: 40,
    borderColor: colors.border.default,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
};

export default theme;
