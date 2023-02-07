import { Loader } from '@react-three/drei'

export function Overlay() {
  return (
    <>
      <Loader />

      <div className='absolute text-lg font-medium text-right top-10 right-10 '>
        <div className='flex flex-row gap-8'>
          <div className='flex flex-col'>
            <span className='block'>DENNIS</span>
            <span className='block'>VASH</span>
          </div>

          <div>
            <a
              className='underline underline-offset-4 decoration-2'
              href='/Dennis_Vash_Resume.pdf'
              target='_blank'>
              RESUME
            </a>
            <br />
            <span className='ordinal tabular-nums slashed-zero'>10/02/23</span>
          </div>
        </div>
      </div>

      <div className='absolute antialiased bottom-20 left-20'>
        <div className='flex flex-col'>
          <span className='block font-extrabold leading-none text-[16rem] drop-shadow-md'>爱</span>
          <span className='block text-sm text-center font-extralight'>LOVE</span>
        </div>
      </div>
    </>
  )
}
