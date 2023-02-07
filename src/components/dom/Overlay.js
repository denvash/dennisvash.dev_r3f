import { TIMERS_SEC } from '@/templates/TIMERS'
import { motion } from 'framer-motion'

export function Overlay() {
  return (
    <>
      <div className='absolute font-medium text-right lg:text-lg text-normal top-4 right-4'>
        <div className='flex flex-row gap-8'>
          <div className='flex flex-col'>
            <span className='block'>DENNIS</span>
            <span className='block'>VASH</span>
          </div>

          <div className='flex flex-col'>
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.5 }}
              className='underline underline-offset-4 decoration-2'
              href='/Dennis_Vash_Resume.pdf'
              target='_blank'>
              RESUME
            </motion.div>
            <span className='ordinal tabular-nums slashed-zero'>10/02/23</span>
          </div>
        </div>
      </div>

      <div className='absolute antialiased  bottom-20 left-10'>
        <div className='flex flex-col'>
          <motion.div
            className='block font-extrabold leading-none lg:text-[16rem] text-[10rem] drop-shadow-md'
            initial={{ visibility: 'hidden' }}
            animate={{ visibility: 'visible' }}
            transition={{ delay: TIMERS_SEC.TITLE_START }}>
            爱
          </motion.div>

          <motion.div
            className='block text-sm text-center font-extralight'
            initial={{ visibility: 'hidden' }}
            animate={{ visibility: 'visible' }}
            transition={{ delay: TIMERS_SEC.TITLE_START + 1 }}>
            LOVE
          </motion.div>
        </div>
      </div>
    </>
  )
}
