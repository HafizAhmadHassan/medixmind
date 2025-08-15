import { Github, Globe, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function TeamSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Team", locale: lang });
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-300 tracking-tighter sm:text-4xl md:text-5xl">
                {t("title")}
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                "Our team builds intelligent healthcare solutions, delivering real-time patient insights for safer, smarter, and more connected care."
              </p>
            </div>
          </div>

          {/* Small Heading / Intro Message */}
          <div className="max-w-3xl mx-auto text-center text-gray-400 space-y-4 px-4">
            <h3 className="text-lg font-semibold text-purple-400">
              At HealthTech, we believe in transforming healthcare through intelligent technology
            </h3>
            <p className="text-sm md:text-base">
              Our mission is to empower real-time patient insights—enabling faster decisions, better outcomes, and safer care.
            </p>
            <p className="text-sm md:text-base">
              With a focus on innovation, accessibility, and precision, we’re building tools that bridge the gap between patients and providers—making healthcare smarter, more connected, and more human.
            </p>
            <p className="text-sm md:text-base italic">
              “Technology should serve humanity—not replace it.”
            </p>
          </div>

          {/* Team Members - 2 people */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CEO */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 opacity-70 blur-sm" />
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-white/10">
                    <Image
                      src="/img/hassan.png" // replace with your actual image
                      alt="Hafiz Ahmad Hassan"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Hafiz Ahmad Hassan</h3>
                  <p className="text-sm text-purple-400 font-medium">
                    CEO & AI/Healthcare Solutions Lead
                  </p>
                  <p className="text-sm text-gray-400">
                    Founder and visionary behind MedixMind, specializing in AI-driven healthcare and data analytics solutions.
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <Link
                    href="https://github.com/hafizahmadhassan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  
                  <Link
                    href="https://www.linkedin.com/in/hafizahmadhassan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                 
                </div>
              </div>
            </div>

            {/* CTO */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-70 blur-sm" />
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-white/10">
                    <Image
                      src="/img/taha.png" // replace with Taha's image
                      alt="Taha"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Taha</h3>
                  <p className="text-sm text-cyan-400 font-medium">
                    CTO & Automation/IoT Engineer
                  </p>
                  <p className="text-sm text-gray-400">
                    Expert in IoT integrations and automation, leading the development of smart hospital systems and connected healthcare devices.
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  
                    
               
                  <Link
                    href="https://www.linkedin.com/in/syed-taha-ali7860/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
