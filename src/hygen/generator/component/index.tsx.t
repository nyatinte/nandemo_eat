---
to: src/<%= directory %>/<%= name %>/<%= name %>.tsx
unless_exists: true
---
import type { FC } from 'react'
export type <%= name %>Props = {}
/**
 * <%= name %>
 */
export const <%= name %>:FC<<%= name %>Props> = (props) => {
  return <></>
}
