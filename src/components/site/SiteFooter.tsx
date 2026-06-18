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
            Haven &amp; Harbor Counseling — trauma therapy, anxiety counseling, and Christian
            counseling in Austin, TX, with Brittany Zientek, LPC.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Licensed Professional Counselor · State of Texas<br />
            In-person in Austin · Telehealth across Texas
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/trauma-therapy-austin" className="hover:text-primary">Trauma Therapy in Austin</Link></li>
            <li><Link to="/anxiety-therapy-austin" className="hover:text-primary">Anxiety Therapy in Austin</Link></li>
            <li><Link to="/christian-counseling-austin" className="hover:text-primary">Christian Counseling in Austin</Link></li>
            <li><Link to="/resources" className="hover:text-primary">Resources / Journal</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
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
              <span>6448 East Hwy 290, Ste E108<br />Austin, TX 78723</span>
            </li>
          </ul>
          <div className="mt-5 rounded-xl bg-card/60 p-4 text-xs leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Insurance</p>
            <p className="mt-1">
              In-network through Headway: Aetna · Cigna · United Healthcare · Oscar · Oxford ·
              Anthem
            </p>
            <p className="mt-2">Self-pay $130–$225. Superbills available.</p>
          </div>
          <a href="https://care.headway.co/providers/brittany-zientek" target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
          >
            Book a Free Consult
          </a>
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
