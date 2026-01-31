export class FixerService {
  constructor(octokit) {
    this.octokit = octokit
  }

  async ensureReadme(repo) {}
  async ensureTemplates(repo) {}
  async ensureBranchProtection(repo) {}
}
