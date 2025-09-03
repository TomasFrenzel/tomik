"use client"

import { useState } from "react"
import "./App.css"

const Button = ({ children, className, onClick, ...props }) => (
  <button className={`button ${className || ""}`} onClick={onClick} {...props}>
    {children}
  </button>
)

const VolumeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="m19.07 4.93-1.41 1.41A8.5 8.5 0 0 1 19.07 19.07l1.41 1.41A10.5 10.5 0 0 0 19.07 4.93z"></path>
    <path d="m15.54 8.46-1.41 1.41a4 4 0 0 1 0 4.24l1.41 1.41a6 6 0 0 0 0-8.49z"></path>
  </svg>
)

function App() {
  const [activeButton, setActiveButton] = useState(null)

  const animalSounds = [
    { name: "Slon", sound: "/placeholder.mp3?animal=elephant" },
    { name: "Lev", sound: "/placeholder.mp3?animal=lion" },
    { name: "Kůň", sound: "/placeholder.mp3?animal=horse" },
    { name: "Kráva", sound: "/placeholder.mp3?animal=cow" },
    { name: "Pes", sound: "/placeholder.mp3?animal=dog" },
    { name: "Kočka", sound: "/placeholder.mp3?animal=cat" },
    { name: "Prase", sound: "/placeholder.mp3?animal=pig" },
    { name: "Ovce", sound: "/placeholder.mp3?animal=sheep" },
    { name: "Koza", sound: "/placeholder.mp3?animal=goat" },
    { name: "Kachna", sound: "/placeholder.mp3?animal=duck" },
    { name: "Kohout", sound: "/placeholder.mp3?animal=rooster" },
    { name: "Žába", sound: "/placeholder.mp3?animal=frog" },
    { name: "Pták", sound: "/placeholder.mp3?animal=bird" },
    { name: "Vlk", sound: "/placeholder.mp3?animal=wolf" },
    { name: "Medvěd", sound: "/placeholder.mp3?animal=bear" },
    { name: "Opice", sound: "/placeholder.mp3?animal=monkey" },
  ]

  const handleButtonClick = (index) => {
    setActiveButton(index)

    // Play animal sound
    const audio = new Audio(animalSounds[index].sound)
    audio.volume = 0.7
    audio.play().catch((error) => {
      console.log("Audio playback failed:", error)
    })

    console.log(`${animalSounds[index].name} sound playing`)

    // Reset active button after 2 seconds
    setTimeout(() => {
      setActiveButton(null)
    }, 2000)
  }

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <div className="soundbar-title">
          <h1>SOUNDBAR</h1>
        </div>
      </div>

      {/* Sound Button Grid */}
      <div className="button-grid">
        {Array.from({ length: 16 }, (_, index) => (
          <Button
            key={index}
            className={`sound-button ${activeButton === index ? "active" : ""}`}
            onClick={() => handleButtonClick(index)}
          >
            <VolumeIcon />
            <span className="animal-name">{animalSounds[index].name}</span>
          </Button>
        ))}
      </div>

      {/* Active Button Indicator */}
      {activeButton !== null && (
        <div className="status">
          <p>Hraje: {animalSounds[activeButton].name}</p>
        </div>
      )}
    </div>
  )
}

export default App
