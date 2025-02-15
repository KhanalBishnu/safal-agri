import { useState, useEffect } from 'react'

export function useToast() {
  const [toasts, setToasts] = useState([])

  const addToast = ({ title, description, variant = 'default', duration = 3000 }) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prevToasts) => [...prevToasts, { id, title, description, variant }])

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, duration)
  }

  return {
    toasts,
    toast: addToast,
  }
}
