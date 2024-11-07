// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>
        {/* Dashboard navigation items */}
        <a href='/dashboard'>Home</a>
        <a href='/dashboard/settings'>Settings</a>
      </nav>
      {children}
    </div>
  )
}
