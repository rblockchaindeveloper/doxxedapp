"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function DoxxedLanding() {
  const [contractAddress, setContractAddress] = useState("")
  const [doxxedFace, setDoxxedFace] = useState(true)
  const [doxxedDog, setDoxxedDog] = useState(true)
  const [doxxedHouse, setDoxxedHouse] = useState(true)

  const handleCopyContract = () => {
    navigator.clipboard.writeText(contractAddress)
  }

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-4 font-mono">
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="mb-8">
          <Image src="/doxxed-logo.png" alt="DOXXED logo" width={300} height={200} className="mx-auto" priority />
        </div>

        {/* Tagline */}
        <div className="bg-yellow-400 text-black px-4 py-2 inline-block text-sm font-bold rounded">
          {"the most transparent coin in crypto"}
        </div>

        {/* Main heading */}
        <h1 className="text-blue-600 text-2xl md:text-3xl font-bold leading-tight">
          {"Nothing to hide. Everything is doxxed."}
        </h1>

        {/* Subtext */}
        <p className="text-black text-lg">{"websit costed $0 lol — pure degen energy"}</p>

        {/* Contract Address Box */}
        <div className="border-2 border-dashed border-yellow-600 p-8 bg-gray-200 rounded-lg">
          <div className="text-gray-600 text-sm mb-2 uppercase tracking-wide">CONTRACT</div>
          <Input
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            placeholder="PUT_YOUR_CONTRACT_ADDRESS_HERE_BRO"
            className="text-center text-lg font-mono bg-transparent border-none text-black placeholder:text-gray-500 focus:ring-0 focus:outline-none"
          />
          <div className="text-gray-500 text-xs mt-2">{"(copy & paste into explorer)"}</div>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded border">
            <Checkbox
              id="doxxed-face"
              checked={doxxedFace}
              onCheckedChange={setDoxxedFace}
              className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
            />
            <label htmlFor="doxxed-face" className="text-sm font-medium text-black">
              doxxed face ✅
            </label>
          </div>

          <div className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded border">
            <Checkbox
              id="doxxed-dog"
              checked={doxxedDog}
              onCheckedChange={setDoxxedDog}
              className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
            />
            <label htmlFor="doxxed-dog" className="text-sm font-medium text-black">
              doxxed dog ✅
            </label>
          </div>

          <div className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded border">
            <Checkbox
              id="doxxed-house"
              checked={doxxedHouse}
              onCheckedChange={setDoxxedHouse}
              className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
            />
            <label htmlFor="doxxed-house" className="text-sm font-medium text-black">
              doxxed house ✅
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-bold"
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            twitter
          </Button>

          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-bold"
            onClick={() => window.open("https://telegram.org", "_blank")}
          >
            telegram
          </Button>

          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded font-bold">
            {"Buy $DOXXED"}
          </Button>
        </div>

        {/* Footer disclaimer */}
        <p className="text-gray-600 text-xs mt-8">
          {"We memed memes, not private info. This is not financial advice."}
        </p>
      </div>
    </div>
  )
}
