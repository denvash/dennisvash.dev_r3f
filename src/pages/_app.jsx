import { useRef } from 'react'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'
import { Leva, useControls } from 'leva'
import Scene from '@/components/canvas/Scene'

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()

  const { isCanvasMounted } = useControls({
    isCanvasMounted: {
      value: true,
      label: 'canvas on',
    },
  })

  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        {isCanvasMounted && Component?.canvas && (
          <Scene
            className='pointer-events-none touch-none transition-opacity ease-in duration-1000'
            eventSource={ref}
            eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Scene>
        )}
        <Component {...pageProps} />
      </Layout>
      <Leva collapsed hidden={!isLevaEnabled} />
    </>
  )
}

const isLevaEnabled = process.env.NODE_ENV === 'development'
