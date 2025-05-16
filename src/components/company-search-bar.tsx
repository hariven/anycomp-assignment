// "use client"

// import React from "react"
// import { useCompanyStore } from "@/store/company-store"

// const CompanySearchBar = () => {
//   const { filters, setFilters, services, setFilteredServices } = useCompanyStore()

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFilters({ ...filters, [name]: value })
//   }

//   const handleSearch = () => {
//     const filtered = services.filter((service) => {
//       const matchesCompanyType =
//         !filters.companyType || service?.companyType.toLowerCase().includes(filters.companyType.toLowerCase())
    
//       const matchesRegion =
//         !filters.region || service.region.toLowerCase().includes(filters.region.toLowerCase())
    
//       // const matchesCompletion =
//       //   !filters.completionDate || service.completionTime.toLowerCase().includes(filters.completionDate.toLowerCase())
    
//         return matchesCompanyType && matchesRegion
//     })
    
//     console.log(filtered, 'filtered')

//     setFilteredServices(filtered)
//   }

//   return (
//     <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-md shadow-sm">
//       <select
//         name="companyType"
//         value={filters.companyType}
//         onChange={handleChange}
//         className="border p-2 rounded"
//       >
//         <option value="">Select Company Type</option>
//         <option value="Private Limited (SDN BHD)">Private Limited (SDN BHD)</option>
//         <option value="Public Limited (BHD)">Public Limited (BHD)</option>
//         <option value="Limited Liability Partnership (LLP)">LLP</option>
//         <option value="Sole Proprietorship">Sole Proprietorship</option>
//       </select>

//       <select
//         name="region"
//         value={filters.region}
//         onChange={handleChange}
//         className="border p-2 rounded"
//       >
//         <option value="">Select Region</option>
//         <option value="Peninsular Malaysia">Peninsular Malaysia</option>
//         <option value="Sabah & Sarawak">East Malaysia (Sabah & Sarawak)</option>
//         <option value="Labuan">Labuan</option>
//         <option value="Langkawi">Langkawi</option>
//       </select>

//       <select
//         name="completionDate"
//         value={filters.completionDate}
//         onChange={handleChange}
//         className="border p-2 rounded"
//       >
//         <option value="">Select Completion Date</option>
//         <option value="17th Feb (3 Days)">17th Feb (3 Days)</option>
//         <option value="20th Feb (6 Days)">20th Feb (6 Days)</option>
//         <option value="24th Feb (10 Days)">24th Feb (10 Days)</option>
//         <option value="1st Mar (15 Days)">1st Mar (15 Days)</option>
//       </select>

//       <button
//         onClick={handleSearch}
//         className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Search
//       </button>
//     </div>
//   )
// }

// export default CompanySearchBar

"use client"

import React from "react"
import { Autocomplete, TextField } from "@mui/material"
import { FaSearch } from "react-icons/fa"
import { useCompanyStore } from "@/store/company-store"

const companyTypeOptions = [
  "Private Limited (SDN BHD)",
  "Limited Liability Partnership (LLP)",
]

const regionOptions = [
  "Peninsular Malaysia",
  "Sabah & Sarawak",
]

const completionDateOptions = [
  "17th Feb (3 Days)",
  "20th Feb (6 Days)",
  "24th Feb (10 Days)",
  "1st Mar (15 Days)",
]

const CompanySearchBar = () => {
  const { filters, setFilters, services, setFilteredServices } = useCompanyStore()

  const handleSearch = () => {
    const filtered = services.filter((service) => {
      const matchesCompanyType =
        !filters.companyType || service?.companyType.toLowerCase().includes(filters.companyType.toLowerCase())

      const matchesRegion =
        !filters.region || service.region.toLowerCase().includes(filters.region.toLowerCase())

      return matchesCompanyType && matchesRegion
    })

    setFilteredServices(filtered)
  }

  const handleAutocompleteChange = (name: string, value: string | null) => {
    setFilters({ ...filters, [name]: value || "" })
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-xl/20">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-2">
        {/* Company Type */}
        <div className="flex-1">
          <Autocomplete
            options={companyTypeOptions}
            value={filters.companyType}
            onChange={(_, newValue) => handleAutocompleteChange("companyType", newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Company Type"
                variant="filled"
                size="small"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  "& .MuiFilledInput-root": {
                    borderRadius: "8px",
                    paddingTop: "10px",
                  },
                }}
              />
            )}
          />
        </div>

        {/* Region */}
        <div className="flex-1">
          <Autocomplete
            options={regionOptions}
            value={filters.region}
            onChange={(_, newValue) => handleAutocompleteChange("region", newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Region"
                variant="filled"
                size="small"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  "& .MuiFilledInput-root": {
                    borderRadius: "8px",
                    paddingTop: "10px",
                  },
                }}
              />
            )}
          />
        </div>

        {/* Completion Date */}
        <div className="flex-1">
          <Autocomplete
            options={completionDateOptions}
            value={filters.completionDate}
            onChange={(_, newValue) => handleAutocompleteChange("completionDate", newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Completion Date"
                variant="filled"
                size="small"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  "& .MuiFilledInput-root": {
                    borderRadius: "8px",
                    paddingTop: "10px",
                  },
                }}
              />
            )}
          />
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <button
            onClick={handleSearch}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#0E2C59] text-white font-medium rounded-full px-6 py-2 shadow-sm hover:bg-[#0b2349] transition"
          >
            <FaSearch className="text-sm" />
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompanySearchBar
