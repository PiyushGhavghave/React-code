import React from 'react';

import profile from '../assets/image.png'

function Card({mydata , hashtag}) {    //destructuring mydata and hashtag

    const {info, btnText = "Default click"} = mydata;  //destructure mydata into-> info and btnText
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 text-black mb-5">
            <img class="w-full" src={profile} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"></div>
                    <p class="text-gray-700 text-base">
                        {info}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                {hashtag.map((tag) => (
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                    ))}
                </div>
                <button class = "p-2 m-4 bg-blue-800 hover:bg-blue-700">{btnText}</button>
        </div>
    )
}

export default Card;