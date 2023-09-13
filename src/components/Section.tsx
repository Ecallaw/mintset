import Link from "next/link";

export default function Section({
    children,
  }: {
    children: React.ReactNode
  })
 {

  return (
<section className="flex bg-red-500 h-screen w-screen">
  {children}
</section>
  )
}


