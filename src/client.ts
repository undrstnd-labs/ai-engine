import { ClientProviderSettings } from "@/src/types"
import { createOpenAI, OpenAIProvider } from "@ai-sdk/openai"

export async function createUndrstnd(
  options?: ClientProviderSettings
): Promise<OpenAIProvider> {
  const token = await fetch(
    `https://dev.undrstnd-labs.com/api/token?x-api-key=${options?.apiKey}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  const responseText = await token.text()
  const responseJson = JSON.parse(responseText)
  const apiKey = responseJson.token

  if (!apiKey) {
    throw new Error("API token not found")
  }

  return createOpenAI({
    baseURL: process.env.GROQ_API_ENDPOINT,
    apiKey,
    ...options,
  })
}
