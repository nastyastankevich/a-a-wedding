import React, { useEffect } from 'react'
import { useParams } from 'react-router'
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
      <Party />
      <Gifts />
      <DressCode />
      <Contacts />
    </div>
  )
}

export default App
