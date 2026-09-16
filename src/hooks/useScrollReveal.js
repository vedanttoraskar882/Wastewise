import { useEffect } from 'react'

/**
 * Attaches Intersection Observer to elements with class "reveal"
 * and adds "visible" class when they enter the viewport.
 * Works correctly with React StrictMode (no hasRun guard).
 */
export function useScrollReveal() {
  useEffect(() => {
    let observer

    // Small timeout ensures all components are mounted and in the DOM
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )

      const targets = document.querySelectorAll('.reveal')
      targets.forEach((el) => observer.observe(el))
    }, 50)

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
    }
  }, [])
}
