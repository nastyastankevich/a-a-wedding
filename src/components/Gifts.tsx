import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Envelop from '../images/envelop.png'
import { useSearchParams } from 'react-router-dom'

const Gifts = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [hideInfo, setHideInfo] = useState(true)

  useEffect(() => {
    setHideInfo(searchParams.get('v') === 'part')
  }, [searchParams])

  return (
    <div className="px-4 md:px-10 py-16 lg:py-24 lg relative overflow-hidden" id="gifts">
      <h2 className="text-5xl lg:text-8xl font-great-vibes text-center">{t('gifts')}</h2>
      <div className="max-w-desktop mx-auto pt-10 text-center">
        <p className="pb-6">{t('mainGift')}</p>
        <img src={Envelop} alt="Envelop" className="w-3/4 mx-auto" />
        {!hideInfo && <p className="pt-6">{t('flowers')}</p>}
      </div>
    </div>
  )
}

export default Gifts
