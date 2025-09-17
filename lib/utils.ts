import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'pre-launch':
      return 'text-yellow-500'
    case 'selling':
      return 'text-green-500'
    case 'under development':
      return 'text-blue-500'
    case 'completed':
      return 'text-gray-500'
    default:
      return 'text-gray-400'
  }
}
