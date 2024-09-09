import { ClientProviderSettings } from "@/src/types"
import { createOpenAI, OpenAIProvider } from "@ai-sdk/openai"

export async function createUndrstnd(
  options?: ClientProviderSettings
): Promise<OpenAIProvider> {
  const token = await fetch(
    `https://dev.undrstnd-labs.com/api/token`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": options?.apiKey as string,
      },
    }
  )

  const apiKey = await token.json()

  if (!apiKey) {
    throw new Error("API token not found")
  }

  return createOpenAI({
    baseURL: process.env.GROQ_API_ENDPOINT,
    apiKey,
    ...options,
  })
}
