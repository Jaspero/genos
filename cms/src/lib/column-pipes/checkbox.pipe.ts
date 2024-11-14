export function checkboxPipe(collection: string, key: string) {
  return (value: boolean, row: any) =>
    `<column-toggle id="${row.id}" collection="${collection}" key="${key}" value="${row[key]}"></column-toggle>`;
}
