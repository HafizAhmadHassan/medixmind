import { Github, Instagram, Linkedin } from "lucide-react";
import type { Locale } from "next-intl";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Link as IntlLink } from "@/src/i18n/navigation";
import MastodonIcon from "./icons/MastodonIcon";

export default async function Footer({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Navigation", locale: lang });

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: "#",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: (
        <div className="w-6 h-6 relative text-white">
          <MastodonIcon />
        </div>
      ),
      href: "#",
      label: "Mastodon",
    },
  ];

  const navItems = ["projects", "services", "about", "contact"];

  return (
    <footer className="text-white pt-20 pb-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                Medixmind
              </h3>
            </div>
            <p className="mb-8 text-zinc-400 text-lg">
            "Empowering smarter healthcare through innovation and care."
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation and Contact Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:w-2/3">
            {/* Navigation Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">{t("navigation")}</h3>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/#${item}`}
                      className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {t(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">{t("get_in_touch")}</h3>
              <address className="not-italic space-y-2 text-zinc-400">
                <Link href="mailto:ahmadhassan061@gmail.com" className="block hover:text-white transition-colors">
                  ahmadhassan061@gmail.com
                </Link>
                <Link href="tel:+393510889491" className="block hover:text-white transition-colors">
                  +39 351 0889491
                </Link>
              </address>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-10 pb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left text-gray-400">
            &copy; {new Date().getFullYear()} Medixmind all rights reserved
          </p>
          <div className="flex gap-6">
            <IntlLink
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              {t("privacy_policy")}
            </IntlLink>
            <IntlLink
              href="/imprint"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              {t("imprint")}
            </IntlLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
