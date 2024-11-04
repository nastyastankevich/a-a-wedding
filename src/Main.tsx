import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'

const App = () => {
  const { i18n } = useTranslation()
  const params = useParams()

  useEffect(() => {
    const lang = params.lang || ''

    i18n.changeLanguage(['en', 'ru'].includes(lang) ? lang : 'ru')
  }, [params])

  return (
    <div className="w-full h-full min-h-screen">
      <Header />
      <Hero />
      <Story />
    </div>
  )
}

export default App
