'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ApiTestClient() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiResponse, setApiResponse] = useState<any>(null)

  const fetchHello = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:8069/api/hello/')
      const data = await response.json()
      setApiResponse(data)
    } catch (error) {
      console.error('Error fetching data:', error)
      setApiResponse({ error: 'Failed to fetch data from API' })
    } finally {
      setLoading(false)
    }
  }

  const testPost = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:8069/api/test/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message || 'Test message from Next.js' })
      })
      const data = await response.json()
      setApiResponse(data)
    } catch (error) {
      console.error('Error posting data:', error)
      setApiResponse({ error: 'Failed to post data to API' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Client-Side GET Request</CardTitle>
            <CardDescription>
              Test the Django API with a client-side GET request
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={fetchHello}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Loading...' : 'Fetch Hello'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Client-Side POST Request</CardTitle>
            <CardDescription>
              Send data to the Django API from the browser
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="text"
              placeholder="Enter a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            />
            <Button
              onClick={testPost}
              disabled={loading}
              variant="secondary"
              className="w-full"
            >
              {loading ? 'Sending...' : 'Send POST'}
            </Button>
          </CardContent>
        </Card>
      </div>

      {apiResponse && (
        <Card>
          <CardHeader>
            <CardTitle>Client-Side API Response</CardTitle>
            <CardDescription>
              This data was fetched in the browser (client-side)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-auto">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              🌐 Fetched in the browser after page load
            </p>
          </CardContent>
        </Card>
      )}
    </>
  )
}
