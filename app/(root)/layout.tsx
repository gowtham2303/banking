"use client"
import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/Sidebar";
import Image from 'next/image'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIN = { firstname :'Gowtham' , lastname: "Tharigopula "};
  return (
   <main className="flex h-screen w-full font-inter ">  
     <SideBar user= {loggedIN} />
     <div className="size-full flex-col">
      <div className="root-layout ">
        <Image src="/icons/logo.svg"
        width={30}
        height={30}
        alt="menu"
        />
        <div>
          <MobileNav user={loggedIN} />

        </div>
      </div>
      {children}
     </div>


   </main>
  );
}
