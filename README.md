# Base site
This can be used as the starting point for all new web projects.

## Steps to setup
1. Update the following files:
    - `webpack.settings.js`
    - `package.json`
    - `src/template.html`
    - `src/manifest.json`
2. `yarn install`
3.  `yarn run dev|build|prerender`

## Using Bit

- Find components to add by searching the [Bit Scope](https://bitsrc.io/doeanderson/components).
- You'll need to add Bit as a registry before you can install them: `yarn config set "@bit:registry" "https://node.bitsrc.io/"`. The Bit credentials are in LastPass.
- Copy the `yarn` commands on the component page to add a component.

### Customizing a component from Bit

There are some components you might need to customize to meet the demands of a site. There are also some components that we've added with the intent of being customized. This is possible through "sourcing" components via [bit import](https://docs.bitsrc.io/docs/sourcing-components.html). Here are the steps for sourcing the `core/styles` file:

- Run `bit init` to turn your project into a Bit Workspace. A `bit.json` file will be created, update with these settings:

```json
{
    "env": {},
    "dependencies": {},
    "componentsDefaultDirectory": "src/js/{namespace}/{name}",
    "saveDependenciesAsComponents": "true",
    "packageManager": "yarn",
    "dist": {
        "entry": "src",
        "target": "bit_dist"
    }
}
```

- Import the component you want to customize: `bit import doeanderson.components/core/styles`. This will add the component files in `src/js/core/styles/` path and add `"@bit/doeanderson.components.core.styles": "file:./src/js/core/styles",` to your `package.json` file.
- *IMPORTANT!* Before running `yarn install`, add the following line to your `package.json` file to ensure your local component is always used:

```json
"resolutions": {
    "@bit/doeanderson.components.core.styles": "file:./src/js/core/styles"
}
```

- Run `yarn install` to add your sourced component
- When modifying a sourced component, you need to run `bit build` after any changes made to the component in order for your build to utilize the changes. If desired, you can run `bit watch` instead of `bit build` to continually refresh your source components when developing. *Important!* Your changes will not be realized until Bit has rebuilt your sourced component through either the `build` or `watch` commands.

## Server requirements

<!-- Add server requirments here as necessary -->
