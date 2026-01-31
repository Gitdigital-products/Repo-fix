import { App } from "@octokit/app"

export function getGitHubClient() {
  const app = new App({
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY
  })

  return app
}
