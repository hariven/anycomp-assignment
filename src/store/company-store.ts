"use client"

import { create } from "zustand"

interface CompanyService {
    id: string
    name: string
    description: string
    rating: number
    price: number
    completionTime: string
    clients: number
    logo: string
    offer: string
    secretary?: boolean
}

interface CompanyFilters {
    companyType: string
    region: string
    completionDate: string
    sortBy: "ratings" | "price" | "completion"
}

interface CompanyState {
    services: CompanyService[]
    filters: CompanyFilters
    loading: boolean
    searchSuggestions: string[]
    setFilters: (filters: Partial<CompanyFilters>) => void
    setSortBy: (sortBy: "ratings" | "price" | "completion") => void
    fetchServices: () => Promise<void>
    getSearchSuggestions: (query: string) => string[]
}

export const useCompanyStore = create<CompanyState>((set, get) => ({
    services: [
        {
            id: "1",
            name: "Gobiz Cosec Firm",
            description: "Secretarial service firm",
            rating: 4.9,
            price: 1600,
            completionTime: "2 - 3 working days",
            clients: 2483,
            logo: "/placeholder.svg?height=150&width=150",
            offer: "Incorporate your company with us and get 2 FREE CTC copies.",
        },
        {
            id: "2",
            name: "Consistent Net",
            description: "Secretarial service firm",
            rating: 3.2,
            price: 1499,
            completionTime: "7+ working days",
            clients: 1191,
            logo: "/placeholder.svg?height=150&width=150",
            offer: "Get 20% off for 1st month of Secretary services",
        },
        {
            id: "3",
            name: "Sarah Connor",
            description: "Licensed Secretary",
            rating: 5.0,
            price: 1250,
            completionTime: "2 - 3 working day",
            clients: 3290,
            logo: "/placeholder.svg?height=150&width=150",
            offer: "With more than 15 years in the industry, your company is in good hands",
            secretary: true,
        },
        {
            id: "4",
            name: "Exper Services",
            description: "Secretarial service firm",
            rating: 1.1,
            price: 2200,
            completionTime: "12-14 working days",
            clients: 48,
            logo: "/placeholder.svg?height=150&width=150",
            offer: "We deliver the best Secretarial Services in Malaysia",
        },
    ],
    filters: {
        companyType: "Private Limited (SDN BHD)",
        region: "Peninsular Malaysia (Mainland)",
        completionDate: "17th Feb (3 Days)",
        sortBy: "ratings",
    },
    loading: false,
    // Search suggestions data
    searchSuggestions: [
        "Company Secretary",
        "Incorporation Services",
        "Private Limited Company",
        "SDN BHD Registration",
        "Business Registration",
        "Corporate Secretary",
        "Company Formation",
        "Annual Return Filing",
        "Tax Registration",
        "Business License",
        "Corporate Compliance",
        "Company Stamp",
        "Share Certificate",
        "Director Appointment",
        "Registered Office",
        "Company Constitution",
        "Memorandum of Association",
        "Articles of Association",
        "Board Resolution",
        "Statutory Compliance",
        "Gobiz Cosec Firm",
        "Consistent Net",
        "Sarah Connor",
        "Exper Services",
        "Kuala Lumpur",
        "Penang",
        "Johor Bahru",
        "Sabah",
        "Sarawak",
    ],
    setFilters: (filters) => {
        set((state) => ({
            filters: {
                ...state.filters,
                ...filters,
            },
        }))
    },
    setSortBy: (sortBy) => {
        set((state) => ({
            filters: {
                ...state.filters,
                sortBy,
            },
        }))
    },
    fetchServices: async () => {
        set({ loading: true })

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // In a real app, you would fetch data from an API
        // const response = await fetch('/api/services');
        // const data = await response.json();
        // set({ services: data, loading: false });

        set({ loading: false })
    },
    getSearchSuggestions: (query) => {
        const { searchSuggestions } = get()
        if (!query) return []

        return searchSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(query.toLowerCase()))
    },
}))
