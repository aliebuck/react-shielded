export default {
  "*": ["prettier --write --ignore-unknown"],
  "*.{js,jsx}": ["eslint --fix"],
};
