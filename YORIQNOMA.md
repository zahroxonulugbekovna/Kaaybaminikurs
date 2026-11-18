# Mini kurs saytini Netlify'ga joylash

Bu sayt asosiy KAAYBA sayti bilan bir xil usulda ishlaydi. To'liq qadamlar: `kaayba-sayt/YORIQNOMA-NETLIFY.md`. Qisqacha:

1. GitHub'da yangi repo oching (masalan `kaayba-mini-kurs`) va shu zip ichidagi hamma narsani yuklang (`index.html`, `img/`, `netlify.toml`, `netlify/functions/lead.js`).
2. Netlify → **Add new project → Import from GitHub** → shu repo → **Deploy**.
3. **Environment variables** ga asosiy saytdagi qiymatlarni kiriting (arizalar o'sha guruh va jadvalga tushadi):
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `SHEETS_WEBHOOK_URL` (ixtiyoriy)
   So'ng **Trigger deploy**.
4. Telegramdagi arizada "Yangi ariza — MINI KURS sayti", tarif va UTM ko'rinadi. Sheets'da lid asosiy jadvalning alohida **"Mini kurs"** varag'iga tushadi (Tarif, Patok, UTM ustunlari bilan).

## Google Sheets "Mini kurs" varag'ini ulash (bir marta)
1. Asosiy KAAYBA lidlar jadvalini oching -> Kengaytmalar -> Apps Script.
2. Eski kodni o'chirib, `google-sheets-apps-script.js` faylidagi kodni qo'ying va saqlang.
3. Deploy -> Manage deployments -> qalam belgisi -> Version: **New version** -> Deploy. (Yangi deploy ochmang: manzil o'zgarmasligi kerak.)
4. Mini kurs Netlify saytida `SHEETS_WEBHOOK_URL` ga asosiy saytdagi bilan bir xil manzilni qo'ying va saytni qayta deploy qiling.

## Meta Pixel
`index.html` oxirida `pixelId: ""` qatoriga Pixel ID ni yozing. Hodisalar: PageView, ViewContent (tariflar bloki), InitiateCheckout ("Narxini bilish" tugmasi), Lead (ariza yuborildi).

## Reklama havolasi
Reklamada UTM bilan bering, masalan: `...netlify.app/?utm_source=instagram&utm_campaign=mini_kurs&utm_content=reels1`. UTM arizaga yoziladi, qaysi kreativ lid berganini ko'rasiz.
