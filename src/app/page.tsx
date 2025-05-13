import { CompanySearchBar } from "@/components/company-search-bar"
import { CompanyServiceCard } from "@/components/company-service-card"
import { MainNavigation } from "../components/main-navigation"

export default function Home() {
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
            <CompanyServiceCard
              name="Gobiz Cosec Firm"
              description="Secretarial service firm"
              rating={4.9}
              price={1600}
              completionTime="2 - 3 working days"
              clients={2483}
              logo="/placeholder.svg?height=150&width=150"
              offer="Incorporate your company with us and get 2 FREE CTC copies."
            />
            <CompanyServiceCard
              name="Consistent Net"
              description="Secretarial service firm"
              rating={3.2}
              price={1499}
              completionTime="7+ working days"
              clients={1191}
              logo="/placeholder.svg?height=150&width=150"
              offer="Get 20% off for 1st month of Secretary services"
            />
            <CompanyServiceCard
              name="Sarah Connor"
              description="Licensed Secretary"
              rating={5.0}
              price={1250}
              completionTime="2 - 3 working day"
              clients={3290}
              logo="/placeholder.svg?height=150&width=150"
              offer="With more than 15 years in the industry, your company is in good hands"
              secretary
            />
            <CompanyServiceCard
              name="Exper Services"
              description="Secretarial service firm"
              rating={1.1}
              price={2200}
              completionTime="12-14 working days"
              clients={48}
              logo="/placeholder.svg?height=150&width=150"
              offer="We deliver the best Secretarial Services in Malaysia"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
