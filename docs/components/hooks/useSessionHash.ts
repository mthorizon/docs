import embeddedWallet from '../EmbeddedWallet/EmbeddedWallet'
import { useEffect, useState } from "react";

export function useSessionHash() {
    const [sessionHash, setSessionHash] = useState("")
    const [error, setError] = useState<any>(undefined)

    useEffect(() => {
        const handler = async () => {
            try {
                setSessionHash(await embeddedWallet.getSessionHash())
            } catch (error) {
                console.error(error)
                setError(error)
            }
        }
        handler()
        return embeddedWallet.onSessionStateChanged(handler)
    }, [setSessionHash, setError])

    return {
        sessionHash,
        error,
        loading: !!sessionHash,
    }
}
