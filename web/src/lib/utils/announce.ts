/**
 * Reads a message out to screen readers (WCAG 4.1.3). The visual alerts from @jaspero/web-components
 * have no live region, so every alert is also put into a visually hidden live region.
 */
export function announce(message: string, urgent = false) {
  if (typeof document === 'undefined' || !message) return;

  const id = urgent ? 'live-region-alert' : 'live-region-status';
  let region = document.getElementById(id);

  if (!region) {
    region = document.createElement('div');
    region.id = id;
    region.className = 'sr-only';
    region.setAttribute('role', urgent ? 'alert' : 'status');
    region.setAttribute('aria-live', urgent ? 'assertive' : 'polite');
    document.body.appendChild(region);
  }

  region.textContent = '';
  setTimeout(() => {
    region!.textContent = message;
  }, 100);
}
