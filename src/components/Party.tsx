import React from 'react'
import { useTranslation } from 'react-i18next'

import SilvaImg from '../images/royal-silva.png'
import Venzel from '../images/venzel.jpg'

const Party = () => {
  const { t } = useTranslation()

  return (
    <div className="pt-16 lg:pt-24 relative overflow-hidden bg-[#fcf0e3]" id="celebration">
      <h2 className="px-4 md:px-10 text-5xl lg:text-8xl font-great-vibes text-center">{t('celebration')}</h2>
      <img
        src={SilvaImg}
        alt="royal-silva"
        className=" absolute h-full object-cover top-0 w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1))]"
      />
      <p className="px-4 md:px-10 text-center text-2xl">{t('partyDate')}</p>
      <div className="gap-6 relative">
        <div className="z-10 relative max-w-desktop w-[90%] md:w-3/4 lg:w-1/2 mx-auto flex items-center text-center justify-center md:px-10 pt-10 pb-16 lg:pb-24 md:pt-16">
          <div className="bg-white shadow-2xl py-10 px-6">
            <img src={Venzel} alt="venzel" className="mx-auto w-52 pb-4" />
            <p className="pb-4">{t('welcome1')}</p>
            <p className="pb-4">{t('welcome2')}</p>
            <p className="px-4 md:px-10 pb-6 font-bold text-center">{t('partyDate')}</p>
            <p className="text-4xl font-great-vibes">{t('location')}</p>
            <a href="https://maps.app.goo.gl/GCNGLwmFxMhSHnGCA" className="underline text-sm md:text-xl">
              {t('address')}
            </a>
            <p className="pt-6">{t('arrivingTime')}</p>
            <p>15:30 - 16:30</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Party
