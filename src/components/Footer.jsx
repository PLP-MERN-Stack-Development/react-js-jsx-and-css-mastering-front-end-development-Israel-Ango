export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center">
        <div className="space-x-4 mb-4">
          <a href="/privacy" className="hover:text-gray-300">Privacy</a>
          <a href="/terms" className="hover:text-gray-300">Terms</a>
        </div>
        <p>&copy; Manage your tasks efficiently with our modern task management app.</p>
      </div>
    </footer>
  )
}