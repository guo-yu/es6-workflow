# ES6 Workflow

Use ES6, today.

### Install

The very first, project [6to5](https://6to5.org) is required.

```bash
[sudo] npm install --global 6to5
```

Then install all dependencies:

```bash
npm install .
```

### Development

Put all your ES6 js files in `src` folder, with ES6 workflow provided below, they will all be compiled to ES5 js files to `dist` folder.

### Build

Build dist files from `./src` folder

```bash
npm run build
```

Build and concat to one minimal file.

```bash
npm run build-concat
```

### Serve

```bash
npm run serve
```

### Watch and serve

```bash
npm run dev
```
