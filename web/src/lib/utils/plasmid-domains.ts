export const MAX_CUSTOM_DOMAINS = 50;

/**
 * Parses the free text of the "Custom domain" effector option into a list of domains.
 * Users may separate domains by new lines, commas or semicolons.
 */
export function parseCustomDomains(input: string): string[] {
  return String(input ?? '')
    .split(/[\n,;]+/)
    .map((domain) => domain.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .slice(0, MAX_CUSTOM_DOMAINS);
}
