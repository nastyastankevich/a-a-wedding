import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

import HeroImage from '../images/hero.jpg'
import { useCountdown } from '../hooks/countdown'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  const [days, hours, mins, secs] = useCountdown(new Date('2025-05-31T17:00:00'))

  return (
    <div className="h-screen relative">
      <ParallaxBanner
        layers={[{ image: HeroImage, speed: -20 }]}
        className="aspect-[2/1] h-full flex items-center"
      ></ParallaxBanner>
      <div className="absolute inset-0 px-4 md:px-10 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-euphoria text-center text-white">Andrzej & Anastasiya</h1>
        <div className="text-white text-2xl md:text-3xl flex gap-2">
          <div className="flex flex-col justify-center items-center">
            <div>{days}</div>
            <div className="text-sm">{t('days')}</div>
          </div>
          <div>:</div>
          <div className="flex flex-col justify-center items-center">
            <div>{hours > 9 ? hours : `0${hours}`}</div>
            <div className="text-sm">{t('hours')}</div>
          </div>
          <div>:</div>
          <div className="flex flex-col justify-center items-center">
            <div>{mins > 9 ? mins : `0${mins}`}</div>
            <div className="text-sm">{t('mins')}</div>
          </div>
          <div>:</div>
          <div className="flex flex-col justify-center items-center">
            <div>{secs > 9 ? secs : `0${secs}`}</div>
            <div className="text-sm">{t('secs')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
