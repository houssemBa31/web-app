# TaskM

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Application structure

Application code lives under `src/app` and is organized by responsibility:

- `core/` contains app-wide authentication, guards, interceptors, services, and configuration.
- `shared/` contains reusable components, directives, pipes, and utilities.
- `features/` contains domain areas. Product-specific models, data access, and UI belong inside `features/products/`; `home/` contains the storefront landing page.
- `layout/` contains the main and admin layout shells.
- `app.config.ts` and `app.routes.ts` configure application providers and routes.
- Tailwind CSS v4 is configured through PostCSS; storefront styles use Tailwind utilities in `src/styles.css`.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
