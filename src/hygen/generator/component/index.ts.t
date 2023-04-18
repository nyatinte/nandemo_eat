---
to: src/<%= directory %>/<%= name %>/index.ts
unless_exists: true
---
export * from './<%= name %>'