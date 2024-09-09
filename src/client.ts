import { ClientProviderSettings } from "@/src/types"
import { createOpenAI, OpenAIProvider } from "@ai-sdk/openai"

export async function createUndrstnd(
  options?: ClientProviderSettings
): Promise<OpenAIProvider> {
  console.log("options:", options)

  console.log("apiKey:", options?.apiKey as string)
  const token = await fetch(
    `https://dev.undrstnd-labs.com/api/token?x-api-key=${options?.apiKey}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  console.log("Response object:", token)

  const apiKey = await token.json()
  console.log("Response object text:", await token.text())

  if (!apiKey) {
    throw new Error("API token not found")
  }

  return createOpenAI({
    baseURL: process.env.GROQ_API_ENDPOINT,
    apiKey,
    ...options,
  })
}
