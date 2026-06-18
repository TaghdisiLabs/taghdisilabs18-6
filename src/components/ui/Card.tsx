export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      {children}
    </div>
  );
}
