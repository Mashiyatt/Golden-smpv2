import React, { useState, useEffect } from 'react'
import { Server, Users, Wifi, RefreshCw, Copy, Check } from 'lucide-react'

interface ServerData {
  online: boolean
  players: {
    online: number
    max: number
  }
}

export const ServerStatus: React.FC = () => {
  const [serverData, setServerData] = useState<ServerData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const serverIP = 'play.golden-smp.xyz'
  const serverPort = '25777'

  const checkServerStatus = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://api.mcsrvstat.us/3/${serverIP}:${serverPort}`)
      const data = await response.json()
      setServerData(data)
    } catch (error) {
      console.error('Error checking server status:', error)
      setServerData(null)
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  useEffect(() => {
    checkServerStatus()
    const interval = setInterval(checkServerStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="glass-effect rounded-2xl p-4 min-w-[280px] shadow-2xl border border-emerald-500/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-white">Server Status</h3>
          </div>
          <div className={`w-3 h-3 rounded-full ${
            serverData?.online ? 'bg-emerald-400 pulse-glow' : 'bg-red-400'
          }`}></div>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">IP Address:</span>
            <div className="flex items-center gap-2">
              <code className="bg-slate-800/50 px-2 py-1 rounded text-emerald-300 font-mono text-xs">
                {serverIP}
              </code>
              <button
                onClick={copyToClipboard}
                className="p-1 hover:bg-emerald-500/20 rounded transition-colors"
                title="Copy IP"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Port:</span>
            <code className="bg-slate-800/50 px-2 py-1 rounded text-blue-300 font-mono text-xs">
              {serverPort}
            </code>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300">Players:</span>
            </div>
            <span className="text-white font-medium">
              {serverData ? `${serverData.players.online}/${serverData.players.max}` : '--/--'}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">Status:</span>
            </div>
            <span className={`font-medium ${
              serverData?.online ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {serverData?.online ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
        
        <button
          onClick={checkServerStatus}
          disabled={isLoading}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Checking...' : 'Refresh'}
        </button>
      </div>
    </div>
  )
}