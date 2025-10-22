export function extractFilenameFromKey(key: string | undefined): string | null {
  if (!key) return null

  const hyphenIndex = key.indexOf('-')
  
  if (hyphenIndex === -1 || hyphenIndex === key.length - 1) {
    return key
  }
  
  return key.substring(hyphenIndex + 1)
}
