import React from 'react'

const SUB_TEXT="Cet affichage est un test de desgne pour la disposition des card div etc...";

const HEAD_TEXT="Plus de 10 000 utilisateur adore utilisé cet affichage";


export const HeaderText = () => {
  return (
    <div className="group flex flex-col w-3/4 md:w-1/3 space-y-6 md:space-y-8 px-6 py-6 rounded-lg justify-start mt-6">
      <h1 className="text-3xl md:w-[360px]  md:text-5xl text-fuchsia-800 font-bold">{HEAD_TEXT}</h1>
      <p className="text-md md:text-lg text-purple-900 font-medium">{SUB_TEXT}</p>
    </div>
  )
}
