![hero](/public/github.png)

# Undrstnd AI Engine

The [Undrstnd AI Engine](https://dev.undrstnd-labs.com) is a TypeScript toolkit designed to help you build AI-powered applications using popular frameworks like Next.js, React, Svelte, Vue and runtimes like Node.js.

To learn more about how to use the Undrstnd AI Engine, check out our [API Reference](https://dev.undrstnd-labs.com/reference) and [Documentation](https://dev.undrstnd-labs.com/docs).

## Installation

You will need Node.js 18+ and pnpm installed on your local development machine.

```shell
npm install @undrstnd/ai-engine
```

## Usage

### Creating an Undrstnd Instance

The Undrstnd AI Engine module provides a unified API to interact with model providers like `Llama3`, you can also try out our other [models](https://dev.undrstnd-labs.com/api/models/info).

You will then create an Undrstnd instance with your API key.
_Note: To request an API_KEY, send us a message at `info@undrstnd-labs.com`_

```ts
import { createUndrstnd } from "@undrstnd/ai-engine"

const undrstnd = await createUndrstnd({
  apiKey: "your-undrstnd-api-key",
})
```

### Generating Text

You can then use the `generateText` function to generate text using the Undrstnd instance.

```ts
import { generateText } from "ai"

const { text } = await generateText({
  model: undrstnd("llama3-8b-8192"),
  prompt: "Write an article about AI and how fast it's growing",
})
```

### Using Undrstnd with Next.js App Router

The Undrstnd AI Engine can also be used with Next.js App Router to build chatbots and generative user interfaces.

###### @/app/api/chat/route.ts (Next.js App Router)

```ts
import { createUndrstnd } from "@undrstnd/ai-engine"
import { CoreMessage, streamText } from "ai"

const undrstnd = await createUndrstnd({
  apiKey: process.env.UNDRSTND_API_KEY,
})

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json()

  const result = await streamText({
    model: undrstnd("llama3-8b-8192"),
    messages,
  })

  return result.toDataStreamResponse()
}
```

## Templates

We've built a [template](https://github.com/undrstnd-labs/developers) that include Undrstnd AI Engine integrations for different use cases and frameworks. You can use this template to get started with your AI-powered application.

## Community

The Undrstnd AI Engine community can be found on [GitHub Discussions](https://github.com/undrstnd/ai-engine/discussions) where you can ask questions, voice ideas, and share your projects with other people.

## Authors

This library is created by the Undrstnd team members, with contributions from the Open Source Community.
