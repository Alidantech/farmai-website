import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const navLinks = ["Farmers", "Organic", "Crops", "Technology"];
const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];
const footerLinks = [
  { title: "Company", href: "#" },
  { title: "About", href: "#" },
  { title: "Contact", href: "#" },
];
const workingHours = [
  "Mon - Fri: 9:00am - 5:00pm",
  "Saturday: 10:00am - 6:00pm",
  "Sunday Closed",
];

function FooterNav() {
  return (
    <nav className="flex items-center gap-6">
      {navLinks.map((link, index) => (
        <>
          <Link
            key={link}
            href="#"
            className="text-sm font-medium hover:text-gray-600"
          >
            {link.toUpperCase()}
          </Link>
          {index !== navLinks.length - 1 && (
            <span className="hidden md:inline">•</span>
          )}
        </>
      ))}
    </nav>
  );
}

function FooterContact() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Phone className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium">+1(212) 255-511</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Mail className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium">support@farm-ai.com</span>
      </div>
    </div>
  );
}

function FooterSocials() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href }) => (
        <Link
          key={href}
          href={href}
          className="w-10 h-10 bg-[#ebd96b]/20 rounded-full flex items-center justify-center hover:bg-[#ebd96b]/30 transition-colors"
        >
          <Icon className="w-5 h-5" />
        </Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-[#ebd96b] py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-6">
          <FooterNav />
          <FooterContact />
        </div>
      </div>
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-medium">
            <b className="text-primary">Farm</b>.ai
          </Link>
          <p className="text-muted-foreground">
            Farm AI is dedicated to using technology to optimize sustainable
            farming practices with real-time data and AI-driven insights.
          </p>
          <FooterSocials />
        </div>
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-3">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Working Hours</h3>
          <ul className="space-y-3 text-muted-foreground">
            {workingHours.map((time) => (
              <li key={time}>{time}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Our Address</h3>
          <p className="text-muted-foreground">
            256 Farm AI Street, Nairobi, Kenya
          </p>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Farm AI. All Rights Reserved.
      </div>
    </footer>
  );
}
