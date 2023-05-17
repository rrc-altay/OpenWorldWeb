module.exports = {
  "*.{ts,tsx}": [
    "prettier --write src/",
    "eslint . --fix",
    "eslint . --ext .ts,.tsx",
    "eslint --max-warnings=0",
    "bash -c tsc",
  ],
};
