# ⚽ لعبة نجوم الكرة

لعبة أسئلة كرة قدم جماعية بالعربي، بتتلعب على موبايل واحد بين أصحابك:

- **مين اللاعب؟** — تخمّن اللاعب من التلميحات.
- **بنك النقط** — تحدّي بين فريقين: تبنّك النقط ولا تخاطر.
- **السلّم الكبير** — اطلع السلّم بنقط أمان ورهان.
- **مين الدخيل؟**

اللعبة شغالة **أوفلاين** بعد أول فتح، وبتتثبّت كتطبيق (PWA) على أندرويد وآيفون.

## جرّبها
https://mvdu12.github.io/ball/

افتحها مرة وإنت متصل بالنت، وبعدها اعمل **Add to Home Screen**:
- **iPhone (Safari):** زرار المشاركة ← Add to Home Screen.
- **Android (Chrome):** القايمة ⋮ ← Install app / Add to Home screen.

## هيكل المشروع
| الملف | الوظيفة |
|---|---|
| `index.html` | الصفحة الرئيسية وتحميل الملفات |
| `style.css`, `mobile.css`, `fonts.css` | الشكل، تظبيطات الموبايل، الخطوط المحلية |
| `app.js`, `bank.js`, `ladder.js`, `intruder.js` | منطق اللعبة وكل مود |
| `players-data.js`, `clubs-data.js`, `competitions-data.js`, `records-scorers-data.js` | بيانات اللعبة |
| `manifest.json`, `sw.js` | إعدادات التطبيق والعمل أوفلاين |
| `fonts/`, `icons/` | الخطوط والأيقونات |

## تحديث البيانات
بعد أي تعديل في أي ملف، زوّد `VERSION` في أول `sw.js` (مثلًا `v1` ← `v2`) عشان اللاعبين ياخدوا النسخة الجديدة.

## تحويلها لتطبيق متجر (اختياري)
بالـ [Capacitor](https://capacitorjs.com/): حط الملفات في فولدر `www` ثم
```bash
npm i @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
npx cap init "نجوم الكرة" com.mvdu12.nogoomkora --web-dir=www
npx cap add android && npx cap add ios
npx cap sync
```

## الخصوصية
اللعبة مبتجمعش أي بيانات. التفاصيل في [privacy.html](privacy.html).

## الرخصة
الكود تحت MIT (`LICENSE`). الخطوط تحت OFL. التفاصيل في `NOTICE.md`.
