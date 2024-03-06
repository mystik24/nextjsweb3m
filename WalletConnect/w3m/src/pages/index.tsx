// pages/index.tsx
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from '@chakra-ui/react'

export default function Home() {
  const { connect, connectors, error: connectError, isLoading: isConnectLoading } = useConnect()
  const { disconnect, error: disconnectError, isLoading: isDisconnectLoading } = useDisconnect()
  const { address, isConnected } = useAccount()

  return (
    <div style={{ padding: '20px' }}>
      {isConnected ? (
        <>
          <p>Connected to {address}</p>
          <Button
            onClick={() => disconnect()}
            isLoading={isDisconnectLoading}
            colorScheme="red"
          >
            Disconnect
          </Button>
        </>
      ) : (
        <div>
          <p>Connect to your wallet</p>
          {connectors.map((connector) => (
            <Button
              key={connector.id}
              onClick={() => connect({ connector })}
              isLoading={isConnectLoading && connector.id === 'injected'}
              disabled={!connector.ready}
              style={{ marginRight: '10px', marginBottom: '10px' }}
            >
              {connector.name}
              {!connector.ready && ' (unsupported)'}
              {isConnectLoading && connector.id === 'injected' && ' (connecting)'}
            </Button>
          ))}

          {connectError && <p style={{ color: 'red' }}>{connectError.message}</p>}
        </div>
      )}
    </div>
  )
}
