# Protobuf typescript starter

> Easily adaptable starter project for using Protocol Buffers with TypeScript

Simple starter for a TypeScript project using Protocol Buffers. Should be easily modifiable to use other build tools that require using an external compiler.

# Usage

Run in development mode:
```bash
# Using Yarn
yarn dev
# Or using NPM
npm run dev
```

Compile TypeScript:
```bash
# Using Yarn
yarn build
# Or using NPM
npm run build
```

Run compiled application:
```bash
# Using Yarn
yarn start
# Or using NPM
npm run start
```

# All Yarn commands

Command|Description
-|-
start|Start the compiled application.
start:dev|Start the application using [ts-node](https://github.com/TypeStrong/ts-node). Compiles at run time and is not suitable for production.
build|Compile TypeScript.
dev|Start the application in development mode. Watches both protoc files and Node.js codebase.
generate:protobuf|Runs `generate:protobuf:js` and `generate:protobuf:ts` in order.
generate:protobuf:js|Compile protobuf definition files into a JavaScript bundle.
generate:protobuf:ts|Generate protobuf JavaScript bundle TypeScript definition files.
watch:protobuf|Watch protobuf definition files and run `generate:protobuf` on file changes
watch:app|Watch app source and run `start:dev` on file changes