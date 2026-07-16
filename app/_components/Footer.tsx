import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
<footer className="bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-7xl space-y-8 px-4 py-11 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-teal-600 dark:text-teal-300">
             <Image src="/nexula_light.svg" alt="Nexula Logo" className="w-35" width={300} height={300} />

      </div>

      <ul className="mt-8 flex justify-start items-center gap-6 sm:mt-0 sm:justify-end">
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
          >
            <span className="sr-only">Facebook</span>

            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
          >
            <span className="sr-only">Instagram</span>

            <Image src="/linkedin-logo-svgrepo-com.svg" width={19} height={19} className="invert-100" alt="" />
          </a>
        </li>


      </ul>
    </div>
  </div>
</footer> )
}

export default Footer