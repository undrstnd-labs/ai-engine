import { createUndrstnd } from "@/src/client"
import { ClientProvider, ClientProviderSettings } from "@/src/types"

export { ClientProviderSettings, ClientProvider, createUndrstnd }

async function initializeClient() {
  const client = await createUndrstnd({
    apiKey: "udsk_demo-api-key-x-00000",
  })

  console.log(client)
}

initializeClient()
