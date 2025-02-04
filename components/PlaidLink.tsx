import React, { useCallback, useState } from 'react'
import { Button } from './ui/button'

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const [token, setToken] = useState('');

    const onSuccess = useCallback(async () => {

    }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }
    
    return (
        <>
            {variant === 'primary' ? (
                <Button

                    className="plaidlink-primary"
                >
                    Connect bank
                </Button>
            ) : variant === 'ghost' ? (
                <Button>
                    Connect bank
                </Button>
            ) : (
                <Button>
                    Connect bank
                </Button>
            )}
        </>
    )
}

export default PlaidLink