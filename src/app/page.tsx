import Dashboard from "./components/dashboard/Dashboard"
import Sidebar from "./components/dashboard/sidebar/Sidebar"

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
    <Dashboard />
    </main>
  )
}
