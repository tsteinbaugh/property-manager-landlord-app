// Date-only fields (a lease's start date, a payment date, a birthday) are stored
// as midnight UTC, so they're shown in UTC: in local time, west of UTC, they'd
// read a day early. Real timestamps (deletedAt, archivedAt) still use local time.
export function formatDay(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString(undefined, { timeZone: "UTC" });
}
