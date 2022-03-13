module.exports = {
  extends: ["prettier"],
  settings: {
    react: {
      rootDir: ["apps/*/", "packages/*/"],
    },
    
  },
  rules: {
    "react/jsx-key": "off",
  },
};
