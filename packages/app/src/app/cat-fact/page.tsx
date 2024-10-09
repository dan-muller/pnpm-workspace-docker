import Image from "next/image";
import getCatFact from "@workspace/api/cat-fact";

export default async function Home() {
  const catFact = await getCatFact();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center">{catFact}</h1>
      </main>
    </div>
  );
}
