import { useTheme } from '../context/ThemeContext'
import Button from './button'

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              TaskMaster
            </h1>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}