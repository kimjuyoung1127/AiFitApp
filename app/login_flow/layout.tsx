export default function LoginFlowLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-32 bg-[#FFF6EE]">
      <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-xl p-16 sm:p-20">
        {children}
      </div>
    </div>
  );
} 