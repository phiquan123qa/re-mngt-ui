import Navbar from "@/components/Navbar";
import Head from "next/head";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login App</title>
      </Head>
      <Navbar/>
    <main>
        <LoginForm/>
    </main>
    </div>
  );
}
