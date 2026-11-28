import YesNo from "./YesNo";

// Whether a phone number can receive text messages (Taylor, 2026-11-27), asked
// under every phone the app stores. Blank means not known yet.
export default function TextsQuestion({ value, onChange }) {
  return (
    <div className="mt-2">
      <span className="mb-1 block text-xs text-stone-500">Can this number receive text messages?</span>
      <YesNo value={value ?? null} onChange={onChange} />
    </div>
  );
}

// A phone shown with what's known about texting it.
export function withTexts(phone, texts) {
  if (!phone) return null;
  if (texts === true) return `${phone} (can text)`;
  if (texts === false) return `${phone} (no texts)`;
  return phone;
}
