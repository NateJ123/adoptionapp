import Image from "next/image";
import Top_Image from "../components/Top_Image";
import Signinpart from "../components/Signinpart";
import Aboutus from "../components/Aboutus";
import Link from "next/link";
import { useRouter } from "next/router";
import Signup from "../components/Signup";
export default function Home() {
  return (
   <div>
    <Signup/>
   </div>
  );
}