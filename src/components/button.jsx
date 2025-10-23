export default function Button({ children, variant = 'primary', ...props }) {
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors"
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white", 
    danger: "bg-red-500 hover:bg-red-600 text-white"
  }

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  )
}