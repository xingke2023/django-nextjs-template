import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ApiTestClient } from "@/components/api-test-client"

// Server-side data fetching (SSR)
async function getServerData() {
  try {
    const res = await fetch('http://localhost:8069/api/hello/', {
      cache: 'no-store' // Disable caching for fresh data
    })
    if (!res.ok) throw new Error('Failed to fetch')
    return await res.json()
  } catch (error) {
    return { error: 'Failed to fetch server data' }
  }
}

export default async function Home() {
  // This runs on the server
  const serverData = await getServerData()

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6 py-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Django + Next.js SSR + Tailwind
          </h1>
          <p className="text-muted-foreground">
            Full-stack template with Next.js 16, React 19.2, Tailwind 4, and shadcn/ui
          </p>
        </div>

        {/* Server-Side Rendered Data */}
        <Card>
          <CardHeader>
            <CardTitle>Server-Side Rendered (SSR)</CardTitle>
            <CardDescription>
              This data was fetched on the server before the page was rendered
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-auto">
              {JSON.stringify(serverData, null, 2)}
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              ✅ Rendered at build/request time on the server
            </p>
          </CardContent>
        </Card>

        {/* Client-Side Component */}
        <ApiTestClient />

        {/* Tech Stack Info */}
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
                <span className="font-semibold">Frontend:</span> Next.js 16 + React 19.2 (with SSR)
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">Styling:</span> Tailwind CSS 4 + shadcn/ui
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
