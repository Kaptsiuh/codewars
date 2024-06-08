const configuration = {
  name: "frontend",
  version: "0.1.0",
  private: true,
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start",
    "lint-next": "next lint",
    lint: "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    format: "prettier --write .",
  },
  dependencies: {
    next: "14.2.3",
  },
  devDependencies: {
    "eslint-config-next": "14.2.3",
  },
};
