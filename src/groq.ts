import { createOpenAI } from "@ai-sdk/openai";

export const groq_client = (api_key: string) => {
  return createOpenAI({
    baseURL: process.env.GROQ_API_ENDPOINT,
    apiKey: api_key,
  });
};
