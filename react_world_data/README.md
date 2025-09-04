# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


==> we are working on this project using the latest react 19 version



==> in about us page---
 Browser/Screen Reader Interpretation

    ┌────────────┐                      ┌───────────────┐
    │   <div>    │   ← Just a box       │   <section>   │ ← Thematic group
    └────────────┘                      └───────────────┘
         │                                   │
         ▼                                   ▼
   [ No context ]                    [ "About Us" section starts ]




note we cannot render the components inside the loop like map() function