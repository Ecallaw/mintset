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
    <section className={"text-4xl min-h-[calc(100vh)] max-h-[calc(100vh)] w-screen " + bg} id={anchor}>
      {children}
    </section>
  )
}


