# repack-examples

This is a repository with example applications for [Re.Pack](https://github.com/callstack/repack).

## Example Applications
- __ESBuild__: The application that uses __ESBuild Minify Plugin__ and `esbuild-loader` under the hood
- __Local Chuncks__: The application that uses Repack local chuncks feature
- [__Module Federation__](./module-federation/MODULE_FEDERATION.md): Huge yarn workspaces that consist of 3 application and 1 module, that could run as standalone applications or running host app with other applications modules usage inside it with __Webpack Module Federation__ feature configured
- __SWC__: The application using `swc-loader` inside webpack configuration

## Setup
1. Run `yarn` command inside root folder to install all dependencies in all the application
2. Run `yarn workspace <name> run bootstrap` command for every workspace to install yarn dependencies and pods

## Running
1. Run `yarn workspace <name> run start` commmand for any workspace you want to run dev server
2. Run `yarn workspace <name> run ios` commmand for any workspace you want to run ios app
3. Run `yarn workspace <name> run android` commmand for any workspace you want to run android app
   

