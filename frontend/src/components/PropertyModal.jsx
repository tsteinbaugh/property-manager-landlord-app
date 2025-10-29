import ModalRoot from "./ui/ModalRoot.jsx";
import PropertyForm from "./PropertyForm.jsx";
import styles from "./PropertyModal.module.css"; // <-- same CSS used by Add Property wrapper

export default function PropertyModal({
  isOpen,
  initialData,
  onClose,
  onSave,
  title = "Edit Property",
}) {
  return (
   <ModalRoot isOpen={isOpen} onClose={onClose} width={820}>
     <div className={styles.modalBodyEven}>
       <h3 className={styles.modalTitle}>{title}</h3>
       <PropertyForm
         initialData={initialData}
         onSave={(data) => onSave?.(data)}
         onCancel={onClose}
         submitLabel="Save"
         buttonMinWidth={100}   // match Add Property sizing
       />
     </div>
   </ModalRoot>
  );
}
