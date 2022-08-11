import { FC } from "react";
import { useCopyToClipboard } from "copy-to-clipboard-hook";

export const App: FC = () => {
  const { copy } = useCopyToClipboard({})

  const handleCopy = () => {
    copy('Hello World!')
  }

  return (
    <div>
      {/*{isCopied && <p>Copied!</p>}*/}
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
}

export default App;
