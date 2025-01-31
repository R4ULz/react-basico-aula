
import Menu from "/components/Menu";
import Form from "/components/Form";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
      <div>
        <Menu />
        <div className="flex flex-col bg-gray-300 h-screen justify-center items-center">
          <Form />
        </div>
      </div>
  );
}
