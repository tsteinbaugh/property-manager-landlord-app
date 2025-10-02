// src/utils/date.js

// Return YYYY-MM-DD for a Date or ISO-like string
export function toISODate(d) {
  const dt = d instanceof Date ? d : new Date(d);
  return dt.toISOString().slice(0, 10);
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function addDays(d, days) {
  const dt = new Date(d);
  dt.setDate(dt.getDate() + Number(days || 0));
  return dt;
}

export function addMonths(d, months) {
  const dt = new Date(d);
  dt.setMonth(dt.getMonth() + Number(months || 0));
  return dt;
}

export function setDayOfMonth(d, day) {
  const dt = new Date(d);
  dt.setDate(Number(day));
  return dt;
}
