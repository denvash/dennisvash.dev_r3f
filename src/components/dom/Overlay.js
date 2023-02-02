export function Overlay({ isOn, onClick }) {
  return (
    <>
      <div className='char' style={{ top: 40, left: 40 }}>
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
      </div>
      <div style={{ position: 'absolute', top: 40, right: 160, fontSize: '15px', textAlign: 'right' }}>
        DENNIS
        <br />
        VASH
      </div>
      <div style={{ position: 'absolute', right: 40, top: '50%', fontSize: '18px' }}>
        <div style={{ position: 'relative', marginTop: 10, display: 'inline-block' }}>
          <span
            style={{ fontSize: '15px', fontWeight: 600, letterSpacing: 2, color: '#3e3e3d' }}
            href='https://github.com/denvash'
            target='_blank'
            rel='noreferrer'
            onClick={onClick}>
            CAMERA {isOn ? 'ON' : 'OFF'}
          </span>
          <div style={{ marginTop: 6, height: 2.5, width: '100%', background: '#3e3e3d' }} />
        </div>
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
