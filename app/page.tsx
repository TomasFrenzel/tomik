"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"

export default function SoundbarPage() {
  const [activeButton, setActiveButton] = useState<number | null>(null)

  const handleButtonClick = (index: number) => {
    setActiveButton(index)
    // Add sound logic here
    console.log(`Sound button ${index + 1} clicked`)
  }

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col items-center justify-center max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="bg-lime-300 px-12 py-6 rounded-3xl shadow-lg">
          <h1 className="text-6xl font-bold text-black tracking-wider">SOUNDBAR</h1>
        </div>
      </div>

      {/* Sound Button Grid */}
      <div className="grid grid-cols-4 gap-6 w-full max-w-4xl">
        {Array.from({ length: 16 }, (_, index) => (
          <Button
            key={index}
            variant="secondary"
            size="lg"
            className={`
              w-40 h-32 bg-gray-300 hover:bg-gray-400 
              transition-colors duration-200 rounded-xl shadow-md
              touch-manipulation active:scale-95
              ${activeButton === index ? "bg-gray-400 ring-4 ring-lime-400 shadow-lg" : ""}
            `}
            onClick={() => handleButtonClick(index)}
          >
            <Volume2 className="w-12 h-12 text-black" />
          </Button>
        ))}
      </div>

      {/* Active Button Indicator */}
      {activeButton !== null && (
        <div className="mt-8 text-center">
          <p className="text-2xl text-muted-foreground font-medium">Playing sound {activeButton + 1}</p>
        </div>
      )}
    </div>
  )
}
