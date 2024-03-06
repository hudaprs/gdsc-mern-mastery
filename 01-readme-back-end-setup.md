# GDSC - MERN Mastery

This is documentation on how to start your project with MERN Stack.

## Prerequisites

Environment for this project use:

- node >= 18 LTS
- yarn >= 1.22.21
- visual studio code

This project using yarn as package manager, please install before continue

```shell
npm i -g yarn
```

## Before Start

Create empty project directory inside your machine

## Back-End Installation (Express)

Go to empty directory

1. Init `package.json`

```shell
yarn init
```

2. Init Typescript

Add typescript

```shell
yarn add -D typescript
```

Add typescript config

```shell
npx tsc --init
```

3. Add `.gitignore`

Add `.gitignore` in the root of the project

and fill code like so:

```.gitignore
node_modules/
```

4. Install Dependencies

```shell
yarn add express cors mongoose
```

5. Install Dev Dependencies

```shell
yarn add -D ts-node-dev @types/node @types/express @types/cors
```
