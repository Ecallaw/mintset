export default function Section({
  children,
  anchor,
  bg
}: {
    children: React.ReactNode,
    anchor: string,
    bg?: string
  })
{
  return (
    <section className={bg + " flex flex-1 flex-col min-h-screen pt-toolbarHeight px-6 lg:px-8 xl:px-24 2xl:px-32"} id={anchor}>
      {children}
    </section>
  )
}


