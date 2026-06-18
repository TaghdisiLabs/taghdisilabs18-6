import "./globals.css";
import BackgroundFX from "@/components/BackgroundFX";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TaghdisiLabs",
  description: "Cinematic AI Sales Engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        
        {/* GLOBAL BACKGROUND */}
        <BackgroundFX />

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="relative z-10">{children}</main>

      </body>
    </html>
  );
}
