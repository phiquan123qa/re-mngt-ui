import REList from "@/components/REList";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar/>
    <main>
      <REList/>
    </main>
    </div>
  );
}
