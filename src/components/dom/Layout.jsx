import { useRef, forwardRef, useImperativeHandle } from 'react'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div
      {...props}
      ref={localRef}
      className='z-10 h-full overflow-hidden bg-[#3e3e3d] text-[#3e3e3d]'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
