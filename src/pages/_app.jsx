import { useRef } from 'react'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'
import { Leva, useControls } from 'leva'
import Scene from '@/components/canvas/Scene'
import { useSceneStore } from '@/templates/hooks/useSceneStore'
import LoadingScreen from '@/components/dom/LoadingScreen'

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()

  const { isSceneEnabled } = useSceneStore()

  const { isCanvasMounted, isOverlayMounted } = useControls({
    isCanvasMounted: {
      value: true,
      label: 'canvas on',
    },
    isOverlayMounted: {
      value: true,
      label: 'overlay on',
    },
  })

  return (
    <>
      <Header title={pageProps.title} />
      {!isSceneEnabled && <LoadingScreen />}
      <Layout ref={ref}>
        {Component?.canvas && isCanvasMounted && (
          <Scene className='pointer-events-none touch-none' eventSource={ref} eventPrefix='client'>
            <Component.canvas {...pageProps} />
          </Scene>
        )}

        {isOverlayMounted && isSceneEnabled && <Component {...pageProps} />}
      </Layout>
      <Leva collapsed hidden={!isLevaEnabled} />
    </>
  )
}

const isLevaEnabled = process.env.NODE_ENV === 'development'
