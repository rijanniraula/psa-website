import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "PSA - Dark Unto Light",
  description:
    "Website for Pinnacle Sprach Akademie, a german language institute in Nepal",
  icons: {
    icon: "/PSA_LOGO.png",
    type: "image/png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased h-screen">
        <div className="h-full w-full space-y-4">
          <NavBar />
          <div className="w-[90vw] mx-auto">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
