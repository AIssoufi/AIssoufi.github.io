const FRENCH_MONTHS: Record<string, number> = {
  janv: 0,
  janvier: 0,
  févr: 1,
  février: 1,
  mars: 2,
  avr: 3,
  avril: 3,
  mai: 4,
  juin: 5,
  juil: 6,
  juillet: 6,
  août: 7,
  sept: 8,
  septembre: 8,
  oct: 9,
  octobre: 9,
  nov: 10,
  novembre: 10,
  déc: 11,
  décembre: 11,
};

function parseFrenchDate(str: string): Date {
  const s = str.trim().toLowerCase();
  if (s === "aujourd'hui" || s === 'auj.' || s === 'auj') {
    return new Date();
  }
  const [rawMonth, rawYear] = s.split(' ');
  const monthKey = rawMonth.replace('.', '');
  const month = FRENCH_MONTHS[monthKey] ?? 0;
  return new Date(parseInt(rawYear, 10), month, 1);
}

export function computeDuration(startDate: string, endDate: string): string {
  const start = parseFrenchDate(startDate);
  const end = parseFrenchDate(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} an${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mois`);
  return parts.join(' ') || '< 1 mois';
}
