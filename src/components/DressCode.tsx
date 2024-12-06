import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Dress1 from '../images/dress1.jpg'
import Dress2 from '../images/dress2.jpg'
import Dress3 from '../images/dress3.jpg'
import Dress4 from '../images/dress4.jpg'
import Dress5 from '../images/dress5.jpg'
import Dress6 from '../images/dress6.jpg'
import Dress7 from '../images/dress7.jpg'
import Suit1 from '../images/suit1.jpg'
import Suit2 from '../images/suit2.jpg'
import Suit3 from '../images/suit3.jpg'
import Suit4 from '../images/suit4.jpg'
import Black1 from '../images/black1.jpg'
import Black2 from '../images/black2.jpg'
import Black3 from '../images/black3.jpg'
import Black4 from '../images/black4.jpg'

const DressCode = () => {
  const { t } = useTranslation()
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    centerMode: true,
    variableWidth: true,
    swipeToSlide: true,
    slidesToShow: 1,
  }

  return (
    <div className="pt-16 lg:pt-24 relative overflow-hidden bg-[#fcf0e3]" id="dressCode">
      <h2 className="px-4 md:px-10 text-5xl lg:text-8xl font-great-vibes text-center">{t('dressCode')}</h2>
      <div className="px-4 md:px-10 max-w-desktop mx-auto pt-10 text-center">
        <p className="pb-6">{t('dressCodeInfo')}</p>
        <div className="flex gap-2 sm:gap-6 justify-center">
          <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-black" />
          <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-[#F9E4BC]" />
          <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-white" />
          <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-[#FFD3AC]" />
          <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-[#B8BC86]" />
          <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-[linear-gradient(to_right_bottom,#BF953F,#FCF6BA,#B38728)]" />
        </div>
        <p className="pb-6 pt-8">{t('references')}</p>
      </div>
      <div>
        <Slider {...settings} className="max-h-[400px]">
          <div>
            <img className="h-[400px]" src={Dress1} alt="dress 1" />
          </div>
          <div>
            <img className="h-[400px]" src={Black1} alt="black 1" />
          </div>
          <div>
            <img className="h-[400px]" src={Suit3} alt="suit 3" />
          </div>
          <div>
            <img className="h-[400px]" src={Dress3} alt="dress 3" />
          </div>
          <div>
            <img className="h-[400px]" src={Black2} alt="black 2" />
          </div>
          <div>
            <img className="h-[400px]" src={Dress4} alt="dress 4" />
          </div>
          <div>
            <img className="h-[400px]" src={Dress6} alt="dress 6" />
          </div>
          <div>
            <img className="h-[400px]" src={Suit1} alt="suit 1" />
          </div>
          <div>
            <img className="h-[400px]" src={Black3} alt="black 3" />
          </div>
          <div>
            <img className="h-[400px]" src={Suit2} alt="suit 2" />
          </div>
          <div>
            <img className="h-[400px]" src={Dress5} alt="dress 5" />
          </div>
          <div>
            <img className="h-[400px]" src={Black4} alt="black 4s" />
          </div>
          <div>
            <img className="h-[400px]" src={Dress2} alt="dress 2" />
          </div>
          <div>
            <img className="h-[400px]" src={Dress7} alt="dress 7" />
          </div>
          <div>
            <img className="h-[400px]" src={Suit4} alt="suit 4" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default DressCode
