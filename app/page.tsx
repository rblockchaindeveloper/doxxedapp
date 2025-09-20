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
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-4 font-mono relative overflow-hidden">
      <div className="bg-meme-element">🚀</div>
      <div className="bg-meme-element">💎</div>
      <div className="bg-meme-element">🌙</div>
      <div className="bg-meme-element">⚡</div>
      <div className="bg-meme-element">🔥</div>
      <div className="bg-meme-element">💯</div>

      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-20 pointer-events-none z-0">
        <Image
          src="/doxxed-logo.png"
          alt="Background DOXXED character"
          width={400}
          height={300}
          className="degen-bg-float"
          priority
        />
      </div>

      <div className="w-full max-w-2xl mx-auto text-center space-y-8 relative z-10">
        {/* Logo with hover effect */}
        <div className="mb-8">
          <Image
            src="/doxxed-logo.png"
            alt="DOXXED logo"
            width={300}
            height={200}
            className="mx-auto meme-float logo-hover cursor-pointer"
            priority
          />
          <div className="mt-4 space-y-2">
            <p className="text-xs text-gray-600 italic">*actual photo of dev after rug pull*</p>
            <p className="text-xs text-blue-600 font-bold">100% authentic degen energy ⚡</p>
          </div>
        </div>

        <div className="relative inline-block highlighter-effect">
          <div className="text-black text-base font-black inline-block px-1">
            {"the most transparent coin in crypto"}
          </div>
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
          <div className="button-highlighter-blue">
            <Button
              className="bg-transparent text-white px-6 py-2 rounded font-bold relative z-10"
              onClick={() => window.open("https://twitter.com", "_blank")}
            >
              Twiter
            </Button>
          </div>

          <div className="button-highlighter-lightblue">
            <Button
              className="bg-transparent text-white px-6 py-2 rounded font-bold relative z-10"
              onClick={() => window.open("https://telegram.org", "_blank")}
            >
              Telegram
            </Button>
          </div>

          <div className="button-highlighter-yellow">
            <Button className="bg-transparent text-black px-6 py-2 rounded font-bold relative z-10 meme-glow">
              {"Buy $DOXXED"}
            </Button>
          </div>
        </div>

        {/* Footer disclaimer */}
        <p className="text-gray-600 text-xs mt-8">
          {"We reveal memes, not private info. This is not memecial advice."}
        </p>
      </div>
    </div>
  )
}
