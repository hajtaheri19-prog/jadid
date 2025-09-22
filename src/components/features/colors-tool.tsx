"use client"

import React, { useMemo, useState } from 'react'
import { CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

function clamp(n: number, min = 0, max = 100) { return Math.min(max, Math.max(min, n)) }

function hexToRgb(hex: string) {
  const m = hex.replace('#','').match(/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i)
  if (!m) return null
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) }
}

function rgbToHex(r: number, g: number, b: number) {
  const v = (n: number) => clamp(Math.round(n), 0, 255).toString(16).padStart(2,'0')
  return `#${v(r)}${v(g)}${v(b)}`
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b)
  let h = 0, s = 0, l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > .5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h *= 60
  }
  return { h: Math.round(h), s: Math.round(s*100), l: Math.round(l*100) }
}

function hslToRgb(h: number, s: number, l: number) {
  s /= 100; l /= 100
  const k = (n: number) => (n + h/30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n)-3, Math.min(9-k(n), 1)))
  return { r: Math.round(255 * f(0)), g: Math.round(255 * f(8)), b: Math.round(255 * f(4)) }
}

export default function ColorsTool() {
  const { toast } = useToast()
  const [hex, setHex] = useState('#6759ff')
  const rgb = useMemo(() => hexToRgb(hex) || { r: 103, g: 89, b: 255 }, [hex])
  const hsl = useMemo(() => rgbToHsl(rgb.r, rgb.g, rgb.b), [rgb])

  const updateFromRgb = (r: number, g: number, b: number) => setHex(rgbToHex(r,g,b))
  const updateFromHsl = (h: number, s: number, l: number) => {
    const { r, g, b } = hslToRgb(h,s,l)
    setHex(rgbToHex(r,g,b))
  }

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    toast({ title: 'کپی شد', description: text })
  }

  return (
    <CardContent className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <Label>HEX</Label>
          <div className="flex gap-2">
            <Input value={hex} onChange={(e) => setHex(e.target.value)} placeholder="#RRGGBB" />
            <Button type="button" variant="outline" onClick={() => copy(hex)}><Copy className="w-4 h-4"/></Button>
          </div>
          <input type="color" value={hex} onChange={(e) => setHex(e.target.value)} className="h-10 w-full rounded-md overflow-hidden cursor-pointer"/>
        </div>

        <div className="space-y-3">
          <Label>RGB</Label>
          <div className="grid grid-cols-3 gap-2">
            <Input type="number" value={rgb.r} onChange={(e)=>updateFromRgb(+e.target.value, rgb.g, rgb.b)} min={0} max={255} />
            <Input type="number" value={rgb.g} onChange={(e)=>updateFromRgb(rgb.r, +e.target.value, rgb.b)} min={0} max={255} />
            <Input type="number" value={rgb.b} onChange={(e)=>updateFromRgb(rgb.r, rgb.g, +e.target.value)} min={0} max={255} />
          </div>
          <div className="flex gap-2">
            <Input readOnly value={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`} />
            <Button type="button" variant="outline" onClick={() => copy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}><Copy className="w-4 h-4"/></Button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label>HSL</Label>
        <div className="grid grid-cols-3 gap-2">
          <Input type="number" value={hsl.h} onChange={(e)=>updateFromHsl(+e.target.value, hsl.s, hsl.l)} min={0} max={360} />
          <Input type="number" value={hsl.s} onChange={(e)=>updateFromHsl(hsl.h, +e.target.value, hsl.l)} min={0} max={100} />
          <Input type="number" value={hsl.l} onChange={(e)=>updateFromHsl(hsl.h, hsl.s, +e.target.value)} min={0} max={100} />
        </div>
        <div className="flex gap-2">
          <Input readOnly value={`hsl(${hsl.h}deg, ${hsl.s}%, ${hsl.l}%)`} />
          <Button type="button" variant="outline" onClick={() => copy(`hsl(${hsl.h}deg, ${hsl.s}%, ${hsl.l}%)`)}><Copy className="w-4 h-4"/></Button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {[0,60,120,180,240,300,30,90,150,210].map((h) => {
          const { r,g,b } = hslToRgb(h, 70, 50)
          const swatch = rgbToHex(r,g,b)
          return (
            <button key={h} className="h-10 rounded-md border" style={{ background: swatch }} onClick={()=>setHex(swatch)} title={`H:${h}`}/>
          )
        })}
      </div>
    </CardContent>
  )
}





