import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full p-4 z-50">
        <button className="text-xs uppercase tracking-widest">Home</button>
      </header>
      <main className="pt-16">{children}</main>
    </>
  )
}
