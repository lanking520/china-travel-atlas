export function BudgetBar() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
      <p className="text-lg font-semibold text-amber-900">每月旅行预算参考</p>
      <p className="mt-1 text-xl text-amber-800">
        约 <span className="text-2xl font-bold">2 万元</span>
        <span className="text-lg"> / 月（含交通、住宿、餐饮、门票）</span>
      </p>
      <p className="mt-2 text-base text-amber-700/90">
        各路线预算说明仅供参考，可按实际节奏增减。
      </p>
    </div>
  );
}
