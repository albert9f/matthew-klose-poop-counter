import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function getConsistencyLabel(value: number): string {
  const labels = {
    1: "Hard lumps",
    2: "Sausage-like, lumpy",
    3: "Sausage-like with cracks",
    4: "Smooth sausage",
    5: "Soft blobs",
    6: "Fluffy pieces",
    7: "Watery liquid"
  }
  return labels[value as keyof typeof labels] || "Unknown"
}

export function getSizeLabel(size: string): string {
  const labels = {
    small: "Petit",
    medium: "Classic",
    large: "Grande", 
    xl: "Venti",
    monster: "Trenta"
  }
  return labels[size as keyof typeof labels] || size
}

export function getColorEmoji(color: string): string {
  const emojis = {
    brown: "🤎",
    "light-brown": "🟤", 
    "dark-brown": "🟫",
    green: "🟢",
    yellow: "🟡",
    red: "🔴",
    black: "⚫"
  }
  return emojis[color as keyof typeof emojis] || "💩"
}