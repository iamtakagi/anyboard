import { Context } from "koa"
import { postsRepo } from "../constants"

export default async (ctx: Context) => {
    const { keywords, anonymities, hashtags } = ctx.request.query
    const posts = await postsRepo.search({
        keywords: keywords.toLocaleString(),
        anonymities: anonymities.toLocaleString(),
        hashtags: hashtags.toLocaleString()
    })
    ctx.body = JSON.stringify(posts)
}