import { TIMERS_SEC } from '@/templates/TIMERS'
import { motion } from 'framer-motion'

export function Overlay() {
  return (
    <>
      <div className='absolute text-lg font-medium text-right top-10 right-10 '>
        <div className='flex flex-row gap-8'>
          <div className='flex flex-col'>
            <span className='block'>DENNIS</span>
            <span className='block'>VASH</span>
          </div>

          <div className='flex flex-col'>
            <a
              className='underline underline-offset-4 decoration-2'
              href='/Dennis_Vash_Resume.pdf'
              target='_blank'>
              RESUME
            </a>
            <span className='ordinal tabular-nums slashed-zero'>10/02/23</span>
          </div>
        </div>
      </div>

      <div className='absolute antialiased bottom-20 left-20'>
        <div className='flex flex-col'>
          <motion.div
            className='block font-extrabold leading-none text-[16rem] drop-shadow-md'
            initial={{ visibility: 'hidden' }}
            animate={{ visibility: 'visible' }}
            transition={{ delay: TIMERS_SEC.TITLE_START }}>
            爱
          </motion.div>

          <motion.div
            className='block text-sm text-center font-extralight'
            initial={{ visibility: 'hidden' }}
            animate={{ visibility: 'visible' }}
            transition={{ delay: TIMERS_SEC.SUBTITLE_START }}>
            LOVE
          </motion.div>
        </div>
      </div>
    </>
  )
}
