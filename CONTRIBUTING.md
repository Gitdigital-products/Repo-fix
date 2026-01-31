# Contributing to Repo‑fix

Thank you for your interest in contributing! Repo‑fix is part of the GitDigital Products ecosystem and follows a high standard of clarity, determinism, and developer experience.


✅ 1. Complete Documentation Suite
Your repo needs the standard GitDigital documentation set:

Required Files
| File | Purpose |
|------|---------|
| README.md (upgrade) | Marketplace‑ready, feature‑complete, with install instructions |
| CONTRIBUTING.md | How contributors should work with Repo‑fix |
| SECURITY.md | Responsible disclosure policy |
| CODEOFCONDUCT.md | Community standards |
| ARCHITECTURE.md | How Repo‑fix works internally |
| CONFIGURATION.md | All config options Repo‑fix supports |
| WORKFLOWS.md | How Repo‑fix interacts with GitHub events |
| TROUBLESHOOTING.md | Common issues + fixes |
| ROADMAP.md | Future features + milestones |

You already have some templates, but they’re incomplete or missing.

---

✅ 2. Operational Files
These ensure the app works when installed:

Required Files
| File | Purpose |
|------|---------|
| .github/workflows/repo-fix-ci.yml | Lint, test, type‑check, build |
| .github/workflows/repo-fix-release.yml | Auto‑publish releases |
| .github/ISSUE_TEMPLATE/*.md | Bug report, feature request |
| .github/PULLREQUESTTEMPLATE.md | PR standards |
| .env.example | Environment variable template |
| docs/events/*.md | Per‑event documentation (push, issues, PRs, etc.) |

---

✅ 3. Source Code Structure
Repo‑fix should have a predictable, clean structure:

`
src/
  index.ts
  server.ts
  handlers/
    push.ts
    issues.ts
    pull_request.ts
  rules/
    metadata.ts
    templates.ts
    workflows.ts
  utils/
    logger.ts
    github.ts
    file-system.ts
`

If you want, I can generate every file above.

---

📄 Copy‑Paste‑Ready Files
Below are the exact files you can drop into the repo right now.

---

1. CONTRIBUTING.md

`markdown

Contributing to Repo‑fix

Thank you for your interest in contributing! Repo‑fix is part of the GitDigital Products ecosystem and follows a high standard of clarity, determinism, and developer experience.

🧱 Development Setup
1. Clone the repository  
2. Install dependencies  
   `bash
   npm install
   `
3. Start the development server  
   `bash
   npm run dev
   `

🧪 Testing
Run the full test suite:
`bash
npm test
`

🔀 Pull Requests
- Fork the repository
- Create a feature branch
- Follow the PR template
- Ensure all tests pass
- Write clear commit messages

🛡 Security
Do not report vulnerabilities publicly. Follow SECURITY.md.
`

---

2. SECURITY.md

`markdown

Security Policy

Supported Versions
Only the latest major version of Repo‑fix receives security updates.

Reporting a Vulnerability
If you discover a security issue, please report it privately.

Email: security@gitdigital-products.com  
We will acknowledge your report within 48 hours.
`

---

3. CODEOFCONDUCT.md

`markdown

Code of Conduct

Repo‑fix follows the Contributor Covenant Code of Conduct.

Our Standards
- Be respectful and inclusive
- Provide constructive feedback
- Assume good intent

Enforcement
Violations may be reported to: conduct@gitdigital-products.com
`

---

4. ARCHITECTURE.md

`markdown

Repo‑fix Architecture

Repo‑fix is a GitHub App that listens to repository events and automatically repairs missing or invalid files.

Core Components

1. Event Handlers
Located in src/handlers/:
- push.ts
- issues.ts
- pull_request.ts

2. Rule Engine
Located in src/rules/:
- Metadata validation
- Template injection
- Workflow enforcement

3. GitHub Client
Located in src/utils/github.ts:
- Authenticated Octokit wrapper
- File read/write helpers

4. Server
src/server.ts runs the webhook listener.
`

---

5. .env.example

`bash
APP_ID=
PRIVATE_KEY=
WEBHOOK_SECRET=
NODE_ENV=development
PORT=3000
`

---

6. .github/workflows/repo-fix-ci.yml

`yaml
name: Repo‑fix CI

on:
  push:
    branches: [ main ]
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
      - run: npm run lint
      - run: npm test
      - run: npm run build
`

---

7. .github/workflows/repo-fix-release.yml

`yaml
name: Release

on:
  push:
    tags:
      - "v..*"

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: softprops/action-gh-release@v2
        with:
          files: dist/
`

---

8. WORKFLOWS.md

`markdown

GitHub Events Handled by Repo‑fix

Repo‑fix listens to:

- push
- pull_request
- issues
- repository
- installation

Each event triggers the rule engine to validate and repair repository structure.
`

---

9. TROUBLESHOOTING.md

`markdown

Troubleshooting

App does not respond to events
- Ensure the webhook URL is correct
- Check webhook delivery logs
- Verify WEBHOOK_SECRET matches GitHub

Files are not being updated
- Ensure the app has contents: write permission
- Check rate limits
`

---

10. ROADMAP.md

`markdown

Repo‑fix Roadmap

Q1 2026
- Auto‑generate missing workflows
- Auto‑generate missing documentation
- Repo classification engine

Q2 2026
- Multi‑repo batch repair
- Contributor scoring integration
`