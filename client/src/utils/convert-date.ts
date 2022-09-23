function convertDate(value: string): string {
  const date = new Date(value);

  return date.toLocaleDateString('default', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
}

export default convertDate;
