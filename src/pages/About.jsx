import { useTheme } from '../context/ThemeContext'
import Card from '../components/card'

export default function About() {
  const { isDarkMode } = useTheme()

  return (
    <div className="container mx-auto py-8">
      <Card className={isDarkMode ? 'bg-gray-800 text-white' : ''}>
        <h1 className="text-3xl font-bold mb-4">About This App</h1>
        <p className="mb-4">
          This React application demonstrates modern web development practices including:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Component-based architecture with reusable UI components</li>
          <li>State management using React hooks (useState, useEffect)</li>
          <li>Context API for global theme management</li>
          <li>Custom hooks for local storage persistence</li>
          <li>API integration with JSONPlaceholder</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>Client-side routing with React Router</li>
        </ul>
        <p>
          The app features a task manager and user list to showcase these concepts in practice.
        </p>
      </Card>
    </div>
  )
}