import Header from "@/components/Header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Bon Appétit",
   description: "Trouvez les meilleures recettes gourmandes",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="fr">
         <body className={inter.className}>
            <Header />
            {children}
         </body>
      </html>
   );
}
