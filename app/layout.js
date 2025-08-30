import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "RRJ Traders",
  description: "Top Leading Computer Hardware Store",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased bg-bg-primary text-text-primary min-h-screen`} >
          <Toaster 
            toastOptions={{
              style: {
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--neon-blue)',
                boxShadow: 'var(--glow-blue)',
              },
            }}
          />
          <AppContextProvider>
            <div className="relative">
              {/* Animated background elements */}
              <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-5s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-10s'}}></div>
              </div>
              {children}
            </div>
          </AppContextProvider>
        </body>
      </html>
      </ClerkProvider>
  );
}
