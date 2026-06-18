import "./globals.css";

export const metadata = {
  title: "MiniTZ System | TaghdisiLabs",
  description: "AI Agents System Landing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
