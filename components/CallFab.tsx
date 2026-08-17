import { PhoneIcon } from "./Icons";

export default function CallFab({ phone, label }: { phone: string; label: string }) {
  return (
    <a className="call-fab" href={`tel:${phone}`} aria-label={label}>
      <PhoneIcon />
    </a>
  );
}
