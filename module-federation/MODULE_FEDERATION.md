# Module Federation Example Application

Module Federation functionality was introduced in Webpack 5. It helps to share the code between loosely coupled applications, sharing the same build system optimized for caching. It helps distributed teams to ship large applications faster. Re.Pack 3 ships with Module Federation support out-of-the-box.

Module federation is one of the approaches to create Micro-Frondends architecture for your application. There are the host app that runs firstly on the device and MFEs apps that are used by the host app. That means each container (MFE) that is used by host application could be deployed and maintained independently, so no need to re-deploy host app if any of the containers were changed and re-deployed. This is the key feature of Module Federation. Each team could independently work on any of the packages and deploy it anytime, so the host app will see the changes immediately.

## Application Structure
// TODO

## Basic Setup
1. Go to `module-federation` folder `cd module-federation`
2. Run `yarn bootstrap`
   
## Basic Run
If we want to check Module Federation in action, we have to run `host` application first. Host application uses other remotes containers under the hood.

1. Run `yarn start`
2. Run `yarn run:host:ios` 
3. Run `yarn run:host:android`

## Standalone Run
As was mentions before we could run any of containers as a standaline application (`app1` / `app2` / `module1`).

1. Run `yarn start:standalone:<name>`
2. Run `yarn run:<name>:ios` 
3. Run `yarn run:<name>:android`