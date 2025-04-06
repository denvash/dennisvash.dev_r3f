import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-[#3e3e3d]'>
      <div className='flex flex-col items-center gap-4'>
        <motion.div
          className='w-16 h-16 border-4 rounded-full border-[#FE9F95] border-t-transparent'
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  )
}
