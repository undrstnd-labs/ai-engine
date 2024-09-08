import { ClientProviderSettings } from "@/src/types"
import { createOpenAI, OpenAIProvider } from "@ai-sdk/openai"

export const undrstnd_client = (
  options?: ClientProviderSettings
): OpenAIProvider => {
  return createOpenAI({
    baseURL: process.env.GROQ_API_ENDPOINT,
    ...options,
  })
}
