/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Footer() {
    return (
        <><footer class="flex justify-center px-4 text-gray-100 bg-gray-800">
        <div class="container py-6">
            <h1 class="text-center text-lg font-bold lg:text-2xl">
                Thanks for read, if you need something here is mi git and twitter
            </h1>

            <div class="flex justify-center mt-6">
                <div class="bg-white rounded-lg">
                </div>
            </div>

            <hr class="h-px mt-6 bg-gray-700 border-none"></hr>

            <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                <div>
                    <a href="#" class="text-xl font-bold">Arzoid</a>
                </div>
                <div class="flex mt-4 md:m-0">
                    <div class="-mx-4">
                      <a href="#Home" class="px-4 text-sm">Home</a>
                      <a href="#resume" class="px-4 text-sm">Resume</a>
                      <a href="#education" class="px-4 text-sm">Education</a>
                      <a href="https://github.com/Arzoid29" class="px-4 text-sm">Git</a>
                      <a href="https://twitter.com/Arzoidss" class="px-4 text-sm">Twitter</a>
                  	</div>
                </div>
            </div>
        </div>
    </footer></>
    )
}
