import { useState } from "react";
import { copyToClipboard } from "./copyToClipboard";

type UseCopyToClipboardOptions = {}

type UseCopyToClipboardReturns = {
    copy: (text: string) => void
}

interface UseCopyToClipboard {
    (options: UseCopyToClipboardOptions): UseCopyToClipboardReturns
}

export const useCopyToClipboard: UseCopyToClipboard = options => {
    const {} = options
    const [ isCopied, setIsCopied ] = useState<boolean>(false)

    const copy = (text: string) => {
        copyToClipboard(text)
        setIsCopied(true)
    }

    return {
        isCopied,
        copy
    }
}