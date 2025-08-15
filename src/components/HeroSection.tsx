import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Locale } from "next-intl";
type HeroSectionProps = {
  lang: Locale;
};

export default function HeroSection({ lang }: HeroSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden flex flex-col items-center">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/40 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/40 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/40 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-300">
                  AI-Powered
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-cyan-400">
                  Patient Monitoring
                </span>
              </h1>
              <p className="max-w-[600px] text-zinc-300 mt-6 md:text-xl">
                MedixMind transforms healthcare with intelligent monitoring
                systems — tracking post-surgery recovery, ensuring inpatient
                safety, and enabling home-based patient care through AI-driven
                sensors and smart alerts.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/#solutions"
                className="flex bg-gradient-to-r font-semibold from-purple-700 to-cyan-600 hover:from-purple-800 hover:to-cyan-700 text-white border-0 h-12 px-6 rounded-md"
              >
                <span className="relative z-10 flex items-center">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/#contact"
                className="flex items-center bg-white/5 backdrop-blur-sm font-semibold hover:bg-white/10 text-white border border-white/10 h-12 px-6 rounded-md"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right visual — health-tech style */}
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-[500px]">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-full blur-3xl opacity-30 animate-pulse" />

              {/* Sensor data panel */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 opacity-50" />

                {/* Vital signs simulation */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 gap-6">
                  <div className="w-full h-16 bg-transparent overflow-hidden">
                    <svg viewBox="0 0 500 50" xmlns="http://www.w3.org/2000/svg">
                      <polyline
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="2"
                        points="0,25 30,25 40,10 50,40 60,25 100,25 110,5 130,45 150,25 200,25 210,15 230,35 250,25 500,25"
                      >
                        <animate
                          attributeName="points"
                          dur="2s"
                          repeatCount="indefinite"
                          values="
                            0,25 30,25 40,10 50,40 60,25 100,25 110,5 130,45 150,25 200,25 210,15 230,35 250,25 500,25;
                            0,25 25,25 35,5 45,45 55,25 95,25 105,15 125,35 145,25 195,25 205,10 225,40 245,25 500,25;
                            0,25 30,25 40,10 50,40 60,25 100,25 110,5 130,45 150,25 200,25 210,15 230,35 250,25 500,25
                          "
                        />
                      </polyline>
                    </svg>
                  </div>

                  <p className="text-white text-sm opacity-80 font-mono">
                    Monitoring patient vitals in real-time...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
