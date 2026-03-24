"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const menuItems = [
  { name: "Developments", href: "#developments-section" },
  { name: "Attractions", href: "#attractions-section" },
  { name: "Map", href: "#map-section" },
]

const heroImageLight =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=2880&q=80&auto=format&fit=crop"
const heroImageDark =
  "https://images.unsplash.com/photo-1511497584787-4a06fbfe2098?w=2880&q=80&auto=format&fit=crop"

export function HeroSection() {
  const [menuState, setMenuState] = React.useState(false)
  return (
    <div>
      <header>
        <nav
          data-state={menuState ? "active" : undefined}
          className="group fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent">
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link href="/" aria-label="home" className="flex items-center space-x-2">
                  <Logo />
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                  <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150">
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="#developments-section">
                      <span>Explore</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/addyourlisting">
                      <span>Add listing</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
          <div className="w-[35rem] h-[80rem] -translate-y-[22rem] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[22rem] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                Visit Kobape — Abeokuta&apos;s gateway
              </h1>
              <p className="mx-auto my-8 max-w-2xl text-xl text-muted-foreground">
                Real estate, culture, and countryside in one corridor — explore listings, attractions,
                and the map below.
              </p>

              <Button asChild size="lg">
                <Link href="#developments-section">
                  <span className="btn-label">View developments</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
            <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-16 lg:-mr-56 lg:pl-56">
              <div className="[transform:rotateX(20deg);]">
                <div className="lg:h-[44rem] relative skew-x-[.36rad]">
                  <img
                    className="rounded-[--radius] z-[2] relative border dark:hidden"
                    src={heroImageLight}
                    alt="Rolling hills and landscape"
                    width={2880}
                    height={2074}
                  />
                  <img
                    className="rounded-[--radius] z-[2] relative hidden border dark:block"
                    src={heroImageDark}
                    alt="Landscape at dusk"
                    width={2880}
                    height={2074}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("text-lg font-semibold tracking-tight text-foreground", className)}>
      #Visitabk
    </span>
  )
}
