/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../images/porfile.jpg'
export default function Home() {
    return (
        <div>
        <br/>
            <img src={logo} className='rounded-full w-40 mx-auto'/>
            <p class="text-3xl my-6 text-center dark:text-white">
                    Hi, I'm David 🤘 🐻‍❄️ 
                </p>
                <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                   Software Developer 
                </h2>
        </div>
    )
}
