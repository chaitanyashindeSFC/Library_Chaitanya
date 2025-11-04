# @stfox/ui

React + Tailwind component library scaffold (Flowbite-like).

## Install

```bash
npm install @stfox/ui
```

Peer deps:
- react >=18 <20
- react-dom >=18 <20

## Usage

Import CSS once in your app (recommended in your root layout):

```tsx
import '@stfox/ui/styles.css';
```

Use components:

```tsx
import { Button } from '@stfox/ui';

export function Example() {
  return (
    <Button variant="primary">Click me</Button>
  );
}
```

## Development

- Build once:

```bash
npm run build
```

- Watch (JS + CSS):

```bash
npm run dev
```

## Publish

1) Update version in `package.json`
2) `npm login`
3) `npm publish --access public`

## Notes

- Library bundles JavaScript with tsup and outputs CSS built by Tailwind CLI into `dist/styles.css`.
- Consumers only need to import `@stfox/ui/styles.css` once.

