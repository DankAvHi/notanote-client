import "@/shared/styles/index.css";
import { Footer } from "@/widgets/Footer";
import { Navigation } from "@/widgets/Navigation";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { AppProvider } from "./providers";

export const metadata: Metadata = {
  title: "Notanote",
  description: "Do not note a note!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body>
          <Navigation />
          {children}
          <Footer />
          <Toaster invert closeButton position="top-center" />
        </body>
      </html>
    </AppProvider>
  );
}
