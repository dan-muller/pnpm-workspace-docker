import getProduct from "@workspace/api/product";
import {notFound} from "next/navigation";
import {ComponentProps} from "react";

function Image(props: ComponentProps<'img'>) {
  return props.src ? <img {...props} className='w-full rounded-lg border-2 border-neutral-800 shadow-lg shadow-neutral-800'/> : null
}

export default async function Home({params: {id}}: any) {
  const details = await getProduct(id);
  if (!details) notFound();

  console.log(details)

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-96">
        <Image src={details.product.image_url} alt={`${id} main image`} />
        <Image src={details.product.image_packaging_url} alt={`${id} packaging`} />
        <Image src={details.product.image_nutrition_url} alt={`${id} nutrition`} />
        <Image src={details.product.image_ingredients_url} alt={`${id} ingredients`} />
      </main>
    </div>
  );
}
