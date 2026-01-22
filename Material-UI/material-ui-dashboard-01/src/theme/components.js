const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: 8,
        fontWeight: 500,
      },
    },
  },

  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        "&.Mui-selected": {
          backgroundColor: "#EEF2FF",
          color: "#3F51B5",
        },
      },
    },
  },
};

export default components;
