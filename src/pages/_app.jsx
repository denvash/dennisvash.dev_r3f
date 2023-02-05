import { useRef, useState } from 'react'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'
import * as THREE from 'three'
import { Leva } from 'leva'

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        {Component?.canvas && Component.canvas(pageProps)}
        <Component {...pageProps} />
        <Leva hidden />
      </Layout>
    </>
  )
}
