export function Field({
  label,
  type = "text",
  placeholder,
  required = false
}: {
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-[#1f241c]/75">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 rounded-2xl border border-[#E4DFB5] bg-white/60 px-4 text-sm font-semibold text-[#1f241c] outline-none transition placeholder:text-[#1f241c]/35 hover:bg-white/80 focus:border-[#9AB17A] focus:ring-4 focus:ring-[#9AB17A]/20"
      />
    </label>
  );
}

export function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-[#1f241c]/75">{label}</span>
      <select className="h-12 rounded-2xl border border-[#E4DFB5] bg-white/60 px-4 text-sm font-semibold text-[#1f241c] outline-none transition hover:bg-white/80 focus:border-[#9AB17A] focus:ring-4 focus:ring-[#9AB17A]/20">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
