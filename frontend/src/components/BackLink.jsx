import { Link, useLocation, useNavigate } from "react-router-dom";

// A hardcoded destination (e.g. "Back to property") lies whenever a page has
// more than one real entry point — a Tenant is reachable from the property
// page, the top-level Tenants list, AND a lease's tenant list, so "back"
// can't be a fixed place. This uses real browser history instead (always
// correct about where you actually came from) and falls back to `fallback`
// when there's no in-app history to unwind — a fresh page load or refresh,
// which React Router marks by giving that location the key "default".
export default function BackLink({ fallback, children = "← Back" }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(e) {
    if (location.key && location.key !== "default") {
      e.preventDefault();
      navigate(-1);
    }
  }

  return (
    <Link to={fallback} onClick={handleClick} className="text-sm text-emerald-700 hover:underline">
      {children}
    </Link>
  );
}
