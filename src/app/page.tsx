"use client";
import Image from "next/image";
import Top_Image from "./components/Top_Image";
import Signinpart from "./components/Signinpart";
import Aboutus from "./components/Aboutus";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  return (
    <div>
      <Top_Image/>
      <Signinpart/>
      <Aboutus/>
    </div>
  );
}
