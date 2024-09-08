import { db } from "@/src/prisma"
import { ClientProviderSettings } from "@/src/types"
import { createOpenAI, OpenAIProvider } from "@ai-sdk/openai"

export async function createUndrstnd(
  options?: ClientProviderSettings
): Promise<OpenAIProvider> {
  const api_token = await db.aPIToken.findFirst({
    where: {
      id: options?.apiKey,
      deletedAt: null,
    },
  })

  if (!api_token) {
    throw new Error("API token not found")
  }
  
  return createOpenAI({
    baseURL: process.env.GROQ_API_ENDPOINT,
    apiKey: api_token.token,
    ...options,
  })
}
