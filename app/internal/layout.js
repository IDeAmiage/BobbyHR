/* eslint-disable @next/next/no-head-element */
import NavBar from "@/components/nav-bar";

export default function InternalLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
