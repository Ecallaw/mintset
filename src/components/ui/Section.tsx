import { useSectionInView } from "@/lib/hooks/useSectionInView"
import { SectionName } from "@/lib/types"

export default function Section({ children, anchor, bg='bg-neutralBg' }: { children: React.ReactNode, anchor: string, bg?: string }){
  const { ref } = useSectionInView(anchor as SectionName)

  return (
    <section ref={ref} className={bg + " flex flex-1 flex-col min-h-screen pt-toolbarHeight-1 xl:pt-toolbarHeight-2 px-6 lg:px-8 xl:px-24 2xl:px-32 "} id={anchor}>
      {children}
    </section>
  )
}


