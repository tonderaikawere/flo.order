import { Link, LinkProps } from 'react-router-dom'

interface ScrollLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollLink({ to, className, children, ...props }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle internal links
    if (typeof to === 'string' && to.startsWith('/')) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      // Use a small timeout to ensure the scroll happens before navigation
      setTimeout(() => {
        window.location.href = to
      }, 100)
    }
  }

  return (
    <Link 
      to={to} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  )
}
