import { getTranslations } from "next-intl/server";
import Project from "./Project";
import type { Locale } from "next-intl";

export default async function ProjectsSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Projects", locale: lang });

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-300">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              AI-powered healthcare solutions developed by MedixMind to enhance patient safety, rehabilitation, and remote monitoring.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Project
            name="Post-Surgery Rehabilitation Monitoring"
            image="/img/post_surgery.png"
            logo="/img/medixmind_logo.png"
            category="AI Rehabilitation System"
            description="Tracks orthopedic recovery and physiotherapy progress using motion sensors and AI-driven analytics."
            link="#"
            gradientColor="from-purple-600/30"
          />

          <Project
            name="Hospital Inpatient Monitoring"
            image="/img/inpatient_monitoring.png"
            logo="/img/medixmind_logo.png"
            category="AI Patient Safety"
            description="Provides alerts for unauthorized exits, fall prevention, and bed occupancy tracking."
            link="#"
            gradientColor="from-cyan-500/30"
          />

          <Project
            name="Home-Based Patient Monitoring"
            image="/img/home_monitoring.png"
            logo="/img/medixmind_logo.png"
            category="Remote Care AI"
            description="Enables GPS tracking for dementia patients and automated medication reminders."
            link="#"
            gradientColor="from-purple-600/30"
          />

          <Project
            name="Smart Shunt"
            image="/img/smart_shunt.png"
            logo="/img/medixmind_logo.png"
            category="NHS Collaboration"
            description="Developed for NHS hydrocephalus patients to monitor shunt activity and detect abnormalities using sensors."
            link="#"
            gradientColor="from-blue-500/30"
          />

          <Project
            name="AI Fall Detection System"
            image="/img/fall_detection.png"
            logo="/img/medixmind_logo.png"
            category="Patient Safety AI"
            description="Computer vision and sensor fusion technology to detect falls in hospitals and home care settings."
            link="#"
            gradientColor="from-cyan-500/30"
          />
        </div>
      </div>
    </section>
  );
}
