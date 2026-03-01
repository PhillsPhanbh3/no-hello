import "./globals.css";

export const metadata = {
  title: "No Hello",
  description: "Say what you need, right away.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}