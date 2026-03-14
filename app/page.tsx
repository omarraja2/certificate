'use client'

import Link from 'next/link'
import { useState } from 'react'

type Lang = 'ru' | 'en' | 'ar'

const T = {
  ru: {
    dir: 'ltr' as const,
    schoolOf: 'Школа английского',
    navCourses: 'Курсы',
    navWhy: 'О нас',
    navCert: 'Генератор сертификатов',
    badge: '🇬🇧 Британский английский высшего уровня',
    heroLine1: 'Открой своё',
    heroSub: 'Профессиональные курсы английского, которые ведут от нуля до свободного владения. Опытные преподаватели, структурированная программа и международно признанные сертификаты.',
    heroCta1: 'Смотреть курсы',
    heroCta2: 'Создать сертификат',
    quote: '«Границы моего языка означают границы моего мира.»',
    quoteAuthor: '— Людвиг Витгенштейн',
    float1: '📚 7 курсов',
    float2: '🏆 Сертификаты',
    float3: '🌍 40+ стран',
    stat1lbl: 'Выпускников',
    stat2lbl: 'Курсов',
    stat3lbl: 'Уровней',
    stat4lbl: 'Довольных студентов',
    coursesEyebrow: 'Что мы предлагаем',
    coursesTitle: 'Наши курсы',
    coursesSub: 'От нуля до свободного владения — курс для каждого этапа вашего пути.',
    whyEyebrow: 'Почему English Future',
    whyTitle: 'Учитесь с уверенностью',
    whySub: 'Мы сочетаем проверенные методы обучения с современными инструментами и личным вниманием к каждому студенту.',
    ctaTitle: 'Готовы выдать сертификат?',
    ctaSub: 'Создайте профессиональный персонализированный сертификат English Future за считанные секунды.',
    ctaBtn: 'Открыть генератор сертификатов →',
    footerCopy: `© ${new Date().getFullYear()} English Future. Все права защищены.`,
    courses: [
      { title: 'Английский с нуля', level: 'Начальный', icon: '🌱', desc: 'Начните путь к английскому с самых основ — уверенно и без стресса.' },
      { title: 'Разговорный английский', level: 'Начальный – Средний', icon: '💬', desc: 'Говорите естественно в повседневных ситуациях и реальных разговорах.' },
      { title: 'Деловой английский', level: 'Средний – Продвинутый', icon: '💼', desc: 'Освойте профессиональное общение для современного бизнеса.' },
      { title: 'Академическое письмо', level: 'Выше среднего', icon: '✍️', desc: 'Пишите чёткие, структурированные эссе и научные работы.' },
      { title: 'Подготовка к IELTS', level: 'Все уровни', icon: '🎯', desc: 'Целенаправленные стратегии для достижения нужного балла.' },
      { title: 'Английский для специалистов', level: 'Продвинутый', icon: '🏆', desc: 'Профессиональный язык для инженеров, врачей и руководителей.' },
      { title: 'Продвинутая коммуникация', level: 'Продвинутый – Свободное владение', icon: '⭐', desc: 'Отточите беглость речи и освойте высокий стиль выражения.' },
    ],
    features: [
      { icon: '🎓', title: 'Сертифицированные преподаватели', desc: 'Учитесь у опытных квалифицированных специалистов британского английского.' },
      { icon: '📱', title: 'Гибкое обучение', desc: 'Занимайтесь в своём темпе — онлайн или очно.' },
      { icon: '🌍', title: 'Международное сообщество', desc: 'Присоединяйтесь к студентам из более чем 40 стран.' },
      { icon: '📜', title: 'Признанные сертификаты', desc: 'Получайте сертификаты, которые ценят работодатели по всему миру.' },
    ],
  },
  en: {
    dir: 'ltr' as const,
    schoolOf: 'School of English',
    navCourses: 'Courses',
    navWhy: 'Why Us',
    navCert: 'Certificate Generator',
    badge: '🇬🇧 British English Excellence',
    heroLine1: 'Unlock Your',
    heroSub: 'Professional English courses designed to take you from beginner to fluent. Expert instructors, structured curriculum, and internationally recognised certificates.',
    heroCta1: 'Explore Courses',
    heroCta2: 'Generate Certificate',
    quote: '"The limits of my language mean the limits of my world."',
    quoteAuthor: '— Ludwig Wittgenstein',
    float1: '📚 7 Courses',
    float2: '🏆 Certified',
    float3: '🌍 40+ Countries',
    stat1lbl: 'Graduates',
    stat2lbl: 'Courses',
    stat3lbl: 'Levels',
    stat4lbl: 'Satisfaction',
    coursesEyebrow: 'What We Offer',
    coursesTitle: 'Our Courses',
    coursesSub: 'From zero to fluency — a course for every stage of your English journey.',
    whyEyebrow: 'Why English Future',
    whyTitle: 'Learn With Confidence',
    whySub: 'We combine proven teaching methods with modern tools and personal attention to every student.',
    ctaTitle: 'Ready to Issue a Certificate?',
    ctaSub: 'Generate a professional, personalised English Future certificate in seconds.',
    ctaBtn: 'Open Certificate Generator →',
    footerCopy: `© ${new Date().getFullYear()} English Future. All rights reserved.`,
    courses: [
      { title: 'English from Zero', level: 'Beginner', icon: '🌱', desc: 'Start your English journey from absolute basics with confidence.' },
      { title: 'Conversational English', level: 'Elementary–Intermediate', icon: '💬', desc: 'Speak naturally in everyday situations and real-life conversations.' },
      { title: 'Business English Mastery', level: 'Intermediate–Advanced', icon: '💼', desc: 'Master professional communication for the modern workplace.' },
      { title: 'Academic English Writing', level: 'Upper-Intermediate', icon: '✍️', desc: 'Write clear, structured essays and academic papers with precision.' },
      { title: 'IELTS Preparation', level: 'All Levels', icon: '🎯', desc: 'Targeted strategies to achieve your target band score.' },
      { title: 'English for Professionals', level: 'Advanced', icon: '🏆', desc: 'Industry-specific language for engineers, doctors, and executives.' },
      { title: 'Advanced Communication', level: 'Advanced–Proficiency', icon: '⭐', desc: 'Refine your fluency and master nuanced, high-level expression.' },
    ],
    features: [
      { icon: '🎓', title: 'Certified Instructors', desc: 'Learn from experienced, qualified British English specialists.' },
      { icon: '📱', title: 'Flexible Learning', desc: 'Study at your own pace — online or in-person classes available.' },
      { icon: '🌍', title: 'Global Community', desc: 'Join students from over 40 countries in interactive group sessions.' },
      { icon: '📜', title: 'Recognised Certificates', desc: 'Earn certificates valued by employers and institutions worldwide.' },
    ],
  },
  ar: {
    dir: 'rtl' as const,
    schoolOf: 'مدرسة اللغة الإنجليزية',
    navCourses: 'الدورات',
    navWhy: 'لماذا نحن',
    navCert: 'مولّد الشهادات',
    badge: '🇬🇧 تميّز اللغة الإنجليزية البريطانية',
    heroLine1: 'افتح مستقبلك مع',
    heroSub: 'دورات إنجليزية احترافية تأخذك من الصفر إلى الطلاقة. مدرّسون خبراء، منهج منظّم، وشهادات معترف بها دولياً.',
    heroCta1: 'استعرض الدورات',
    heroCta2: 'إنشاء شهادة',
    quote: '«حدود لغتي تعني حدود عالمي.»',
    quoteAuthor: '— لودفيغ فيتغنشتاين',
    float1: '📚 ٧ دورات',
    float2: '🏆 شهادات معتمدة',
    float3: '🌍 ٤٠+ دولة',
    stat1lbl: 'خريج',
    stat2lbl: 'دورة',
    stat3lbl: 'مستوى',
    stat4lbl: 'نسبة الرضا',
    coursesEyebrow: 'ما نقدّمه',
    coursesTitle: 'دوراتنا',
    coursesSub: 'من الصفر إلى الطلاقة — دورة لكل مرحلة في رحلتك مع الإنجليزية.',
    whyEyebrow: 'لماذا English Future',
    whyTitle: 'تعلّم بثقة',
    whySub: 'نجمع بين أساليب تدريس مجرّبة وأدوات حديثة واهتمام شخصي بكل طالب.',
    ctaTitle: 'هل أنت مستعد لإصدار شهادة؟',
    ctaSub: 'أنشئ شهادة English Future احترافية ومخصّصة في ثوانٍ معدودة.',
    ctaBtn: '← فتح مولّد الشهادات',
    footerCopy: `© ${new Date().getFullYear()} English Future. جميع الحقوق محفوظة.`,
    courses: [
      { title: 'الإنجليزية من الصفر', level: 'مبتدئ', icon: '🌱', desc: 'ابدأ رحلتك مع الإنجليزية من الأساسيات بثقة وبدون ضغط.' },
      { title: 'الإنجليزية المحادثاتية', level: 'مبتدئ – متوسط', icon: '💬', desc: 'تحدّث بشكل طبيعي في المواقف اليومية والمحادثات الحقيقية.' },
      { title: 'إتقان الإنجليزية التجارية', level: 'متوسط – متقدم', icon: '💼', desc: 'أتقن التواصل المهني في بيئة العمل الحديثة.' },
      { title: 'الكتابة الأكاديمية', level: 'فوق المتوسط', icon: '✍️', desc: 'اكتب مقالات وأوراقاً أكاديمية واضحة ومنظّمة بدقة.' },
      { title: 'التحضير لـ IELTS', level: 'جميع المستويات', icon: '🎯', desc: 'استراتيجيات موجّهة لتحقيق الدرجة المستهدفة.' },
      { title: 'الإنجليزية للمتخصصين', level: 'متقدم', icon: '🏆', desc: 'لغة متخصصة للمهندسين والأطباء والمديرين التنفيذيين.' },
      { title: 'التواصل المتقدم', level: 'متقدم – إتقان', icon: '⭐', desc: 'صقّل طلاقتك وأتقن أساليب التعبير الراقية.' },
    ],
    features: [
      { icon: '🎓', title: 'مدرّسون معتمدون', desc: 'تعلّم من متخصصين مؤهّلين وذوي خبرة في الإنجليزية البريطانية.' },
      { icon: '📱', title: 'تعلّم مرن', desc: 'ادرس بوتيرتك الخاصة — صفوف أونلاين أو حضورية.' },
      { icon: '🌍', title: 'مجتمع عالمي', desc: 'انضم إلى طلاب من أكثر من ٤٠ دولة في جلسات تفاعلية.' },
      { icon: '📜', title: 'شهادات معترف بها', desc: 'احصل على شهادات يقدّرها أصحاب العمل والمؤسسات حول العالم.' },
    ],
  },
}

const LANG_OPTIONS: { code: Lang; label: string; flag: string }[] = [
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ar', label: 'AR', flag: '🇸🇦' },
]

function UKFlag() {
  return (
    <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="60" height="40" fill="#5B8DB8" />
      <line x1="0" y1="0" x2="60" y2="40" stroke="white" strokeWidth="7" />
      <line x1="60" y1="0" x2="0" y2="40" stroke="white" strokeWidth="7" />
      <line x1="0" y1="0" x2="60" y2="40" stroke="#D4796A" strokeWidth="4" />
      <line x1="60" y1="0" x2="0" y2="40" stroke="#D4796A" strokeWidth="4" />
      <rect x="0" y="14" width="60" height="12" fill="white" />
      <rect x="24" y="0" width="12" height="40" fill="white" />
      <rect x="0" y="15.5" width="60" height="9" fill="#D4796A" />
      <rect x="25.5" y="0" width="9" height="40" fill="#D4796A" />
    </svg>
  )
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('ru')
  const t = T[lang]

  return (
    <div className="lp-root" dir={t.dir}>

      {/* ── TOP BAR ── */}
      <div className="lp-topbar">
        <div className="lp-topbar-inner">
          <a href="tel:+79139889308" className="lp-topbar-item">
            📞 +7 913 988 9308
          </a>
          <div className="lp-topbar-sep" />
          <a href="https://instagram.com/english_future" target="_blank" rel="noopener noreferrer" className="lp-topbar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            @english_future
          </a>
        </div>
      </div>

      {/* ── NAV ── */}
      <nav className="lp-nav">
        <div className="lp-nav-inner">
          <div className="lp-nav-logo">
            <div className="lp-nav-flag"><UKFlag /></div>
            <div>
              <div className="lp-nav-brand">English Future</div>
              <div className="lp-nav-tagline">{t.schoolOf}</div>
            </div>
          </div>
          <div className="lp-nav-links">
            <a href="#courses">{t.navCourses}</a>
            <a href="#why">{t.navWhy}</a>

            {/* Language switcher */}
            <div className="lp-lang-switcher">
              {LANG_OPTIONS.map(o => (
                <button
                  key={o.code}
                  className={`lp-lang-btn${lang === o.code ? ' active' : ''}`}
                  onClick={() => setLang(o.code)}
                >
                  {o.flag} {o.label}
                </button>
              ))}
            </div>

            <Link href="/certificate" className="lp-nav-cta">{t.navCert}</Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="lp-hero-bg" aria-hidden="true">
          <div className="lp-hero-circle lp-hero-circle-1" />
          <div className="lp-hero-circle lp-hero-circle-2" />
          <div className="lp-hero-circle lp-hero-circle-3" />
        </div>
        <div className="lp-hero-content">
          <div className="lp-hero-badge">{t.badge}</div>
          <h1 className="lp-hero-title">
            {t.heroLine1}<br />
            <span className="lp-hero-accent">English Future</span>
          </h1>
          <p className="lp-hero-sub">{t.heroSub}</p>
          <div className="lp-hero-btns">
            <a href="#courses" className="lp-btn-primary">{t.heroCta1}</a>
            <Link href="/certificate" className="lp-btn-secondary">{t.heroCta2}</Link>
          </div>
        </div>
        <div className="lp-hero-visual">
          <div className="lp-hero-card">
            <div className="lp-hero-card-flag"><UKFlag /></div>
            <div className="lp-hero-card-quote">{t.quote}</div>
            <div className="lp-hero-card-author">{t.quoteAuthor}</div>
          </div>
          <div className="lp-hero-floats">
            <div className="lp-float">{t.float1}</div>
            <div className="lp-float">{t.float2}</div>
            <div className="lp-float">{t.float3}</div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="lp-stats">
        <div className="lp-stats-inner">
          <div className="lp-stat"><div className="lp-stat-num">500+</div><div className="lp-stat-lbl">{t.stat1lbl}</div></div>
          <div className="lp-stat-divider" />
          <div className="lp-stat"><div className="lp-stat-num">7</div><div className="lp-stat-lbl">{t.stat2lbl}</div></div>
          <div className="lp-stat-divider" />
          <div className="lp-stat"><div className="lp-stat-num">6</div><div className="lp-stat-lbl">{t.stat3lbl}</div></div>
          <div className="lp-stat-divider" />
          <div className="lp-stat"><div className="lp-stat-num">98%</div><div className="lp-stat-lbl">{t.stat4lbl}</div></div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="lp-section" id="courses">
        <div className="lp-section-inner">
          <div className="lp-section-header">
            <div className="lp-section-eyebrow">{t.coursesEyebrow}</div>
            <h2 className="lp-section-title">{t.coursesTitle}</h2>
            <p className="lp-section-sub">{t.coursesSub}</p>
          </div>
          <div className="lp-courses-grid">
            {t.courses.map(c => (
              <div key={c.title} className="lp-course-card">
                <div className="lp-course-icon">{c.icon}</div>
                <div className="lp-course-level">{c.level}</div>
                <div className="lp-course-title">{c.title}</div>
                <div className="lp-course-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="lp-section lp-section-alt" id="why">
        <div className="lp-section-inner">
          <div className="lp-section-header">
            <div className="lp-section-eyebrow">{t.whyEyebrow}</div>
            <h2 className="lp-section-title">{t.whyTitle}</h2>
            <p className="lp-section-sub">{t.whySub}</p>
          </div>
          <div className="lp-features-grid">
            {t.features.map(f => (
              <div key={f.title} className="lp-feature-card">
                <div className="lp-feature-icon">{f.icon}</div>
                <div className="lp-feature-title">{f.title}</div>
                <div className="lp-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="lp-cta-banner">
        <div className="lp-cta-inner">
          <h2 className="lp-cta-title">{t.ctaTitle}</h2>
          <p className="lp-cta-sub">{t.ctaSub}</p>
          <Link href="/certificate" className="lp-btn-primary lp-btn-large">{t.ctaBtn}</Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-logo">
            <div className="lp-footer-flag"><UKFlag /></div>
            <div>
              <div className="lp-footer-brand">English Future</div>
              <div className="lp-footer-tagline">{t.schoolOf}</div>
            </div>
          </div>
          <div className="lp-footer-right">
            <div className="lp-footer-contact">
              <a href="tel:+79139889308" className="lp-footer-link">📞 +7 913 988 9308</a>
              <a href="https://instagram.com/english_future" target="_blank" rel="noopener noreferrer" className="lp-footer-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @english_future
              </a>
            </div>
            <div className="lp-footer-copy">{t.footerCopy}</div>
          </div>
        </div>
      </footer>

    </div>
  )
}
