"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

interface PriceFilterProps {
  onClose: () => void
  onApply: (min: number, max: number) => void
}

export function PriceFilter({ onClose, onApply }: PriceFilterProps) {
  const [minPrice, setMinPrice] = React.useState(4)
  const [maxPrice, setMaxPrice] = React.useState(9500)
  const [sliderValues, setSliderValues] = React.useState([minPrice, maxPrice])

  const handleSliderChange = (values: number[]) => {
    setSliderValues(values)
    setMinPrice(values[0])
    setMaxPrice(values[1])
  }

  const handleInputChange = (value: string, type: "min" | "max") => {
    const numValue = Number.parseInt(value) || 0
    if (type === "min") {
      setMinPrice(numValue)
      setSliderValues([numValue, sliderValues[1]])
    } else {
      setMaxPrice(numValue)
      setSliderValues([sliderValues[0], numValue])
    }
  }

  const handleApply = () => {
    onApply(minPrice, maxPrice)
    onClose()
  }

  return (
    <div className="p-4 bg-white border rounded-lg shadow-lg w-80">
      <div className="space-y-6">
        {/* Price inputs */}
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="min-price" className="text-sm">
              Prezzo da
            </Label>
            <div className="relative">
              <Input
                id="min-price"
                type="number"
                value={minPrice}
                onChange={(e) => handleInputChange(e.target.value, "min")}
                className="pr-6"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2">€</span>
            </div>
          </div>
          <div className="flex-1">
            <Label htmlFor="max-price" className="text-sm">
              Prezzo fino a
            </Label>
            <div className="relative">
              <Input
                id="max-price"
                type="number"
                value={maxPrice}
                onChange={(e) => handleInputChange(e.target.value, "max")}
                className="pr-6"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2">€</span>
            </div>
          </div>
        </div>

        {/* Slider */}
        <SliderPrimitive.Root
          className="relative flex items-center w-full h-5 select-none touch-none"
          value={sliderValues}
          max={9500}
          min={4}
          step={1}
          onValueChange={handleSliderChange}
        >
          <SliderPrimitive.Track className="relative h-1 grow rounded-full bg-gray-200">
            <SliderPrimitive.Range className="absolute h-full rounded-full bg-black" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block w-5 h-5 bg-black rounded-full shadow-lg ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
          <SliderPrimitive.Thumb className="block w-5 h-5 bg-black rounded-full shadow-lg ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>

        {/* Switches */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="offers" className="text-sm font-normal">
              Offerte
            </Label>
            <Switch id="offers" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="free-shipping" className="text-sm font-normal">
                Spedizione gratuita
              </Label>
              <Switch id="free-shipping" />
            </div>
            <p className="text-xs text-gray-500">per ordini a partire da 28,90€</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t">
          <Button variant="ghost" className="flex-1" onClick={onClose}>
            Annulla
          </Button>
          <Button className="flex-1 bg-gray-200 hover:bg-gray-300 text-black" onClick={handleApply}>
            Salva
          </Button>
        </div>
      </div>
    </div>
  )
}

