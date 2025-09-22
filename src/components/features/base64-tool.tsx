"use client"

import React, { useRef, useState } from 'react'
import { CardContent } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Copy, Download, Upload } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function Base64Tool() {
  const { toast } = useToast()
  const [text, setText] = useState('')
  const [b64, setB64] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const encodeText = () => setB64(btoa(unescape(encodeURIComponent(text))))
  const decodeText = () => {
    try { setText(decodeURIComponent(escape(atob(b64)))) } catch { toast({ title: 'خطا', description: 'Base64 نامعتبر است', variant: 'destructive' }) }
  }

  const onFile = async (f: File) => {
    const buf = await f.arrayBuffer()
    const b = btoa(String.fromCharCode(...new Uint8Array(buf)))
    setB64(`data:${f.type || 'application/octet-stream'};base64,${b}`)
  }

  const download = () => {
    if (!b64.startsWith('data:')) return toast({ title: 'فرمت data: پشتیبانی می‌شود', description: 'برای دانلود فایل، Base64 باید data URL باشد.' })
    const a = document.createElement('a')
    a.href = b64
    a.download = 'file'
    a.click()
  }

  const copy = async (val: string) => { await navigator.clipboard.writeText(val); toast({ title: 'کپی شد' }) }

  return (
    <CardContent className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>متن</Label>
          <Textarea value={text} onChange={(e)=>setText(e.target.value)} className="min-h-[160px]"/>
          <div className="flex gap-2">
            <Button onClick={encodeText}>متن → Base64</Button>
            <Button variant="outline" onClick={()=>copy(text)}><Copy className="w-4 h-4"/></Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Base64</Label>
          <Textarea value={b64} onChange={(e)=>setB64(e.target.value)} className="min-h-[160px] font-mono"/>
          <div className="flex gap-2 flex-wrap">
            <Button onClick={decodeText}>Base64 → متن</Button>
            <Button type="button" variant="outline" onClick={()=>fileInputRef.current?.click()}><Upload className="w-4 h-4 mr-2"/> فایل → Base64</Button>
            <Input ref={fileInputRef} type="file" className="hidden" onChange={(e)=>{ const f=e.target.files?.[0]; if(f) onFile(f) }} />
            <Button type="button" variant="secondary" onClick={download}><Download className="w-4 h-4 mr-2"/>دانلود از data URL</Button>
            <Button variant="outline" onClick={()=>copy(b64)}><Copy className="w-4 h-4"/></Button>
          </div>
        </div>
      </div>
    </CardContent>
  )
}





