📄 README.md

`

repo-fix

repo-fix is a GitHub App that automatically detects and repairs common repository issues, including:
- Missing or invalid metadata files
- Broken README sections
- Incorrect branch protection settings
- Missing labels, templates, or workflows
- Repo hygiene issues (naming, structure, governance alignment)

This app is part of the GitDigital Products ecosystem and follows the GitDigital governance, automation, and contributor‑experience standards.

Features
- Automated repo scanning on push, PR, and scheduled intervals
- Auto‑fix mode for simple issues
- PR‑based fix mode for complex changes
- Configurable rules via .repo-fix.yml
- Full audit logs and GitHub Checks integration

Installation
Install the GitHub App from your organization’s GitDigital Apps page.

Development
```bash
npm install
npm run dev
```

Running Locally
```bash
npm run tunnel
npm run start
```

License
MIT
```

---

📄 CONTRIBUTING.md

```md

Contributing to repo-fix

We welcome contributions that improve automation, governance alignment, and developer experience.

Workflow
1. Fork the repository
2. Create a feature branch
3. Submit a PR following the template
4. Ensure CI passes
5. A maintainer will review and merge

Coding Standards
- TypeScript only
- Use functional modules
- Follow GitDigital linting rules
- All features require tests

Security
Do not submit secrets in issues or PRs.
```

---

📄 SECURITY.md

```md

Security Policy

Reporting a Vulnerability
If you discover a security issue, please report it privately.

Do NOT open a public issue.

We will acknowledge receipt within 48 hours and provide a remediation timeline.
```

---

📄 CODEOFCONDUCT.md

```md

Contributor Covenant Code of Conduct

This project follows the GitDigital community standards for respectful, inclusive collaboration.

Instances of abusive behavior may be reported to the maintainers.
```

---

📄 LICENSE

```license
MIT License

Copyright (c) 2026 GitDigital

Permission is hereby granted...
```

(If you want a different license, I can swap it.)

---

📄 .gitignore

```.gitignore
node_modules/
.env
dist/
coverage/
```

---

📄 app.yml (GitHub App Manifest)

```yml
name: repo-fix
url: https://gitdigital.app
hook_attributes:
  url: https://ai.gitdigital.app/github/webhook
redirect_url: https://gitdigital.app/apps/repo-fix/installed
public: false

default_permissions:
  contents: write
  metadata: read
  issues: write
  pull_requests: write
  checks: write

default_events:
  - push
  - pull_request
  - check_run
  - repository
  - issues
```

---

📄 package.json

```json
{
  "name": "repo-fix",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "jest"
  },
  "dependencies": {
    "@octokit/app": "^14.0.0",
    "@octokit/webhooks": "^12.0.0",
    "express": "^4.18.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "jest": "^29.0.0",
    "@types/jest": "^29.0.0",
    "@types/express": "^4.17.0"
  }
}
```

---

📄 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

📁 src/index.ts

```ts
import express from "express"
import { Webhooks } from "@octokit/webhooks"
import { handleIssueEvent } from "./handlers/issues"
import { handlePullRequestEvent } from "./handlers/pullRequests"

const app = express()
app.use(express.json())

const webhooks = new Webhooks({
  secret: process.env.WEBHOOK_SECRET
})

webhooks.on("issues", handleIssueEvent)
webhooks.on("pull_request", handlePullRequestEvent)

app.use(webhooks.middleware)

app.listen(3000, () => {
  console.log("repo-fix running on port 3000")
})
```

---

📁 src/handlers/issues.ts

```ts
export async function handleIssueEvent({ payload, octokit }) {
  // Detect missing metadata, labels, templates, etc.
  // Auto-fix or comment with suggestions
}
```

---

📁 src/handlers/pullRequests.ts

```ts
export async function handlePullRequestEvent({ payload, octokit }) {
  // Run repo-fix checks on PR
  // Suggest fixes or open PRs automatically
}
```

---

📁 src/handlers/repoFixer.ts

```ts
export async function runRepoFix(octokit, repo) {
  // Core logic for scanning and repairing repo issues
}
```

---

📁 src/services/fixerService.ts

```ts
export class FixerService {
  constructor(octokit) {
    this.octokit = octokit
  }

  async ensureReadme(repo) {}
  async ensureTemplates(repo) {}
  async ensureBranchProtection(repo) {}
}
```

---

📁 src/services/githubClient.ts

```ts
import { App } from "@octokit/app"

export function getGitHubClient() {
  const app = new App({
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY
  })

  return app
}
```

---

📁 src/utils/logger.ts

```ts
export const log = (...args) => console.log("[repo-fix]", ...args)
```

---

📁 test/

I can generate full Jest tests if you want.

---

📁 .github/workflows/ci.yml

```yml
name: CI

on:
  push:
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm test
```

---

📁 .github/workflows/release.yml

```ymml
name: Release

on:
  push:
    tags:
      - "v*"

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm run build
```

---

📄 ISSUE_TEMPLATE.md

`

Issue Summary
Describe the problem repo-fix should detect or fix.

Expected Behavior
What should repo-fix do?

Additional Context
Links, screenshots, or examples.
`

---

📄 PULLREQUESTTEMPLATE.md

`

Summary
Describe the fix or feature.

Checklist
- [ ] Tests added
- [ ] CI passing
- [ ] Governance alignment verified

Notes
Anything reviewers should know.
`

---

📄 FUNDING.yml

`
github: [gitdigital]
`
