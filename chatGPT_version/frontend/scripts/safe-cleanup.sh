#!/usr/bin/env bash
set -e

echo "🔹 Starting safe cleanup..."

ARCHIVE_DIR="src/_archive"
mkdir -p "$ARCHIVE_DIR"

# Move unused or orphaned files to _archive for safekeeping
echo "📦 Archiving unreferenced components and utils..."
for f in \
  src/components/AddPropertyFlow.jsx \
  src/components/EmergencyContactModal.jsx \
  src/components/FinancialModal.jsx \
  src/components/financials/ChargeModal.jsx \
  src/components/financials/DepositSettlementModal.jsx \
  src/components/financials/FinancialForm.jsx \
  src/components/financials/FinancialTable.jsx \
  src/components/financials/ManagePaymentsModal.jsx \
  src/components/financials/NoticeModal.jsx \
  src/components/financials/PaymentModal.jsx \
  src/components/GlobalSearch.jsx \
  src/components/layout/AppHeader.jsx \
  src/components/layout/AvatarMenu.jsx \
  src/components/OccupantModal.jsx \
  src/components/PetModal.jsx \
  src/components/properties/FinancialInfoSection.jsx \
  src/components/properties/LeaseSection.jsx \
  src/components/PropertyFeverRow.jsx \
  src/components/PropertyForm.jsx \
  src/components/PropertyModal.jsx \
  src/components/PropertyModalWrapper.jsx \
  src/components/TenantModal.jsx \
  src/components/ui/Breadcrumbs.jsx \
  src/components/ui/FeverLight.jsx \
  src/components/ui/FloatingField.jsx \
  src/components/ui/ModalRoot.jsx \
  src/components/ui/SmartBreadcrumbs.jsx \
  src/hooks/useModalKeys.js \
  src/pages/PropertyList.jsx \
  src/PropertyCard.jsx \
  src/utils/date.js \
  src/utils/formatAddress.js \
  src/utils/leaseExtract.js \
  src/utils/readLeaseFile.js; do
  if [ -f "$f" ]; then
    echo "  ➤ Moving $f"
    mv "$f" "$ARCHIVE_DIR/"
  fi
done

# Uninstall clearly unused dependencies
echo "🧰 Removing unused dependencies..."
npm uninstall fuse.js mammoth pdfjs-dist prop-types >/dev/null 2>&1 || true
npm uninstall -D globals prisma >/dev/null 2>&1 || true

echo "✅ Safe cleanup complete."
echo "💾 Everything archived in: $ARCHIVE_DIR"
