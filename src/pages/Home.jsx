import TaskManager from '../components/TaskManager'
import UserList from '../components/UserList'

export default function Home() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <TaskManager />
      <UserList />
    </div>
  )
}