# vvt

This is a project template for Vue3 + Vite + TypeScript

## Other Utils included
| name | desc | 
| -- | -- |
| ESLint | Check & Lint |
| Vue-Route | route service |
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur
Install and add @vuedx/typescript-plugin-vue to the plugins section in tsconfig.json
Delete src/shims-vue.d.ts as it is no longer needed to provide module info to Typescript
Open src/main.ts in VSCode
Open the VSCode command palette
Search and run "Select TypeScript version" -> "Use workspace version"