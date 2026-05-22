import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/haven-harbor-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="Haven & Harbor Counseling"
            width={200}
            height={56}
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            A trauma-informed, faith-friendly counseling practice in Austin, Texas — offering safe
            harbor for the weary, the wounded, and the seeking.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Licensed in the State of Texas · In-person &amp; telehealth across Texas
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/approach" className="hover:text-primary">Approach</Link></li>
            <li><Link to="/christian-counseling" className="hover:text-primary">Christian Counseling</Link></li>
            <li><Link to="/resources" className="hover:text-primary">Resources</Link></li>
            <li><Link to="/cost-of-therapy-austin" className="hover:text-primary">Cost of Therapy</Link></li>
            <li><Link to="/what-is-emdr" className="hover:text-primary">What is EMDR?</Link></li>
            <li><Link to="/what-is-ifs-therapy" className="hover:text-primary">What is IFS?</Link></li>
            <li><Link to="/first-therapy-session" className="hover:text-primary">First Session</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>hello@havenandharborcounseling.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>(512) 555-0140</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Austin, TX 78704</span>
            </li>
          </ul>
          <Link
            to="/schedule"
            className="mt-5 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
          >
            Book a Consult
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <div className="container-prose flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Haven &amp; Harbor Counseling. All rights reserved.</p>
          <p>If you are in crisis, call or text 988 for the Suicide &amp; Crisis Lifeline.</p>
        </div>
      </div>
    </footer>
  );
}
