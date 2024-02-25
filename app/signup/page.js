import Navbar from "@/components/Navbar";
import Head from "next/head";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sign Up App</title>
      </Head>
      <Navbar/>
    <main>
        <SignUpForm/>
    </main>
    </div>
  );
}
