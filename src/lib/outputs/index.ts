export * as Base64DecodeOutput from '@lib/outputs/Base64DecodeOutput'
export * as Base64EncodeOutput from '@lib/outputs/Base64EncodeOutput'
export * as HtmlOutput from '@lib/outputs/HtmlOutput'
export * as JsonOutput from '@lib/outputs/JsonOutput'
export * as UrlDecodeOutput from '@lib/outputs/UrlDecodeOutput'
export * as UrlEncodeOutput from '@lib/outputs/UrlEncodeOutput'
export * as YamlOutput from '@lib/outputs/YamlOutput'

export interface Output {
  eligible?: (input: string) => boolean
  id: string
  operation: (input: string) => string
  overrides: string[]
}
