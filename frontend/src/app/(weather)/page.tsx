'use client'

import CompareForm from "@/components/ui/CompareForm";
import CompareCard from "@/components/Weather/CompareCard";

export default function Home() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <CompareForm buttonText={'Compare'} />
      <div className="flex gap-5 mt-10">
        <CompareCard />
      </div>
    </div>
  );
}
