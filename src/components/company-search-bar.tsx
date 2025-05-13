"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useCompanyStore } from "@/store/company-store"

export function CompanySearchBar() {
  const { filters, setFilters, searchSuggestions, getSearchSuggestions } = useCompanyStore()

  const [isCompanyTypeOpen, setIsCompanyTypeOpen] = useState(false)
  const [isRegionOpen, setIsRegionOpen] = useState(false)
  const [isDateOpen, setIsDateOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const companyTypeRef = useRef<HTMLDivElement>(null)
  const regionRef = useRef<HTMLDivElement>(null)
  const dateRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  // Filter suggestions based on search term
  const filteredSuggestions =
    searchTerm.trim() === ""
      ? []
      : searchSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))

  // Handle clicks outside the dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (companyTypeRef.current && !companyTypeRef.current.contains(event.target as Node)) {
        setIsCompanyTypeOpen(false)
      }
      if (regionRef.current && !regionRef.current.contains(event.target as Node)) {
        setIsRegionOpen(false)
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setIsDateOpen(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setShowSuggestions(true)
  }

  // Handle suggestion selection
  const handleSelectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion)
    setShowSuggestions(false)
  }

  // Handle company type selection
  const handleSelectCompanyType = (type: string) => {
    setFilters({ companyType: type })
    setIsCompanyTypeOpen(false)
  }

  // Handle region selection
  const handleSelectRegion = (region: string) => {
    setFilters({ region })
    setIsRegionOpen(false)
  }

  // Handle completion date selection
  const handleSelectDate = (date: string) => {
    setFilters({ completionDate: date })
    setIsDateOpen(false)
  }

  return (
    <div className="mt-6 rounded-full border border-gray-200 bg-white p-2 shadow-sm">
      <div className="flex flex-col md:flex-row">
        {/* Company Type Dropdown */}
        <div
          ref={companyTypeRef}
          className="relative flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-4 cursor-pointer"
          onClick={() => setIsCompanyTypeOpen(!isCompanyTypeOpen)}
        >
          <div className="text-sm text-gray-500">Company Type</div>
          <div className="flex items-center justify-between">
            <div className="font-medium">{filters.companyType}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          {isCompanyTypeOpen && (
            <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md bg-white p-2 shadow-lg border border-gray-200">
              {[
                "Private Limited (SDN BHD)",
                "Public Limited (BHD)",
                "Limited Liability Partnership (LLP)",
                "Sole Proprietorship",
              ].map((type) => (
                <div
                  key={type}
                  className="cursor-pointer rounded px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleSelectCompanyType(type)}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Region Dropdown */}
        <div
          ref={regionRef}
          className="relative flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-4 cursor-pointer"
          onClick={() => setIsRegionOpen(!isRegionOpen)}
        >
          <div className="text-sm text-gray-500">Region</div>
          <div className="flex items-center justify-between">
            <div className="font-medium">{filters.region}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          {isRegionOpen && (
            <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md bg-white p-2 shadow-lg border border-gray-200">
              {["Peninsular Malaysia (Mainland)", "East Malaysia (Sabah & Sarawak)", "Labuan", "Langkawi"].map(
                (region) => (
                  <div
                    key={region}
                    className="cursor-pointer rounded px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => handleSelectRegion(region)}
                  >
                    {region}
                  </div>
                ),
              )}
            </div>
          )}
        </div>

        {/* Completion Date Dropdown */}
        <div ref={dateRef} className="relative flex-1 p-4 cursor-pointer" onClick={() => setIsDateOpen(!isDateOpen)}>
          <div className="text-sm text-gray-500">Date of completion</div>
          <div className="flex items-center justify-between">
            <div className="font-medium">{filters.completionDate}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          {isDateOpen && (
            <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md bg-white p-2 shadow-lg border border-gray-200">
              {["17th Feb (3 Days)", "20th Feb (6 Days)", "24th Feb (10 Days)", "1st Mar (15 Days)"].map((date) => (
                <div
                  key={date}
                  className="cursor-pointer rounded px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleSelectDate(date)}
                >
                  {date}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="p-2 relative" ref={searchRef}>
          <button
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="h-full w-full rounded-full bg-blue-900 px-6 py-2 text-white hover:bg-navy-900 flex items-center justify-center"
          >
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
              className="mr-2 h-4 w-4"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            Search
          </button>

          {showSuggestions && (
            <div className="absolute right-0 top-full z-10 mt-2 w-72 rounded-md bg-white p-4 shadow-lg border border-gray-200">
              <div className="mb-4">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-800"
                />
              </div>

              {filteredSuggestions.length > 0 ? (
                <div className="max-h-60 overflow-y-auto">
                  {filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded px-3 py-2 text-sm hover:bg-gray-100"
                      onClick={() => handleSelectSuggestion(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              ) : searchTerm.trim() !== "" ? (
                <div className="py-2 text-sm text-gray-500">No results found</div>
              ) : (
                <div className="py-2 text-sm text-gray-500">Type to search</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
