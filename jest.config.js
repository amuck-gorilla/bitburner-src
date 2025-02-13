module.exports = {
  roots: ["<rootDir>/src/", "<rootDir>/test/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testPathIgnorePatterns: [".cypress", "node_modules", "dist"],
  testEnvironment: "./FixJSDOMEnvironment.ts",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/test/__mocks__/styleMock.js",
    "\\!!raw-loader!.*$": "<rootDir>/test/__mocks__/rawLoader.js",
    "@player": "<rootDir>/src/Player",
    "@nsdefs": "<rootDir>/src/ScriptEditor/NetscriptDefinitions",
    "^monaco-editor$": "<rootDir>/test/__mocks__/monacoMock.js",
    "^monaco-vim$": "<rootDir>/test/__mocks__/monacoMock.js",
  },
};
