import React from 'react'
import { useTranslation } from 'react-i18next'

import Wine from '../images/wine.png'

const Contacts = () => {
  const { t } = useTranslation()

  return (
    <div className="px-4 md:px-10 py-16 lg:py-24 relative overflow-hidden" id="contacts">
      <h2 className="text-5xl lg:text-8xl font-great-vibes text-center">{t('contacts')}</h2>
      <div className="max-w-desktop mx-auto pt-10 text-center">
        <strong>{t('agree')}</strong>
        <p className="pb-6 pt-4">{t('contactsInfo')}</p>
        <img className="mx-auto" src={Wine} alt="wine" />
        <p className="pt-6">{t('seeYa')}</p>
      </div>
    </div>
  )
}

export default Contacts
