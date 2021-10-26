import { AcademicCapIcon} from '@heroicons/react/outline';


export default function PerfilSection() {
   return (
      <div className="bg-white shadow-2xl overflow-hidden sm:rounded-lg max-w-3xl  mx-auto border-blue-600 border-4 mt-14 flex ">
         <div className="px-4 py-5 sm:px-6 ">
            <AcademicCapIcon 
               className="rounded-full w-40 mx-auto  text-blue-600 "
            />
            <div className="space-x-8 flex justify-center ">
               <p className="bg-gray-50  text-2xl  hover:text-blue-600 font-semibold capitalize ">
               Academic file
               </p>
            </div>
         </div>
         <div className="border-t border-gray-200 ">
            <dl>
               <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6  ">
                  <dt className="text-md font-medium text-gray-500">
                     CEMAS
                  </dt>

                  <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:-span-2">
                     Develop And administrate Software (High School tilte)
                  </dd>
                  <div className="ml-4 flex-shrink-0 ">
                     <p className="bg-gray-50  pl-3 ml-auto hover:opacity-50">
                        2016-2020
                     </p>
                  </div>
               </div>
               <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-md font-medium text-gray-500">
                  Cincinnatus Institute of Craftsmanship
                  </dt>
                  <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:-span-2">
                     Software Development Training
                  </dd>
                  <div className="ml-4 flex-shrink-0">
                     <button className="bg-gray-50  pl-3 ml-auto hover:opacity-50">
                        2019-Now
                     </button>
                  </div>
               </div>
               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-md font-medium text-gray-500">
                        Universidad abierta para adultos (Uapa)
                  </dt>
                  <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:-span-2">
                     Software Engineer
                  </dd>
                  <div className="ml-4 flex-shrink-0">
                     <button className="bg-gray-50  pl-3 ml-auto hover:opacity-50">
                        2021-Now
                     </button>
                  </div>
               </div>
               <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-md font-medium text-gray-500">
                     Platzi
                  </dt>
                  <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:-span-2">
                     Some Courses
                  </dd>
                  <div className="ml-4 flex-shrink-0">
                     <button className="bg-gray-50  pl-3 ml-auto hover:opacity-50">
                        2021-now
                     </button>
                  </div>
               </div>
               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-md font-medium text-gray-500">
                     Udemy
                  </dt>
                  <dd className="mt-1 text-mdtext-gray-900 sm:mt-0 sm:-span-2">
                     Some Courses
                  </dd>
                  <div className="ml-4 flex-shrink-0">
                     <button className="bg-gray-50  pl-3 ml-auto hover:opacity-50">
                        2019-Now
                     </button>
                  </div>
               </div>
            </dl>
         </div>
      </div>
   );
}
