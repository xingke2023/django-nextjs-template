import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiResponse, setApiResponse] = useState(null)

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
        body: JSON.stringify({ message: message || 'Test message from frontend' })
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Django + React + Tailwind</h1>
          <p className="text-muted-foreground">
            Full-stack template with Django, React 19.2, Vite, Tailwind 4.1, and shadcn/ui
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>GET Request</CardTitle>
              <CardDescription>
                Test the Django API with a simple GET request
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
              <CardTitle>POST Request</CardTitle>
              <CardDescription>
                Send data to the Django API
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
              <CardTitle>API Response</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-auto">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="font-semibold">Backend:</span> Django 5.2.8 + Django REST Framework
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">Frontend:</span> React 19.2 + Vite
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">Styling:</span> Tailwind CSS 4.1 + shadcn/ui
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">Ports:</span> Backend: 8069, Frontend: 3112
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
