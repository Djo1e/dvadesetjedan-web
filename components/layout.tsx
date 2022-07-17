import { ReactNode } from "react";
import { Header } from "./header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-dark h-screen p-5 text-center circuit-bg">
      <Header />
      {children}
    </div>
  );
}
