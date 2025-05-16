import { create } from 'zustand'

export interface CompanyService {
    name: string
    description: string
    completionTime: string
    price: number
    rating: number
    clients: number
    logo: string
    offer: string
    secretary?: boolean
    companyType: string
    region: string
}

interface FilterState {
    companyType: string
    region: string
    completionDate: string
}

interface CompanyState {
    services: CompanyService[]
    filteredServices: CompanyService[]
    filters: FilterState
    searchTerm: string
    setSearchTerm: (term: string) => void
    setFilters: (filters: FilterState) => void
    setServices: (services: CompanyService[]) => void
    setFilteredServices: (services: CompanyService[]) => void
}

export const useCompanyStore = create<CompanyState>((set) => ({
    services: [
        {
            name: "Gobiz Cosec Firm",
            description: "Secretarial service firm",
            rating: 4.9,
            price: 1600,
            completionTime: "2 - 3 working days",
            clients: 2483,
            logo: "/placeholder.svg?height=150&width=150",
            companyType: "Limited Liability Partnership (LLP)",
            region: "Sabah & Sarawak",
            offer: "Incorporate your company with us and get 2 FREE CTC copies.",
        },
        {
            name: "Consistent Net",
            description: "Secretarial service firm",
            rating: 3.2,
            price: 1499,
            completionTime: "7+ working days",
            clients: 1191,
            logo: "/placeholder.svg?height=150&width=150",
            companyType: "Private Limited (SDN BHD)",
            region: "Peninsular Malaysia",
            offer: "Get 20% off for 1st month of Secretary services",
        },
        {
            name: "Sarah Connor",
            description: "Licensed Secretary",
            rating: 5.0,
            price: 1250,
            completionTime: "2 - 3 working day",
            clients: 3290,
            logo: "/placeholder.svg?height=150&width=150",
            companyType: "Private Limited (SDN BHD)",
            region: "Peninsular Malaysia",
            offer: "With more than 15 years in the industry, in good hands",
            secretary: true,
        },
        {
            name: "Exper Services",
            description: "Secretarial service firm",
            rating: 1.1,
            price: 2200,
            completionTime: "12-14 working days",
            clients: 48,
            logo: "/placeholder.svg?height=150&width=150",
            companyType: "Limited Liability Partnership (LLP)",
            region: "Sabah & Sarawak",
            offer: "We deliver the best Secretarial Services in Malaysia",
        },
    ], // original list
    filteredServices: [], // filtered result
    filters: {
        companyType: '',
        region: '',
        completionDate: '',
    },
    searchTerm: "",
    setSearchTerm: (term) => set({ searchTerm: term }),
    setFilters: (filters) => set({ filters }),
    setServices: (services) => set({ services }),
    setFilteredServices: (filteredServices: CompanyService[]) => set({ filteredServices }),
}))
