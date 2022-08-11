# Copy to clipboard hook

A ReactJS hook that provide copy to clipboard functionality

---

## Install

```bash
# Install using NPM
npm i copy-to-clipboard-hook

# Or using Yarn
yarn add copy-to-clipboard-hook
```

## How to use

### basic usage
```typescript jsx
import { useCopyToClipboard } from 'copy-to-clipboard-hook'

export const Component: FC = props => {
    const { copy } = useCopyToClipboard()

    return (
        <button onClick={() => copy('Hello world!')}>Copy</button>
    )
}
```

## Configuration
