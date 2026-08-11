// newsrc/features/residents/components/tenants/TenantCard.jsx
import { useMemo } from "react";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";
import AttachmentsSection from "@shared/ui/AttachmentsSection.jsx";

import {
  formatEmail,
  formatPhonePretty,
  formatInt,
  formatEnumLabel,
  formatHeightFeetInches,
  formatWeight,
  formatText,
  formatMoney,
} from "@shared/utils/validation.js";

export default function TenantCard({ 
  tenant,
  onArchiveAttachment,
  showArchivedAttachs = false,
  onToggleShowArchivedAttachs,  
  onClick,
  variant = "summary", 
 }) {
  if (!tenant) return null;

  const vm = useMemo(() => {
    const isArchived = !!tenant.archivedAt;
  
    const displayName = formatText(tenant.name, { fallback: "Unnamed tenant" });

    const phone = formatPhonePretty(tenant.phone, { fallback: "—"});
    const email = formatEmail(tenant.email, { fallback: "—"});

    const age = formatInt(tenant.age, { fallback: null });
    const height = formatHeightFeetInches(tenant.heightFeet, tenant.heightInches, { fallback: null });
    const weight = formatWeight(tenant.weight, { fallback: null });
    const sex = formatEnumLabel(tenant.sex);
    const hairColor = formatEnumLabel(tenant.hairColor);
    const eyeColor = formatEnumLabel(tenant.eyeColor);
    const bodyBuild = formatEnumLabel(tenant.bodyBuild);
    const markings = formatText(tenant.markings, { fallback: null });
    const occupation = formatText(tenant.occupation, { fallback: null });
    
    const employer = formatText(tenant.employer, { fallback: null });
    const income = formatMoney(tenant.income, { fallback: null });
    const creditScore = formatInt(tenant.creditScore, { fallback: null });
    
    const attachments = Array.isArray(tenant?.attachments) ? tenant.attachments : [];
    
    const notes = formatText(tenant.notes, { fallback: null });

    return {
      isArchived,
      displayName,
      phone,
      email ,
      age,
      height,
      weight,
      sex,
      hairColor,
      eyeColor,
      bodyBuild,
      markings,
      occupation,
      employer,
      income,
      creditScore,
      notes,
      attachments,
    };
  }, [tenant]);

  function tenantStatusLabel(status) {
    switch (status) {
      case "DRAFT": return "Draft";
      case "CANDIDATE": return "Candidate";
      case "ACTIVE": return "Active";
      case "INACTIVE": return "Inactive";
      default: return "Tenant";
    }
  }


  function tenantStatusTone(status) {
    switch (String(status || "").toUpperCase()) {
    case "ACTIVE": return "active";
    case "INACTIVE": return "muted";
    default: return "idle";
    }
  }  

const statusTone = tenantStatusTone(tenant?.status);
const badgeText = vm.isArchived ? "Archived" : tenantStatusLabel(tenant?.status);


const badgeClass = vm.isArchived
  ? card.badgeArchived
  : statusTone === "active"
    ? card.badgeActive
    : statusTone === "muted"
      ? card.badgeMuted
      : card.badgeIdle;
  
  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Tenant Info";

    return (
      <div className={`${card.card} ${vm.isArchived ? card.cardArchived : ""}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>{headerTitle}</div>
          <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={card.cardBody}>
          <div>
            <strong>Phone: </strong>
            {vm.phone}
            </div>
          <div>
            <strong>Email: </strong>
            {vm.email}
            </div>
            
          {vm.age ? (
            <div>
              <strong>Age: </strong>
              {vm.age}
            </div>
          ) : null}
          {vm.height ? (
            <div>
              <strong>Height: </strong>
              {vm.height}
            </div>
          ) : null}
          {vm.weight ? (
            <div>
              <strong>Weight: </strong>
              {vm.weight}
            </div>
          ) : null}
          {vm.sex ? (
            <div>
              <strong>Sex: </strong>
              {vm.sex}
            </div>
          ) : null}
          {vm.hairColor ? (
            <div>
              <strong>Hair Color: </strong>
              {vm.hairColor}
            </div>
          ) : null}
          {vm.eyeColor ? (
            <div>
              <strong>Eye Color: </strong>
              {vm.eyeColor}
            </div>
          ) : null}
          {vm.bodyBuild ? (
            <div>
              <strong>Body Build: </strong>
              {vm.bodyBuild}
            </div>
          ) : null}
          {vm.markings ? (
            <div>
              <strong>Physical Markings: </strong>
              {vm.markings}
            </div>
          ) : null}
          {vm.occupation ? (
            <div>
              <strong>Occupation: </strong>
              {vm.occupation}
            </div>
          ) : null}
          {vm.employer ? (
            <div>
              <strong>Employer: </strong>
              {vm.employer}
            </div>
          ) : null}
          {vm.income ? (
            <div>
              <strong>Income: </strong>
              {vm.income}
            </div>
          ) : null}
          {vm.creditScore ? (
            <div>
              <strong>Credit Score: </strong>
              {vm.creditScore}
            </div>
          ) : null}
          {vm.notes ? (
            <div>
              <strong>Notes: </strong>
              {vm.notes}
            </div>
          ) : null}
          <AttachmentsSection
            title="Attachments"
            attachments={vm.attachments}
            showArchived={showArchivedAttachs}
            onToggleShowArchived={onToggleShowArchivedAttachs}
            onArchive={(attachId, reason) => 
              onArchiveAttachment?.(attachId, reason)
            }
          />     
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
      className={`${card.card} ${vm.isArchived ? card.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open tenant ${vm.displayName}`}
    >
      <div className={card.cardHeader}>
        <div className={card.cardTitle}>{headerTitle}</div>
        <span className={`${card.badge} ${badgeClass}`}>
          {badgeText}
        </span>
      </div>

      <div className={card.cardBody}>
        <div><strong>Phone: </strong>{vm.phone}</div>
        <div><strong>Email: </strong>{vm.email}</div>        
        {!vm.phone && !vm.email && (
          <div>Click for more details</div>
        )}      
      </div>
    </button>
  );
}