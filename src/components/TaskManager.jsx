import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useTheme } from '../context/ThemeContext'
import Button from './button'
import Card from './card'

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')
  const { isDarkMode } = useTheme()

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { 
        id: Date.now(), 
        text: newTask.trim(), 
        completed: false 
      }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <Card className={`${isDarkMode ? 'bg-gray-800 text-white' : ''}`}>
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className={`flex-1 border rounded px-3 py-2 ${
            isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''
          }`}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <Button onClick={addTask}>Add Task</Button>
      </div>

      <div className="flex gap-2 mb-4">
        <Button 
          variant={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button 
          variant={filter === 'active' ? 'primary' : 'secondary'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button 
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>

      <div className="space-y-2">
        {filteredTasks.map(task => (
          <div 
            key={task.id} 
            className={`flex items-center justify-between p-3 rounded ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="h-4 w-4"
              />
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.text}
              </span>
            </div>
            <Button 
              variant="danger" 
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}