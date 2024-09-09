import { ClientProviderSettings } from "@/src/types"
import { createOpenAI, OpenAIProvider } from "@ai-sdk/openai"

export async function createUndrstnd(
  options?: ClientProviderSettings
): Promise<OpenAIProvider> {
  const token = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/token`, {
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
