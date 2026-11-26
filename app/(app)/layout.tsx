import Link from "next/link";
import type { ReactNode } from "react";
import BottomNav from "@/components/BottomNav";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh">
      <header className="mx-auto flex max-w-md items-center justify-between px-6 pt-6">
        <Link href="/home" className="font-serif text-lg text-olive">
          Thehrav Within <span className="italic text-earth">Space</span>
        </Link>
      </header>
      <main className="mx-auto max-w-md px-6 pt-6 pb-28">{children}</main>
      <BottomNav />
    </div>
  );
}
