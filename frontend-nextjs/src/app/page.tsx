import Image from "next/image";
import TitlebarBelowImageList from "../ui/list-image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TitlebarBelowImageList></TitlebarBelowImageList>
    </main>
  );
}
