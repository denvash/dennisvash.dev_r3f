import { useSceneStore } from '@/templates/hooks/useSceneStore'
import { Loader } from '@react-three/drei'
import { motion } from 'framer-motion'

export function Overlay() {
  const isTitleEnabled = useSceneStore((state) => state.isTitleEnabled)

  return (
    <>
      <div className='absolute font-medium text-right lg:text-lg text-normal top-4 right-4'>
        <div className='flex flex-row gap-8'>
          <div className='flex flex-col'>
            <span className='block'>DENNIS</span>
            <span className='block'>VASH</span>
          </div>

          <div className='flex flex-col'>
            <motion.a
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.5 }}
              className='underline uppercase underline-offset-4 decoration-2 cursor-[inherit]'
              href='/Dennis_Vash_Resume.pdf'
              target='_blank'>
              Résumé
            </motion.a>
            <span className='ordinal tabular-nums slashed-zero'>10/02/23</span>
          </div>
        </div>
      </div>

      {isTitleEnabled && (
        <div className='absolute antialiased bottom-5 left-5 md:bottom-10 sm:left-10'>
          <div className='flex flex-col'>
            <motion.div
              className='block font-extrabold leading-none lg:text-[16rem] text-[10rem] drop-shadow-md'
              initial={{ visibility: 'hidden' }}
              animate={{ visibility: 'visible' }}>
              爱
            </motion.div>

            <motion.div
              className='block text-sm text-center font-extralight'
              initial={{ visibility: 'hidden' }}
              animate={{ visibility: 'visible' }}
              transition={{ delay: 1 }}>
              LOVE
            </motion.div>
          </div>
        </div>
      )}
    </>
  )
}
