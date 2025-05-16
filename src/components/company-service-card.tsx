import Image from "next/image"
import { Button } from "@mui/material"

interface CompanyServiceCardProps {
  name: string
  description: string
  rating: number
  price: number | string
  completionTime: string
  clients: number
  logo: string
  offer: string
  secretary?: boolean
  companyType?: string
  region?: string
}

export function CompanyServiceCard({
  name,
  description,
  rating,
  price,
  completionTime,
  clients,
  logo,
  offer,
}: CompanyServiceCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="p-6">
        <div className="mb-4 flex justify-center">
          <Image
            src={logo || "/placeholder.svg"}
            alt={name}
            width={150}
            height={150}
            className="h-24 w-auto object-contain"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold">{rating}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
        <p className="mb-4 text-sm">{offer}</p>
        <div className="mb-4 text-sm text-gray-600">Complete in {completionTime}</div>
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xl font-bold">RM {price.toLocaleString()}</div>
          <div className="text-xs text-gray-500">({clients.toLocaleString()} clients)</div>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1 rounded-md border-gray-300">Message</Button>
          <Button className="flex-1 rounded-md bg-blue-800  rounded">
          <span className="bg-blue-900 p-2 rounded-4xl text-white px-4">Incorporate</span>

          </Button>
        </div>
      </div>
    </div>
  )
}
