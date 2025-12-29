// newsrc/features/residents/components/tenants/TenantCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

import {
  formatEmail,
  formatPhonePretty,
  formatInt,
  formatEnumLabel,
  formatHeightFeetInches,
  formatWeight,
  formatText,
} from "@shared/utils/validation.js";

export default function TenantCard({ 
  tenant, 
  onClick,
  variant = "summary", // "summary" | "detail" 
 }) {
  if (!tenant) return null;

  const vm = useMemo(() => {
    const isArchived = !!tenant.archivedAt;
  
    const displayName = formatText(tenant.name, { fallback: "Unnamed tenant" });
  
    return {
      isArchived,
      displayName,
      phone: formatPhonePretty(tenant.phone, { fallback: "—"}),
      email: formatEmail(tenant.email, { fallback: "—"}),
      age: formatInt(tenant.age, { fallback: null }),
    
      height: formatHeightFeetInches(tenant.heightFeet, tenant.heightInches, { fallback: null }),
      weight: formatWeight(tenant.weight, { fallback: null }),
    
      sex: formatEnumLabel(tenant.sex),
      hairColor: formatEnumLabel(tenant.hairColor),
      eyeColor: formatEnumLabel(tenant.eyeColor),
      bodyBuild: formatEnumLabel(tenant.bodyBuild),
      markings: formatText(tenant.markings, { fallback: null }),

      occupation: formatText(tenant.occupation, { fallback: null }),
      employer: formatText(tenant.employer, { fallback: null }),
      income: formatInt(tenant.income, { fallback: null }),
      creditScore: formatInt(tenant.creditScore, { fallback: null }),
      notes: formatText(tenant.notes, { fallback: null }),
    };
  }, [tenant]);

  const badgeText = vm.isArchived ? "Archived" : "Tenant";
  const badgeClass = vm.isArchived ? ui.badgeArchived : ui.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Tenant Info";

    return (
      <div className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}>
        <div className={ui.cardHeader}>
          <div className={ui.cardTitle}>{headerTitle}</div>
          <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={ui.cardBody}>
          <div><strong>Phone: </strong>{vm.phone}</div>
          <div><strong>Email: </strong>{vm.email}</div>
            
          {vm.age && <div><strong>Age: </strong>{vm.age}</div>}
          {vm.height && <div><strong>Height: </strong>{vm.height}</div>}
          {vm.weight && <div><strong>Weight: </strong>{vm.weight}</div>}
            
          {vm.sex && <div><strong>Sex: </strong>{vm.sex}</div>}
          {vm.hairColor && <div><strong>Hair Color: </strong>{vm.hairColor}</div>}
          {vm.eyeColor && <div><strong>Eye Color: </strong>{vm.eyeColor}</div>}
          {vm.bodyBuild && <div><strong>Body Build: </strong>{vm.bodyBuild}</div>}
            
          {vm.markings && <div><strong>Physical Markings: </strong>{vm.markings}</div>}
          {vm.occupation && <div><strong>Occupation: </strong>{vm.occupation}</div>}
          {vm.employer && <div><strong>Employer: </strong>{vm.employer}</div>}
          {vm.income && <div><strong>Income: </strong>{vm.income}</div>}
          {vm.creditScore && <div><strong>Credit Score: </strong>{vm.creditScore}</div>}
          {vm.notes && <div><strong>Notes: </strong>{vm.notes}</div>}
        </div>
      </div>
    );
  }    

  // ============================================================
  // SUMMARY VARIANT (phone + email, + age if no phone/email)
  // ============================================================
  const headerTitle = vm.displayName;

  return (
    <button
      type="button"
      className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open tenant ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{headerTitle}</div>
        <span className={`${ui.badge} ${badgeClass}`}>
          {badgeText}
        </span>
      </div>

      <div className={ui.cardBody}>
        <div><strong>Phone: </strong>{vm.phone}</div>
        <div><strong>Email: </strong>{vm.email}</div>        
        {!vm.phone && !vm.email && (
          <div>Click for more details</div>
        )}      
      </div>
    </button>
  );
}