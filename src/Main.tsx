import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Party from './components/Party'
import Gifts from './components/Gifts'
import DressCode from './components/DressCode'
import Contacts from './components/Contacts'

const App = () => {
  const { i18n } = useTranslation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const lang = searchParams.get('lang') || ''
    console.log(lang)
    i18n.changeLanguage(['en', 'ru'].includes(lang) ? lang : 'ru')
  }, [searchParams])

  return (
    <div className="w-full h-full min-h-screen md:text-2xl">
      <Header />
      <Hero />
      <Story />
      <Party />
      <Gifts />
      <DressCode />
      <Contacts />
    </div>
  )
}

export default App
