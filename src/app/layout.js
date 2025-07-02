import "./globals.css";

export const metadata = {
  title: "PSA - Dark Unto Light",
  description: "Website for Pinnacle Sprach Akademie, a german language institute in Nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
