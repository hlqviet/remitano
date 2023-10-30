export const digest = async (content: string) => {
  const encodedContent = new TextEncoder().encode(content)
  const hashBuffer = await crypto.subtle.digest('SHA-256', encodedContent)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

  return hashHex
}
