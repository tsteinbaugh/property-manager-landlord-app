// newsrc/features/residents/components/tenants/TenantCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function TenantCard({ 
  tenant, 
  onClick,
  variant = "summary", // "summary" | "detail" 
 }) {
  if (!tenant) return null;

  const vm = useMemo(() => {
    const isArchived = !!tenant.archivedAt;
  
    const displayName =
      (tenant.name && String(tenant.name).trim()) ||
      "Unnamed tenant";

    const phone = tenant.phone ? String(tenant.phone).trim() : ""
    const email = tenant.email ? String(tenant.email).trim() : ""
    
    const age = 
      tenant.age === null || tenant.age === undefined || tenant.age === ""
        ? null
        : String(tenant.age);
    const heightFeet = 
      tenant.heightFeet === null || tenant.heightFeet === undefined || tenant.heightFeet === ""
        ? null
        : String(tenant.heightFeet);
    const heightInches = 
      tenant.heightInches === null || tenant.heightInches === undefined || tenant.heightInches === ""
        ? null
        : String(tenant.heightInches);                
    const weight =
      tenant.weightLb === null || tenant.weightLb === undefined || tenant.weightLb === ""
        ? null
        : String(tenant.weightLb);                
    const sex = tenant.sex ? String(tenant.sex).trim() : "";
    const hairColor = tenant.hairColor ? String(tenant.hairColor).trim() : "";
    const eyeColor = tenant.eyeColor ? String(tenant.eyeColor).trim() : "";
    const bodyBuild = tenant.bodyBuild ? String(tenant.bodyBuild).trim() : "";
    const markings = tenant.markings ? String(tenant.markings).trim() : "";
    const occupation = tenant.occupation ? String(tenant.occupation).trim() : "";
    const employer = tenant.employer ? String(tenant.employer).trim() : "";
    const income = 
      tenant.income === null || tenant.income === undefined || tenant.income === ""
        ? null
        : String(tenant.income);
    const creditScore = 
      tenant.creditScore === null || tenant.creditScore === undefined || tenant.creditScore === ""
        ? null
        : String(tenant.creditScore);    const notes = tenant.notes ? String(tenant.notes).trim() : "";

    return {
      isArchived,
      displayName,
      phone,
      email,
      age,
      heightFeet,
      heightInches,
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
          <span className={`${ui.badge} ${badgeClass}`}>
            {badgeText}
          </span>
        </div>

        <div className={ui.cardBody}>
          <div><strong>Phone: </strong>{vm.phone}</div>
          <div><strong>Email: </strong>{vm.email}</div>

          {vm.relation ? (
            <div><strong>Relation to Tenant: </strong>{vm.relation}</div>
          ) : null}

          {vm.age ? (
            <div><strong>Age: </strong>{vm.age}</div>
          ) : null}

          {vm.heightFeet && vm.heightInches ? (
            <div><strong>Height: </strong>{vm.heightFeet}' {vm.heightInches}"</div>
          ) : null}

          {vm.weight ? (
            <div><strong>Weight: </strong>{vm.weight} pounds</div>
          ) : null}

          {vm.sex ? (
            <div><strong>Sex: </strong>{vm.sex}</div>
          ) : null}

          {vm.hairColor ? (
            <div><strong>Hair Color: </strong>{vm.hairColor}</div>
          ) : null}

          {vm.eyeColor ? (
            <div><strong>Eye Color: </strong>{vm.eyeColor}</div>
          ) : null}

          {vm.bodyBuild ? (
            <div><strong>Body Build: </strong>{vm.bodyBuild}</div>
          ) : null}

          {vm.markings ? (
            <div><strong>Physical Markings: </strong>{vm.markings}</div>
          ) : null}

          {vm.occupation ? (
            <div><strong>Occupation: </strong>{vm.occupation}</div>
          ) : null}

          {vm.employer ? (
            <div><strong>Employer: </strong>{vm.employer}</div>
          ) : null}

          {vm.income ? (
            <div><strong>Income: </strong>${vm.income}/month</div>
          ) : null}

          {vm.creditScore ? (
            <div><strong>Credit Score: </strong>{vm.creditScore}</div>
          ) : null}

          {vm.notes ? (
            <div><strong>Notes: </strong>{vm.notes}</div>
          ) : null}
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
        <div><strong>Phone:</strong> {vm.phone}</div> 
        <div><strong>Email:</strong> {vm.email}</div> 
      </div>
    </button>
  );
}