repo-fix/
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
├── CODE_OF_CONDUCT.md
├── LICENSE
├── .gitignore
├── app.yml
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── handlers/
│   │   ├── issues.ts
│   │   ├── pullRequests.ts
│   │   └── repoFixer.ts
│   ├── services/
│   │   ├── fixerService.ts
│   │   └── githubClient.ts
│   └── utils/
│       └── logger.ts
├── test/
│   ├── issues.test.ts
│   └── pullRequests.test.ts
└── .github/
    ├── workflows/
    │   ├── ci.yml
    │   └── release.yml
    ├── ISSUE_TEMPLATE.md
    ├── PULL_REQUEST_TEMPLATE.md
    └── FUNDING.yml
