import "./globals.css";

export const metadata = {
  title: "Clavier Arabe en ligne لوحة الكتابة بالعربية",
  description:
    "Clavier Arabe Virtuel de pointe, entièrement gratuit pour écrire des textes en Arabe.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="theme-color" content="#080F0F" />
      </head>
      <body>{children}</body>
    </html>
  );
}
