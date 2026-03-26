// geometric-pattern.tsx
export function GeometricPattern({ variant = 'default', className = '' }: { variant?: 'default' | 'dense' | 'sparse', className?: string }) {
  const patterns = {
    default: (
      <>
        {/* Large tilted rectangles */}
        <rect x="20" y="30" width="50" height="15" fill="currentColor" transform="rotate(-30 45 37.5)" />
        <rect x="120" y="50" width="50" height="15" fill="currentColor" transform="rotate(30 145 57.5)" />
        <rect x="40" y="120" width="50" height="15" fill="currentColor" transform="rotate(-45 65 127.5)" />
        <rect x="130" y="100" width="50" height="15" fill="currentColor" transform="rotate(45 155 107.5)" />
        {/* Small diamonds */}
        <rect x="90" y="20" width="12" height="12" fill="currentColor" transform="rotate(45 96 26)" />
        <rect x="30" y="80" width="12" height="12" fill="currentColor" transform="rotate(45 36 86)" />
        <rect x="160" y="150" width="12" height="12" fill="currentColor" transform="rotate(45 166 156)" />
        <rect x="70" y="160" width="12" height="12" fill="currentColor" transform="rotate(45 76 166)" />
      </>
    ),
    dense: (
      <>
        {/* More geometric elements */}
        <rect x="10" y="10" width="20" height="20" fill="currentColor" transform="rotate(45 20 20)" />
        <rect x="150" y="30" width="30" height="8" fill="currentColor" transform="rotate(-15 165 34)" />
        <rect x="80" y="150" width="40" height="8" fill="currentColor" transform="rotate(25 100 154)" />
        <rect x="180" y="120" width="15" height="15" fill="currentColor" transform="rotate(60 187.5 127.5)" />
        <circle cx="50" cy="50" r="6" fill="currentColor" />
        <circle cx="140" cy="180" r="8" fill="currentColor" />
        <circle cx="30" cy="170" r="4" fill="currentColor" />
        <path d="M100 100 L110 90 L120 100 L110 110 Z" fill="currentColor" />
      </>
    ),
    sparse: (
      <>
        <rect x="40" y="40" width="30" height="30" fill="currentColor" transform="rotate(45 55 55)" />
        <rect x="140" y="140" width="30" height="30" fill="currentColor" transform="rotate(45 155 155)" />
        <rect x="80" y="80" width="15" height="15" fill="currentColor" transform="rotate(45 87.5 87.5)" />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {patterns[variant]}
    </svg>
  )
}

export function DecorativeFrame({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/30" />
      
      {/* Inner content */}
      <div className="p-8">
        {children}
      </div>
    </div>
  )
}

export function DiagonalLines({ className = '' }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
    </svg>
  )
}