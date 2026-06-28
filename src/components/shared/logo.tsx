export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#EB5002] to-[#D92C3B] font-bold text-white shadow-lg">
        M
      </div>

      <div>
        <p className="text-lg font-bold text-white">Mess Manager</p>

        <p className="text-xs text-neutral-500">Smart Expense Tracking</p>
      </div>
    </div>
  );
}
