import { describe, it, expect } from '@jest/globals'
import en from '../admin/lib/locales/en.json'
import ru from '../admin/lib/locales/ru.json'
import zh from '../admin/lib/locales/zh.json'

// Every locale must cover exactly the same keys, so a missing translation
// fails CI instead of silently falling back to the key name at runtime.
const locales: Record<string, Record<string, string>> = { en, ru, zh }

describe('Locales', () => {
  it('should define the same key set for every locale', () => {
    const langs = Object.keys(locales)
    const base = Object.keys(locales.en).sort()

    for (const lang of langs) {
      expect(Object.keys(locales[lang]).sort()).toEqual(base)
    }
  })

  it('should have non-empty string values', () => {
    for (const dict of Object.values(locales)) {
      for (const value of Object.values(dict)) {
        expect(typeof value).toBe('string')
        expect(value.length).toBeGreaterThan(0)
      }
    }
  })
})
