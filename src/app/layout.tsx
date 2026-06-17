import "./globals.css";
import BackgroundFX from "@/components/BackgroundFX";

export const metadata = {
  title: "TaghdisiLabs Digital",
  description: "AI Growth Systems for modern businesses"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <BackgroundFX />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}