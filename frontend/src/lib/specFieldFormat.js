function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString()}`;
}

// Special-cases the expense-link field to show the linked Expense's real
// amount/date directly (already embedded on the item via the backend's
// `include`) rather than doing an options-array lookup — simpler than
// keeping a dynamic option list in sync just for read-only display.
export function formatFieldValue(field, item) {
  if (field.key === "expenseId") {
    return item.expense ? `${money(item.expense.amount)} · ${new Date(item.expense.date).toLocaleDateString()}` : null;
  }
  const value = item[field.key];
  if (value === null || value === undefined || value === "") return null;
  if (field.type === "date") return new Date(value).toLocaleDateString();
  if (field.type === "select" || field.type === "searchable-select") {
    return field.options.find((o) => o.value === value)?.label || value;
  }
  return value;
}
