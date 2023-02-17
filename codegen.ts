
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/query",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/graphql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ]
    },
  }
};

export default config;
