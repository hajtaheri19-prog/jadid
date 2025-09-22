"use client"

import * as React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Globe, CalendarClock, FileText, Shield, MessageSquareHeart } from 'lucide-react'

export default function FooterLegal() {
  return (
    <footer className="text-center p-6 text-muted-foreground text-sm font-body space-y-4">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <div className="inline-flex items-center justify-center gap-2">
          <Globe className="w-5 h-5" />
          <span>
            توسعه داده شده توسط <a href="https://www.hosseintaheri.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">حسین طاهری</a>
          </span>
        </div>
        <div className="inline-flex items-center justify-center gap-2">
          <CalendarClock className="w-5 h-5" />
          <span>
            آخرین بروزرسانی: شهریور 1404
          </span>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className="inline-flex items-center justify-center gap-2 cursor-pointer hover:text-foreground">
              <FileText className="w-5 h-5" />
              <span>قوانین و مقررات</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] glass-effect">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">قوانین استفاده از «تبدیلا»</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-right leading-relaxed max-h-[70vh] overflow-y-auto p-1 pr-3">
              <p>به «تبدیلا» خوش آمدید. استفاده از خدمات ما به منزله پذیرش قوانین زیر است:</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">۱. استفاده منصفانه</h4>
                  <p>تمام ابزارها برای استفاده شخصی و قانونی طراحی شده‌اند. استفاده غیرقانونی، سوءاستفاده یا بارگذاری محتوای خلاف مقررات، مجاز نیست.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">۲. حقوق مالکیت فکری</h4>
                  <p>محتوای موجود، شامل کدها، طراحی و داده‌ها، متعلق به «تبدیلا» بوده و هرگونه کپی‌برداری یا انتشار بدون اجازه کتبی، ممنوع است.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">۳. مسئولیت داده‌ها</h4>
                  <p>اطلاعات و نتایج ارائه‌شده توسط ابزارها، جنبه اطلاع‌رسانی دارند. مسئولیت نهایی استفاده از این داده‌ها بر عهده کاربر است.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">۴. تغییرات قوانین</h4>
                  <p>«تبدیلا» حق به‌روزرسانی یا اصلاح این قوانین را بدون اطلاع قبلی برای خود محفوظ می‌دارد. نسخه جدید قوانین بلافاصله پس از انتشار معتبر خواهد بود.</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="inline-flex items-center justify-center gap-2 cursor-pointer hover:text-foreground">
              <Shield className="w-5 h-5" />
              <span>سیاست حفظ حریم خصوصی</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] glass-effect">
            <DialogHeader>
              <DialogTitle className="text-۲xl font-display">🔒 سیاست حفظ حریم خصوصی</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-right leading-relaxed max-h-[70vh] overflow-y-auto p-1 pr-3">
              <p>حفظ حریم خصوصی شما برای ما در «تبدیلا» اهمیت بالایی دارد. این سند نحوه جمع‌آوری و استفاده از اطلاعات شما را توضیح می‌دهد:</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">۱. اطلاعات جمع‌آوری شده</h4>
                  <p>ما هیچ‌گونه اطلاعات شخصی شناسایی‌پذیر (مانند نام، ایمیل و...) را بدون اجازه مستقیم شما جمع‌آوری نمی‌کنیم. برای ابزارهایی مانند خلاصه‌ساز متن، فقط آدرس IP شما به صورت موقت برای جلوگیری از سوءاستفاده (Rate Limiting) ذخیره می‌شود.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">۲. استفاده از کوکی‌ها</h4>
                  <p>«تبدیلا» از کوکی‌ها فقط برای ذخیره تنظیمات ظاهری شما (مانند تم روشن/تاریک) استفاده می‌کند و هیچ اطلاعات شخصی در آن‌ها ذخیره نمی‌شود.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">۳. امنیت داده‌ها</h4>
                  <p>ارتباط شما با سرورهای «تبدیلا» از طریق پروتکل امن SSL انجام می‌شود. ما متعهد به حفاظت از داده‌های شما در برابر دسترسی غیرمجاز هستیم.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">۴. سرویس‌های شخص ثالث</h4>
                  <p>برخی از قابلیت‌های سایت مانند مدل‌های هوش مصنوعی توسط سرویس‌دهندگان معتبر (مانند گوگل) ارائه می‌شوند. داده‌های ارسالی به این سرویس‌ها تابع قوانین حریم خصوصی آن‌ها خواهد بود.</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <a href="mailto:feedback@tabdila.com?subject=انتقادات و پیشنهادات درباره تبدیلا" className="inline-flex items-center justify-center gap-2 cursor-pointer hover:text-foreground">
          <MessageSquareHeart className="w-5 h-5" />
          <span>انتقادات و پیشنهادات</span>
        </a>
      </div>
      <div className="inline-flex items-center justify-center gap-2 pt-2 border-t border-border/50 w-full max-w-lg mx-auto mt-4">
        <p>
          تمام حقوق مادی و معنوی این وبسایت متعلق به مجموعه تبدیلا است.
        </p>
      </div>
    </footer>
  )
}


