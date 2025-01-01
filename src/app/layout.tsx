import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/providers/react-query-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trigg",
  description: "Automate DMs and comments for your social media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning className={jakarta.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
