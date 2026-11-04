import { describe, it, expect } from 'vitest';
import { MAX_CUSTOM_DOMAINS, parseCustomDomains } from './plasmid-domains';

describe('parseCustomDomains', () => {
  it('returns an empty list for empty input', () => {
    expect(parseCustomDomains('')).toEqual([]);
    expect(parseCustomDomains('   \n  ')).toEqual([]);
  });

  it('splits on new lines, commas and semicolons', () => {
    expect(parseCustomDomains('KRAB\nDNMT3A, TET1; VPR')).toEqual([
      'KRAB',
      'DNMT3A',
      'TET1',
      'VPR'
    ]);
  });

  it('trims and collapses whitespace', () => {
    expect(parseCustomDomains('  my   domain  ,\n\n other domain ')).toEqual([
      'my domain',
      'other domain'
    ]);
  });

  it('caps the number of domains', () => {
    const input = Array.from({ length: MAX_CUSTOM_DOMAINS + 10 }, (_, i) => `d${i}`).join('\n');
    expect(parseCustomDomains(input)).toHaveLength(MAX_CUSTOM_DOMAINS);
  });
});
