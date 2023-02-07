import { useRef, forwardRef, useImperativeHandle } from 'react'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div
      {...props}
      ref={localRef}
      className='z-10 h-full overflow-hidden bg-gradient-to-tr from-[#C8BBC2] to-[#FE9F95] text-[#3e3e3d]'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
