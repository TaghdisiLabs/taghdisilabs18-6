import "./globals.css";
import Cursor from "@/components/cursor/Cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
