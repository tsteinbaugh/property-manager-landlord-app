//frontend/newsrc/features/residents/components/OccupantCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function OccupantCard({ 
  occupant, 
  onClick,
  variant = "summary", // "summary" | "detail" 
 }) {
  
  if (!occupant) return null;

  const vm = useMemo(() => {
    const isArchived = !!occupant.archivedAt;
  
    const displayName =
      (occupant.name && String(occupant.name).trim()) ||
      "Unnamed occupant";

    const phone = occupant.phone 
      ? String(occupant.phone).trim() 
      : "Not provided";
    const email = occupant.email 
      ? String(occupant.email).trim() 
      : "Not provided";
    
    const relation = occupant.relation ? String(occupant.relation).trim() : "";
    const age = 
      occupant.age === null || occupant.age === undefined || occupant.age === ""
        ? null
        : String(occupant.age);
    const heightFeet = 
      occupant.heightFeet === null || occupant.heightFeet === undefined || occupant.heightFeet === ""
        ? null
        : String(occupant.heightFeet);
    const heightInches = 
      occupant.heightInches === null || occupant.heightInches === undefined || occupant.heightInches === ""
        ? null
        : String(occupant.heightInches);                
    const weight =
      occupant.weightLb === null || occupant.weightLb === undefined || occupant.weightLb === ""
        ? null
        : String(occupant.weightLb);
    const sex = occupant.sex ? String(occupant.sex).trim() : "";
    const hairColor = occupant.hairColor ? String(occupant.hairColor).trim() : "";
    const eyeColor = occupant.eyeColor ? String(occupant.eyeColor).trim() : "";
    const bodyBuild = occupant.bodyBuild ? String(occupant.bodyBuild).trim() : "";
    const markings = occupant.markings ? String(occupant.markings).trim() : "";
    const notes = occupant.notes ? String(occupant.notes).trim() : "";

    return {
      isArchived,
      displayName,
      phone,
      email,
      relation,
      age,
      heightFeet,
      heightInches,
      weight,
      sex,
      hairColor,
      eyeColor,
      bodyBuild,
      markings,
      notes,
    };
  }, [occupant]);

  const badgeText = vm.isArchived ? "Archived" : "Occupant";
  const badgeClass = vm.isArchived ? ui.badgeArchived : ui.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Occupant Info";

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
      aria-label={`Open occupant ${vm.displayName}`}
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
        {vm.age && !vm.phone && !vm.email ? (
          <div><strong>Age: </strong>{vm.age}</div>
        ) : null}
      </div>
    </button>
  );
}