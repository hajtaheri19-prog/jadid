"use client"

import React, { useRef, useState } from 'react'
import { CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { FileText, Image as ImageIcon, FileUp, Wand2, Hammer } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function PdfTools() {
  const { toast } = useToast()
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [imgFile, setImgFile] = useState<File | null>(null)
  const pdfRef = useRef<HTMLInputElement>(null)
  const imgRef = useRef<HTMLInputElement>(null)

  const notImplemented = (title: string) => toast({ title, description: 'این قابلیت به‌زودی با سرویس سمت‌سرور اضافه می‌شود.' })

  return (
    <CardContent className="space-y-6">
      <Alert>
        <Hammer className="h-4 w-4" />
        <AlertTitle>در حال توسعه</AlertTitle>
        <AlertDescription>تبدیل PDF↔Word/عکس و OCR فارسی نیاز به پردازش سمت‌سرور دارد؛ این ابزار فعلاً اسکلت کلاینتی و UX را فراهم می‌کند.</AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label>PDF ↔ Word</Label>
          <div className="flex gap-2">
            <Button onClick={()=>pdfRef.current?.click()} variant="secondary"><FileUp className="w-4 h-4 ml-2"/>انتخاب PDF</Button>
            <Input ref={pdfRef} type="file" accept="application/pdf" className="hidden" onChange={(e)=>setPdfFile(e.target.files?.[0]||null)} />
            <Button onClick={()=>notImplemented('PDF → Word')} disabled={!pdfFile}>PDF → Word</Button>
            <Button onClick={()=>notImplemented('Word → PDF')}>Word → PDF</Button>
          </div>
          {pdfFile && <p className="text-xs text-muted-foreground">فایل انتخاب‌شده: {pdfFile.name}</p>}
        </div>

        <div className="space-y-3">
          <Label>PDF ↔ Image</Label>
          <div className="flex gap-2 flex-wrap">
            <Button onClick={()=>pdfRef.current?.click()} variant="secondary"><FileText className="w-4 h-4 ml-2"/>انتخاب PDF</Button>
            <Button onClick={()=>notImplemented('PDF → Image')} disabled={!pdfFile}>PDF → Image</Button>
            <Button onClick={()=>imgRef.current?.click()} variant="secondary"><ImageIcon className="w-4 h-4 ml-2"/>انتخاب تصویر</Button>
            <Input ref={imgRef} type="file" accept="image/*" className="hidden" onChange={(e)=>setImgFile(e.target.files?.[0]||null)} />
            <Button onClick={()=>notImplemented('Image → PDF')} disabled={!imgFile}>Image → PDF</Button>
          </div>
          {imgFile && <p className="text-xs text-muted-foreground">تصویر انتخاب‌شده: {imgFile.name}</p>}
        </div>
      </div>

      <div className="space-y-3">
        <Label>استخراج متن (OCR فارسی)</Label>
        <div className="flex gap-2 flex-wrap">
          <Button onClick={()=>imgRef.current?.click()} variant="secondary"><Wand2 className="w-4 h-4 ml-2"/>انتخاب تصویر</Button>
          <Button onClick={()=>pdfRef.current?.click()} variant="secondary"><FileText className="w-4 h-4 ml-2"/>انتخاب PDF</Button>
          <Button onClick={()=>notImplemented('OCR (fa)')} disabled={!imgFile && !pdfFile}>استخراج متن</Button>
        </div>
      </div>
    </CardContent>
  )
}


