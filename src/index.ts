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
