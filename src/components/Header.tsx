import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

const Header = () => {
  const { i18n, t } = useTranslation()
  const LANGUAGES = [
    { code: 'en', label: t('en') },
    { code: 'ru', label: t('ru') },
  ]
  const MENU = ['ourStory', 'celebration', 'gifts', 'dressCode', 'contacts']

  const [, setSearchParams] = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value
    const params = new URLSearchParams(location.search)
    params.set('lang', lang)
    setSearchParams(params.toString())
  }

  const LangSelect = () => (
    <select className="bg-transparent focus:outline-none" defaultValue={i18n.language} onChange={onChangeLang}>
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  )
  return (
    <header className="fixed w-full h-16 flex items-center gap-4 py-4 px-4 lg:px-10 bg-black text-white bg-opacity-40 z-20">
      <div className="w-full max-w-desktop flex justify-between">
        <div className="flex items-center">Andrzej & Anastasiya</div>
        <div className="hidden lg:flex gap-4 items-center">
          {MENU.map((item) => (
            <a key={item} className="hover:opacity-70" href={`#${item}`}>
              {t(item)}
            </a>
          ))}
          <LangSelect />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl lg:hidden focus:outline-none">
            ☰
          </button>
          <ul
            className={`fixed top-0 left-0 w-full h-full bg-gray-800 flex flex-col items-center justify-center space-y-6 transition-transform transform ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:static lg:flex lg:flex-row lg:space-y-0 lg:space-x-6 lg:bg-transparent lg:translate-x-0`}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 left-4 text-white text-3xl lg:hidden focus:outline-none"
            >
              ✕
            </button>
            {MENU.map((item) => (
              <li key={item} onClick={toggleMenu}>
                <a className="hover:opacity-70" href={`#${item}`}>
                  {t(item)}
                </a>
              </li>
            ))}
            <li>
              <LangSelect />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
