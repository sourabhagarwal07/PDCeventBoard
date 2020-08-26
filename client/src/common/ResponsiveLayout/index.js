import { useState, useEffect } from 'react'

import { useWindowDimensions } from '../WindowDimensionsProvider'

// const ResponsiveLayout = ({ breakpoint, renderMobile, renderDesktop }) => {
//   const [width, setWidth] = useState(window.innerWidth)
//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth)
//     }
//     window.addEventListener('resize', handleResize)
//     return () => { window.removeEventListener('resize', handleResize) }
//   }, [])
//   return (width > breakpoint ? renderDesktop() : renderMobile())
// }

const ResponsiveLayout = ({ breakpoint, renderMobile, renderDesktop }) => {
  const { width } = useWindowDimensions()
  return (width > breakpoint ? renderDesktop() : renderMobile())
}

export default ResponsiveLayout