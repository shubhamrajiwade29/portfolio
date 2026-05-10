import useInView from '../hooks/useInView'

/**
 * FadeUp — fades and slides up when scrolled into view
 * delay: tailwind delay class like 'delay-100', 'delay-200', etc.
 */
export function FadeUp({ children, delay = '', className = '' }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delay} ${
        inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * FadeIn — pure fade, no movement
 */
export function FadeIn({ children, delay = '', className = '' }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-out ${delay} ${
        inView ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * SlideIn — slides in from left
 */
export function SlideIn({ children, delay = '', className = '' }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delay} ${
        inView
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * ScaleIn — scales up from slightly smaller
 */
export function ScaleIn({ children, delay = '', className = '' }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delay} ${
        inView
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95'
      } ${className}`}
    >
      {children}
    </div>
  )
}
