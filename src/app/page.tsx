
"use client"

import CompanySearchBar from "@/components/company-search-bar"
import { CompanyServiceCard } from "@/components/company-service-card"
import { MainNavigation } from "@/components/main-navigation"
import { useCompanyStore } from "@/store/company-store"

export interface CompanyServiceCardProps {

  name: string;

  description: string;

  rating?: number;

  price: number;

  completionTime: string;

  clients?: number;

  logo?: string;

  offer?: string;

  companyType?: string;

  region?: string;

  secretary?: boolean;

}

export default function Home() {
  const filteredCompanies = useCompanyStore((state) => state.filteredServices)
  const services = useCompanyStore((state) => state.services)

  const displayedCompanies = filteredCompanies.length > 0 ? filteredCompanies : services

  // console.log("Filtered companies:", displayedCompanies)
  return (
    <main className="min-h-screen bg-white">
      <MainNavigation />
      <div className="container mx-auto px-4 py-6">
        <CompanySearchBar />

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Incorporate new company</h1>
              <p className="text-gray-600">Over 350 Company Secretaries ready to assist you</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Sort by: </span>
                <div className="flex items-center gap-1 font-medium">
                  Ratings
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
                    className="text-gray-700"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
              <button className="flex items-center gap-1 font-medium">
                Filter
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
                  className="text-gray-700"
                >
                  <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedCompanies.length > 0 ? (
              displayedCompanies.map((company, index) => (
                <CompanyServiceCard
                  key={index}
                  name={company.name}
                  description={company.description}
                  rating={company.rating ?? 0}
                  price={company.price}
                  completionTime={company.completionTime}
                  clients={company.clients ?? 0}
                  logo={company.logo ?? "/placeholder.svg?height=150&width=150"}
                  offer={company.offer ?? ""}
                  companyType={company?.companyType ?? ""}
                  region={company?.region ?? ""}
                  secretary={company.secretary ?? false}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No companies found.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
