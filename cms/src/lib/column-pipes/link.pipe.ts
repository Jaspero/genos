export function linkPipe(label?: string, target = '_blank') {
  return (value: string) => {
    if (value) {
      return `<a href="${value}" ${target ? `target="${target}"` : ''} ${target === '_blank' ? 'rel="noreferrer noopener"' : ''} style="text-decoration: underline">${label || value}</a>`;
    }
    return '-';
  };
}
