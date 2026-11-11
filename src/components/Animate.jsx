import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const viewport = { once: true, margin: '-60px' }

function parseDelay(delay) {
  const match = /(\d+)/.exec(delay)
  return match ? Number(match[1]) / 1000 : 0
}

/**
 * FadeUp — fades and slides up when scrolled into view
 * delay: 'delay-N' string (N in ms), kept for backward compatibility with existing call sites
 */
export function FadeUp({ children, delay = '', className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay: parseDelay(delay), ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * FadeIn — pure fade, no movement
 */
export function FadeIn({ children, delay = '', className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay: parseDelay(delay), ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * SlideIn — slides in from left
 */
export function SlideIn({ children, delay = '', className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay: parseDelay(delay), ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * ScaleIn — scales up from slightly smaller
 */
export function ScaleIn({ children, delay = '', className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay: parseDelay(delay), ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * NumberTicker — counts up from 0 to `value` once scrolled into view
 */
export function NumberTicker({ value, delay = '', className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, viewport)
  const [display, setDisplay] = useState(0)
  const target = Number(value)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration: 1.4,
      delay: parseDelay(delay),
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, target])

  return <span ref={ref} className={className}>{display}</span>
}
