require("ts-node").register({
  transpileOnly: true, // Speeds up TypeScript compilation
  compilerOptions: {
    strict: false, // Disable strict mode temporarily
  },
});
const config = require("./src/config/config.ts").default;
module.exports = config;
