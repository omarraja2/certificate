'use client'

import { useState, useEffect, KeyboardEvent } from 'react'

// ── helpers ──────────────────────────────────────────────────────────────────
function genCertId() {
  return `ENG-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`
}

function formatDate(val: string) {
  if (!val) return '—'
  return new Date(val + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

// ── SVG Components ────────────────────────────────────────────────────────────
function UKFlag({ coral = false }: { coral?: boolean }) {
  const accent = coral ? '#D4796A' : '#C8102E'
  const bg = coral ? '#5B8DB8' : '#012169'
  return (
    <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="40" fill={bg} />
      <line x1="0" y1="0" x2="60" y2="40" stroke="white" strokeWidth="7" />
      <line x1="60" y1="0" x2="0" y2="40" stroke="white" strokeWidth="7" />
      <line x1="0" y1="0" x2="60" y2="40" stroke={accent} strokeWidth="4" />
      <line x1="60" y1="0" x2="0" y2="40" stroke={accent} strokeWidth="4" />
      <rect x="0" y="14" width="60" height="12" fill="white" />
      <rect x="24" y="0" width="12" height="40" fill="white" />
      <rect x="0" y="15.5" width="60" height="9" fill={accent} />
      <rect x="25.5" y="0" width="9" height="40" fill={accent} />
    </svg>
  )
}

function BritStripSvg() {
  return (
    <svg viewBox="0 0 800 22" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="22" fill="#012169" />
      <line x1="0" y1="0" x2="800" y2="22" stroke="white" strokeWidth="7" />
      <line x1="800" y1="0" x2="0" y2="22" stroke="white" strokeWidth="7" />
      <line x1="0" y1="0" x2="800" y2="22" stroke="#C8102E" strokeWidth="4" />
      <line x1="800" y1="0" x2="0" y2="22" stroke="#C8102E" strokeWidth="4" />
      <rect x="0" y="7" width="800" height="8" fill="white" />
      <rect x="0" y="8.5" width="800" height="5" fill="#C8102E" />
    </svg>
  )
}

// ── Password Overlay ──────────────────────────────────────────────────────────
function PasswordOverlay({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)

  function check() {
    if (value === '198541') {
      onUnlock()
    } else {
      setShake(true)
      setError('Incorrect password. Please try again.')
      setValue('')
      setTimeout(() => { setShake(false); setError('') }, 2500)
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') check()
  }

  return (
    <div className="pw-overlay">
      <div className="pw-box">
        <div className="pw-flag"><UKFlag /></div>
        <div className="pw-title">English Future</div>
        <div className="pw-sub">Certificate Generator</div>
        <input
          className={`pw-input${shake ? ' error' : ''}`}
          type="password"
          maxLength={6}
          placeholder="••••"
          autoComplete="off"
          value={value}
          onChange={e => { setValue(e.target.value); setShake(false) }}
          onKeyDown={onKeyDown}
        />
        <button className="pw-btn" onClick={check}>Unlock</button>
        <div className="pw-error">{error}</div>
      </div>
    </div>
  )
}

// ── Certificate Preview ───────────────────────────────────────────────────────
interface CertProps {
  name: string
  course: string
  level: string
  issueDate: string
  certId: string
  flash: boolean
}

function Certificate({ name, course, level, issueDate, certId, flash }: CertProps) {
  return (
    <div className={`cert-wrap${flash ? ' flash' : ''}`}>
      <div id="certificate">
        <div className="cert-border" />
        <div className="brit-strip brit-strip-top"><BritStripSvg /></div>
        <div className="brit-strip brit-strip-bot"><BritStripSvg /></div>

        <div className="cert-inner">
          <div className="cert-header">
            <div className="cert-flag"><UKFlag coral /></div>
            <div className="cert-brand">
              English Future<br />
              <span style={{ fontFamily: 'var(--font-open-sans)', fontWeight: 400, fontSize: 13, color: '#6B4226' }}>
                School of English
              </span>
            </div>
          </div>

          <hr className="hline" />
          <div className="cert-title">Certificate</div>
          <div className="cert-sub">of Completion</div>
          <hr className="hline" />

          <div className="cert-to">This Certificate is Proudly Presented to</div>
          <div className={`cert-name${!name ? ' placeholder' : ''}`}>
            {name || 'Student Name Here'}
          </div>

          <div className="cert-body-txt">for successfully completing all requirements of the</div>

          <div className="cert-course-row">
            <span className="cert-star">★</span>
            <span className="cert-course">{course}</span>
            <span className="cert-star">★</span>
          </div>

          <div className="cert-meta">
            <div className="cert-meta-item">
              <span className="cert-meta-lbl">Level</span>
              <span className="cert-meta-val">{level}</span>
            </div>
            <div className="cert-meta-item">
              <span className="cert-meta-lbl">Date of Issue</span>
              <span className="cert-meta-val">{formatDate(issueDate)}</span>
            </div>
            <div className="cert-meta-item">
              <span className="cert-meta-lbl">Certificate ID</span>
              <span className="cert-meta-val">{certId}</span>
            </div>
          </div>

          <div className="cert-sigs">
            <div className="cert-sig">
              <div className="cert-sig-line" />
              <div className="cert-sig-name">Mohammed Salim</div>
              <div className="cert-sig-role">Course Instructor</div>
            </div>
            <div className="cert-sig">
              <div className="cert-sig-line" />
              <div className="cert-sig-name">English Future</div>
              <div className="cert-sig-role">Director</div>
            </div>
          </div>

          <div className="cert-footer">
            English Future · Certificate ID: {certId}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
const COURSES = [
  'Advanced English Communication',
  'Business English Mastery',
  'Academic English Writing',
  'Conversational English',
  'IELTS Preparation Course',
  'English for Professionals',
  'English from Zero',
]

const LEVELS = ['Beginner', 'Elementary', 'Intermediate', 'Upper-Intermediate', 'Advanced', 'Proficiency']

export default function Home() {
  const [unlocked, setUnlocked] = useState(false)
  const [name, setName] = useState('')
  const [course, setCourse] = useState(COURSES[0])
  const [level, setLevel] = useState('Intermediate')
  const [issueDate, setIssueDate] = useState('')
  const [certId, setCertId] = useState('')
  const [loading, setLoading] = useState(false)
  const [printing, setPrinting] = useState(false)
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    setIssueDate(new Date().toISOString().split('T')[0])
    setCertId(genCertId())
  }, [])

  async function buildPDF() {
    const html2canvas = (await import('html2canvas')).default
    const { jsPDF } = await import('jspdf')

    const certEl = document.getElementById('certificate') as HTMLElement
    if (!certEl) return null

    const origRadius = certEl.style.borderRadius
    const origOverflow = certEl.style.overflow
    const origBackground = certEl.style.background
    certEl.style.borderRadius = '0'
    certEl.style.overflow = 'visible'
    certEl.style.background = '#ffffff'

    const canvas = await html2canvas(certEl, {
      scale: 4,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
    })

    certEl.style.borderRadius = origRadius
    certEl.style.overflow = origOverflow
    certEl.style.background = origBackground

    const imgData = canvas.toDataURL('image/jpeg', 1.0)

    const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
    const W = pdf.internal.pageSize.getWidth()
    const H = pdf.internal.pageSize.getHeight()

    pdf.setFillColor(255, 255, 255)
    pdf.rect(0, 0, W, H, 'F')

    const certW = W - 20
    const certH = certW / 1.414
    const xOff = 10
    const yOff = (H - certH) / 2

    pdf.addImage(imgData, 'JPEG', xOff, yOff, certW, certH)
    return pdf
  }

  async function generatePDF() {
    if (loading || printing) return
    setLoading(true)
    try {
      const pdf = await buildPDF()
      if (!pdf) return
      pdf.save(`EnglishFuture_Certificate_${(name || 'Student').replace(/\s+/g, '_')}.pdf`)
      setFlash(true)
      setTimeout(() => setFlash(false), 700)
    } catch (e) {
      console.error(e)
      alert('Error generating PDF: ' + (e as Error).message)
    }
    setLoading(false)
  }

  async function printPDF() {
    if (loading || printing) return
    setPrinting(true)
    try {
      const pdf = await buildPDF()
      if (!pdf) return
      const blobUrl = pdf.output('bloburl') as string
      const win = window.open(blobUrl)
      if (win) win.onload = () => win.print()
    } catch (e) {
      console.error(e)
      alert('Error printing PDF: ' + (e as Error).message)
    }
    setPrinting(false)
  }

  return (
    <>
      {!unlocked && <PasswordOverlay onUnlock={() => setUnlocked(true)} />}

      <div className="page-wrap">
        {/* ── FORM ── */}
        <div className="form-panel">
          <div className="brand">
            <div className="flag-mini"><UKFlag coral /></div>
            <div className="brand-text">
              <h2>English Future</h2>
              <span>Certificate Generator</span>
            </div>
          </div>

          <h1>Create a Student<br />Certificate</h1>
          <p className="subtitle">
            Fill in the details to generate a personalized English Future certificate
            and download it instantly as a PDF.
          </p>

          <div className="field-group">
            <label>Student Full Name</label>
            <input
              type="text"
              placeholder="e.g. Anna Petrova"
              value={name}
              onChange={e => setName(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="row-2">
            <div className="field-group">
              <label>Course</label>
              <select value={course} onChange={e => setCourse(e.target.value)}>
                {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="field-group">
              <label>Level</label>
              <select value={level} onChange={e => setLevel(e.target.value)}>
                {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>

          <div className="row-2">
            <div className="field-group">
              <label>Instructor</label>
              <input
                type="text"
                value="Mohammed Salim"
                readOnly
                style={{ opacity: 0.45, cursor: 'not-allowed' }}
              />
            </div>
            <div className="field-group">
              <label>Date of Issue</label>
              <input
                type="date"
                value={issueDate}
                onChange={e => setIssueDate(e.target.value)}
              />
            </div>
          </div>

          <div className="field-group">
            <label>Institution</label>
            <input
              type="text"
              value="English Future"
              readOnly
              style={{ opacity: 0.45, cursor: 'not-allowed' }}
            />
          </div>

          <div className="btn-row">
            <button className="btn-generate" onClick={generatePDF} disabled={loading}>
              {loading
                ? <div className="loader" />
                : <span>⬇ &nbsp; Download PDF</span>
              }
            </button>

            <button className="btn-print" onClick={printPDF} disabled={printing || loading}>
              {printing ? <div className="loader" /> : '🖨 \u00a0 Print'}
            </button>
          </div>
        </div>

        {/* ── PREVIEW ── */}
        <div className="preview-panel">
          <div className="preview-label">Live Preview</div>
          <Certificate
            name={name}
            course={course}
            level={level}
            issueDate={issueDate}
            certId={certId}
            flash={flash}
          />
          <p className="preview-note">Preview updates live as you type</p>
        </div>
      </div>
    </>
  )
}
