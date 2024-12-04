import React from 'react'
import { useTranslation } from 'react-i18next'

import Envelop from '../images/envelop.png'

const Gifts = () => {
  const { t } = useTranslation()

  return (
    <div className="px-4 md:px-10 py-16 lg:py-24 lg relative overflow-hidden" id="gifts">
      <h2 className="text-5xl lg:text-8xl font-great-vibes text-center">{t('gifts')}</h2>
      <div className="max-w-desktop mx-auto pt-10 text-center">
        <p className="pb-4">{t('mainGift')}</p>
        <p className="pb-6">{t('flowers')}</p>
        <img src={Envelop} alt="Envelop" />
      </div>
    </div>
  )
}

export default Gifts
