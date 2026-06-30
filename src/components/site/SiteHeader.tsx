import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/haven-harbor-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/approach", label: "Approach" },
  { to: "/christian-counseling-austin", label: "Christian counseling" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
];



export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-prose flex h-24 items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Haven & Harbor Counseling — Home">
          <img
            src={logo}
            alt="Haven & Harbor Counseling — Austin, Texas"
            width={264}
            height={77}
            className="h-14 w-auto md:h-18"
          />
        </Link>


        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/75 transition hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
          <a href="https://care.headway.co/providers/brittany-zientek" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90"
          >
            Book a Consult
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="container-prose flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base text-foreground/80 hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <a href="https://care.headway.co/providers/brittany-zientek" target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Book a Consult
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
