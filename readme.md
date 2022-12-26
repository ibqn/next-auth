## Getting Started

First, run the development server:

```bash
pnpm install
pnpm  dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup Amplify

Install amplify cli globally

```bash
pnpm add -g @aws-amplify/cli
```

Initialize an amplify project

```bash
amplify init
```

Select the following configuration:

? **Enter a name for the project** nextauth

```text
Project information
| Name: nextauth
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start
```

? **Initialize the project with the above configuration?** Yes

? **Select the authentication method you want to use:** AWS profile

? **Please choose the profile you want to use** default
