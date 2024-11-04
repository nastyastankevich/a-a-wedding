import React from 'react'
import { useTranslation } from 'react-i18next'

// import MatchImg from '../images/'
import ProposalImg from '../images/proposal.jpg'
import TapeImg from '../images/tape.jpeg'

const Story = () => {
  const { t } = useTranslation()

  return (
    <div className="px-4 md:px-10 py-16" id="ourStory">
      <h2 className="text-8xl font-great-vibes text-center">{t('ourStory')}</h2>
      <div className="grid grid-cols-2 pt-8">
        {/*FIRST*/}
        <div className="border-r border-emerald-700 mt-10 pb-4 pr-8 text-right relative flex flex-col items-end z-10">
          <p>11.08.2022</p>
          <h3 className="text-2xl text-stone-900 font-bold">This is a match!</h3>
          <p className="italic pt-1 max-w-[80%] lg:max-w-[66%]">
            Если вы не верите в онлайн знакомства, то предлагаем пересмотреть свое отношение.
            <br />
            Имеено благодаря Tinder мы нашли друг друга!
          </p>
          <div className="absolute top-0 -right-4 rounded-full w-8 h-8 bg-white border-2 border-emerald-700 p-1">
            <div className="w-full h-full bg-emerald-700 rounded-full animate-ping" />
            <div className="w-5 h-5 absolute top-1 bg-emerald-700 rounded-full" />
          </div>
        </div>
        <div className="border-l border-emerald-700 mt-10 pb-4 relative">
          <img src={ProposalImg} alt="match" className="shadow-xl absolute rotate-12 w-64 top-0 left-24"></img>
        </div>
        {/*SECOND*/}
        <div className="border-r border-emerald-700 pt-20 pb-4 relative">
          <img src={ProposalImg} alt="proposal" className="shadow-xl absolute -rotate-12 w-64 top-0 right-24"></img>
          <img src={TapeImg} alt="pin" className="w-28 absolute right-[94px] -top-8 opacity-50" />
          <img src={TapeImg} alt="pin" className="w-28 absolute -rotate-[65deg] right-[300px] top-3 opacity-50" />
          <img
            src={TapeImg}
            alt="pin"
            className="w-28 absolute rotate-[100deg] right-[32px] -bottom-[28px] opacity-50"
          />
          <img
            src={TapeImg}
            alt="pin"
            className="w-28 absolute rotate-[12deg] right-[250px] -bottom-[74px] opacity-50"
          />
        </div>
        <div className="border-l border-emerald-700 pt-20 pb-4 pl-8 relative z-10">
          <p>11.08.2024</p>
          <h3 className="text-2xl text-stone-900 font-bold">She said YES!</h3>
          <p className="italic pt-1 max-w-[80%] lg:max-w-[66%]">
            Столько слез радости еще никто не видел!
            <br />
            Самое романтичное предложение, о котором только можно мечтать...
          </p>
          <div className="absolute top-20 -left-4 rounded-full w-8 h-8 bg-white border-2 border-emerald-700 p-1">
            <div className="w-full h-full bg-emerald-700 rounded-full animate-ping" />
            <div className="w-5 h-5 absolute top-1 bg-emerald-700 rounded-full" />
          </div>
        </div>
        {/*THIRD*/}
        <div className="border-r border-emerald-700 pt-20 pb-24 pr-8 text-right relative flex flex-col items-end z-10">
          <p>26.10.2024</p>
          <h3 className="text-2xl text-stone-900 font-bold">Свадебная церемония</h3>
          <p className="italic pt-1 max-w-[80%] lg:max-w-[66%]">
            День, когда оба сказали ДА!
            <br />
            День, когда начала писаться история новой семьи...
          </p>
          <div className="absolute top-20 -right-4 rounded-full w-8 h-8 bg-white border-2 border-emerald-700 p-1">
            <div className="w-full h-full bg-emerald-700 rounded-full animate-ping" />
            <div className="w-5 h-5 absolute top-1 bg-emerald-700 rounded-full" />
          </div>
          <div className="absolute -bottom-8 -right-4 rounded-full w-8 h-8 bg-white border-2 border-emerald-700 p-1">
            <div className="w-full h-full bg-emerald-700 rounded-full animate-ping" />
            <div className="w-5 h-5 absolute top-1 bg-emerald-700 rounded-full" />
          </div>
        </div>
        <div className="border-l border-emerald-700 pt-20 pb-24"></div>
        {/*FOURTH*/}
        <div className="pb-4"></div>
        <div className="pb-4 pl-8 z-10">
          <p>31.05.2025</p>
          <h3 className="text-2xl text-stone-900 font-bold">Свадебная вечеринка</h3>
          <p className="italic pt-1 max-w-[80%] lg:max-w-[66%]">
            День в куруг самых родных и близких!
            <br />
            Хотим разделить это событие с самыми важными людьми.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Story
