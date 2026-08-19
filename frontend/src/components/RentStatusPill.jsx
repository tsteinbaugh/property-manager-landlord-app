import { PORTFOLIO_STATUS } from "../lib/rentTrackerStatus";

export default function RentStatusPill({ status }) {
  const { label, className } = PORTFOLIO_STATUS[status] || PORTFOLIO_STATUS.NONE;
  return <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${className}`}>{label}</span>;
}
