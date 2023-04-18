---
to: src/<%= directory %>/<%= name %>/<%= name %>.tsx
unless_exists: true
---
export type <%= name %>Props = {}
/**
 * <%= name %>
 */
export const <%= name %> = ({}: <%= name %>Props): JSX.Element => {
  return <></>
}
