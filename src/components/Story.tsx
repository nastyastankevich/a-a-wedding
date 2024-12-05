import React from 'react'
import { useTranslation } from 'react-i18next'

import MatchImg from '../images/match.jpg'
import ProposalImg from '../images/proposal.jpg'
import WeddingImg from '../images/wedding.jpg'
import DecorImg from '../images/green-decor.png'
import ArchImg from '../images/arch.jpg'

const Story = () => {
  const { t } = useTranslation()

  return (
    <div className="px-4 md:px-10 py-16 lg:pt-24 lg:pb-40 relative overflow-hidden" id="ourStory">
      <h2 className="text-5xl lg:text-8xl font-great-vibes text-center">{t('ourStory')}</h2>
      <div className="absolute top-40 -left-[600px] rotate-[35deg] opacity-80">
        <img src={DecorImg} alt="decor"></img>
      </div>
      <div className="absolute top-[40%] -right-[400px] -rotate-[15deg] opacity-70">
        <img src={DecorImg} alt="decor"></img>
      </div>
      <div className="max-w-desktop mx-auto grid grid-cols-1 lg:grid-cols-2 pt-8 z-10">
        {/*FIRST*/}
        <div className="lg:border-r border-emerald-700 lg:mt-10 pb-4 lg:pr-8 text-center lg:text-right relative flex flex-col items-center lg:items-end">
          <p>11.08.2022</p>
          <h3 className="text-2xl md:text-3xl text-stone-900 font-bold">This is a match!</h3>
          <p className="italic pt-1 max-w-[80%] lg:max-w-[70%] text-center lg:text-right">
            {t('story1')}
            <br />
            {t('story2')}
          </p>
          <div className="hidden lg:block absolute z-10 top-0 -right-4 rounded-full w-8 h-8 bg-white border-2 border-emerald-700 p-1">
            <div className="w-full h-full bg-emerald-700 rounded-full animate-ping" />
            <div className="w-5 h-5 absolute top-1 bg-emerald-700 rounded-full" />
          </div>
        </div>
        <div className="lg:border-l border-emerald-700 mt-5 lg:mt-10 pb-4 relative">
          <div className="m-auto lg:m-0 shadow-2xl bg-white lg:absolute rotate-12 w-64 lg:w-72 -top-6 left-24 p-4">
            <img src={MatchImg} alt="match"></img>
          </div>
        </div>
        {/*SECOND*/}
        <div className="lg:block hidden border-r border-emerald-700 pt-32 pb-4 relative">
          <div className="shadow-2xl bg-white absolute -rotate-12 w-72 p-4 top-4 right-24">
            <img src={ProposalImg} alt="proposal"></img>
          </div>
        </div>
        <div className="lg:border-l border-emerald-700 pt-12 lg:pt-32 pb-4 lg:pl-8 relative flex flex-col text-center lg:text-left items-center lg:items-start">
          <p>11.08.2024</p>
          <h3 className="text-2xl md:text-3xl text-stone-900 font-bold">She said YES!</h3>
          <p className="italic pt-1 max-w-[80%] lg:max-w-[70%]">
            {t('story3')}
            <br />
            {t('story4')}
          </p>
          <div className="hidden lg:block absolute z-10 top-32 -left-4 rounded-full w-8 h-8 bg-white border-2 border-emerald-700 p-1">
            <div className="w-full h-full bg-emerald-700 rounded-full animate-ping" />
            <div className="w-5 h-5 absolute top-1 bg-emerald-700 rounded-full" />
          </div>
        </div>
        <div className="lg:hidden py-4 m-auto lg:m-0">
          <div className="shadow-2xl bg-white -rotate-12 w-64 p-4">
            <img src={ProposalImg} alt="proposal"></img>
          </div>
        </div>
        {/*THIRD*/}
        <div className="lg:border-r border-emerald-700 py-12 lg:py-32 lg:pr-8 text-center lg:text-right relative flex flex-col items-center lg:items-end">
          <p>26.10.2024</p>
          <h3 className="text-2xl md:text-3xl text-stone-900 font-bold">{t('story5')}</h3>
          <p className="italic pt-1 max-w-[80%] lg:max-w-[70%]">
            {t('story6')}
            <br />
            {t('story7')}
          </p>
          <div className="hidden lg:block absolute z-10 top-32 -right-4 rounded-full w-8 h-8 bg-white border-2 border-emerald-700 p-1">
            <div className="w-full h-full bg-emerald-700 rounded-full animate-ping" />
            <div className="w-5 h-5 absolute top-1 bg-emerald-700 rounded-full" />
          </div>
          <div className="hidden lg:block absolute z-10 -bottom-8 -right-4 rounded-full w-8 h-8 bg-white border-2 border-emerald-700 p-1">
            <div className="w-full h-full bg-emerald-700 rounded-full animate-ping" />
            <div className="w-5 h-5 absolute top-1 bg-emerald-700 rounded-full" />
          </div>
        </div>
        <div className="lg:border-l border-emerald-700 pb-12 lg:py-32 relative">
          <div className="shadow-2xl bg-white lg:absolute rotate-[20deg] w-64 lg:w-72 top-8 left-24 p-4 m-auto lg:m-0">
            <img src={WeddingImg} alt="wedding"></img>
          </div>
        </div>
        {/*FOURTH*/}
        <div className="hidden lg:block pb-4 relative">
          <div className="shadow-2xl bg-white absolute -rotate-[10deg] w-72 p-4 -top-14 right-24">
            <img src={ArchImg} alt="arch"></img>
          </div>
        </div>
        <div className="pt-6 lg:pt-0 pb-4 lg:pl-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p>31.05.2025</p>
          <h3 className="text-2xl md:text-3xl text-stone-900 font-bold">{t('story8')}</h3>
          <p className="italic pt-1 max-w-[80%] lg:max-w-[70%]">
            {t('story9')}
            <br />
            {t('story10')}
          </p>
        </div>
        <div className="lg:hidden pt-4 relative">
          <div className="shadow-2xl bg-white -rotate-[10deg] w-64 p-4 -top-14 right-24 m-auto">
            <img src={ArchImg} alt="arch"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
