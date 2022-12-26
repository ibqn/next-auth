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

### Initialize an amplify project

```bash
amplify init
```

```text
Select the following configuration:

? **Enter a name for the project** nextauth


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

? **Initialize the project with the above configuration?** Yes
? **Select the authentication method you want to use:** AWS profile
? **Please choose the profile you want to use** default
```

### Adding authentication

```bash
amplify add auth
```

```text
**Do you want to use the default authentication and security configuration?** Default configuration
**How do you want users to be able to sign in?** Email
**Do you want to configure advanced settings?** No, I am done.
```

### Publish configuration

```bash
amplify push --y
```
