"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function MainNavigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const handleMenuHover = (menu: string) => {
    setActiveMenu(menu)
  }

  const handleMenuLeave = () => {
    setActiveMenu(null)
  }

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="ANYCOMP Logo"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold uppercase text-navy-900">ANYCOMP</span>
            </Link>

            <nav className="hidden md:flex space-x-1">
              <div className="relative" onMouseEnter={() => handleMenuHover("manage")} onMouseLeave={handleMenuLeave}>
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
                  Manage company
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {activeMenu === "manage" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md bg-white p-2 shadow-lg">
                    <Link href="#" className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      View Companies
                    </Link>
                    <Link href="#" className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Manage Directors
                    </Link>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMenuHover("secretary")}
                onMouseLeave={handleMenuLeave}
              >
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
                  Company Secretary
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {activeMenu === "secretary" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md bg-white p-2 shadow-lg">
                    <Link href="#" className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Find Secretary
                    </Link>
                    <Link href="#" className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Secretary Services
                    </Link>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMenuHover("incorporate")}
                onMouseLeave={handleMenuLeave}
              >
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
                  Incorporate Company
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {activeMenu === "incorporate" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md bg-white p-2 shadow-lg">
                    <Link href="#" className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      New Company
                    </Link>
                    <Link href="#" className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Company Types
                    </Link>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMenuHover("documents")}
                onMouseLeave={handleMenuLeave}
              >
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
                  Sign Documents
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {activeMenu === "documents" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md bg-white p-2 shadow-lg">
                    <Link href="#" className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Pending Documents
                    </Link>
                    <Link href="#" className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Document History
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 rounded-full border border-gray-200 px-2 py-1">
            <button className="text-gray-700 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="User Profile"
                width={40}
                height={40}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm font-medium">User Name</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
