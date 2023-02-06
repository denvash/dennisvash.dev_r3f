import { Loader } from '@react-three/drei'

export function Overlay() {
  return (
    <>
      {/* <Loader /> */}
      {/* <div className='char' style={{ top: 40, left: 40 }}>
        爱
      </div>
      <div className='char' style={{ top: 40, left: '20vw' }}>
        L
      </div>
      <div className='char' style={{ top: 40, left: '40vw' }}>
        O
      </div>
      <div className='char' style={{ top: '20vw', left: '20vw' }}>
        V
      </div>
      <div className='char' style={{ bottom: 40, left: '40vw' }}>
        E
      </div> */}
      <div
        style={{ position: 'absolute', top: 40, right: 160, fontSize: '15px', textAlign: 'right' }}>
        DENNIS
        <br />
        VASH
      </div>
      <div
        style={{
          position: 'absolute',
          top: 40,
          right: 40,
          fontSize: '15px',
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums',
        }}>
        —
        <br />
        10/02/23
      </div>
      <div style={{ position: 'absolute', bottom: 120, left: 120, fontSize: '18px' }}>
        SOFTWARE ENGINEER SPECIALIZING IN
        <br />
        WEB DEVELOPMENT.
        <br />
        <br />
      </div>
    </>
  )
}
