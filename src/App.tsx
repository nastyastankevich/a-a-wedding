import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'
import Main from './Main'
import Spinner from './components/Spinner/Spinner'

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </Suspense>
  )
}

export default App
