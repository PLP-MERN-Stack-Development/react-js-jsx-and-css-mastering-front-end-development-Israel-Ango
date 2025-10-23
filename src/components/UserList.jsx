import { useState, useMemo } from 'react'
import { useApi } from '../hooks/useApi'
import { useTheme } from '../context/ThemeContext'
import Card from './card'
import Button from './button'

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const { data: users, loading, error } = useApi('https://jsonplaceholder.typicode.com/users')
  const { isDarkMode } = useTheme()

  const itemsPerPage = 3

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [users, searchTerm])

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  if (loading) {
    return (
      <Card className={`text-center py-8 ${isDarkMode ? 'bg-gray-800 text-white' : ''}`}>
        <div className="text-lg">Loading users...</div>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className={`text-center py-8 ${isDarkMode ? 'bg-gray-800 text-white' : ''}`}>
        <div className="text-red-500 text-lg">Error: {error}</div>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Try Again
        </Button>
      </Card>
    )
  }

  return (
    <Card className={isDarkMode ? 'bg-gray-800 text-white' : ''}>
      <h2 className="text-2xl font-bold mb-6">Users from API</h2>
      
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1)
          }}
          className={`w-full p-3 border rounded ${
            isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''
          }`}
        />
      </div>

      {/* User List */}
      <div className="space-y-4 mb-6">
        {paginatedUsers.map(user => (
          <div 
            key={user.id}
            className={`p-4 rounded border ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user.address.city}, {user.address.street}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user.company.name}
            </p>
          </div>
        ))}
        
        {paginatedUsers.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            No users found matching your search.
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Button 
          onClick={handlePrevious}
          disabled={currentPage === 1}
          variant="secondary"
        >
          Previous
        </Button>
        
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        
        <Button 
          onClick={handleNext}
          disabled={currentPage === totalPages || totalPages === 0}
          variant="secondary"
        >
          Next
        </Button>
      </div>

      {/* Results Info */}
      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        Showing {paginatedUsers.length} of {filteredUsers.length} users
        {searchTerm && ` matching "${searchTerm}"`}
      </div>
    </Card>
  )
}