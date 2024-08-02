import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import MainNavLinks from "./MainNavLinks";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import Image from 'next/image';  // Import the Image component
import logo from "@/public/aurecon logo.png"
const MainNav = async () => {
  const session = await getServerSession(options);

  return (
    <div className="flex justify-between items-">
      {/* Image in top left */}
      <div className="flex items-center gap-2">
        <Image className="h-10 w-auto" src={logo} alt="Atom" priority={true} />
      </div>

      <MainNavLinks role={session?.user.role} />

      <div className="flex items-center gap-2">
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNav;
