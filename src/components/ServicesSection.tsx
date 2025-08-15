import {
  Activity,
  Hospital,
  Home,
  Shield,
  Cpu,
  Bell,
  Database,
  Cloud,
  Brain,
  Layers,
  Network,
  BarChart3,
  Settings,
  Workflow,
} from "lucide-react";
import type { Locale } from "next-intl";
import Service from "./Service";
import { getTranslations } from "next-intl/server";

export default async function ServiceSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Services", locale: lang });

  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />

      <div className="container px-4 md:px-6 relative">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-300">
              Our Healthcare AI & IoT Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              AI-driven healthcare solutions combining medical expertise, IoT innovation, and scalable cloud platforms to improve patient safety, recovery, and operational efficiency.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Healthcare Applications */}

          <Service
            icon={<Activity className="h-8 w-8 text-cyan-300" />}
            name="Post-Surgery Rehabilitation Monitoring"
            description="Tracks orthopedic recovery and physiotherapy progress with AI insights for faster patient recovery."
          />
          <Service
            icon={<Hospital className="h-8 w-8 text-cyan-300" />}
            name="Hospital Inpatient Monitoring"
            description="Bed occupancy tracking, fall prevention, and unauthorized exit alerts for enhanced patient safety."
          />
          <Service
            icon={<Home className="h-8 w-8 text-cyan-300" />}
            name="Home-Based Patient Monitoring"
            description="GPS tracking for dementia patients, medication reminders, and remote health supervision."
          />
          <Service
            icon={<Cpu className="h-8 w-8 text-cyan-300" />}
            name="Smart Shunt Monitoring"
            description="Sensor-based deep learning system to monitor hydrocephalus patients' head activity and detect anomalies."
          />
          <Service
            icon={<Shield className="h-8 w-8 text-cyan-300" />}
            name="Fall Detection System"
            description="AI-powered fall detection for elderly and hospital patients, with instant caregiver alerts."
          />
          <Service
            icon={<Bell className="h-8 w-8 text-cyan-300" />}
            name="Custom AI Healthcare Solutions"
            description="Tailored AI and IoT solutions to meet your healthcare facility's unique requirements."
          />
          {/* AI & Machine Learning */}
          <Service
            icon={<Brain className="h-8 w-8 text-cyan-300" />}
            name="Machine Learning Solutions"
            description="Custom ML algorithms for predictive analytics, patient risk scoring, and operational efficiency."
          />
          <Service
            icon={<Cpu className="h-8 w-8 text-cyan-300" />}
            name="Deep Learning Systems"
            description="Computer vision and sensor-based deep learning models for patient monitoring and diagnostics."
          />
          <Service
            icon={<Workflow className="h-8 w-8 text-cyan-300" />}
            name="Generative AI Applications"
            description="AI-driven automation, report generation, chatbots, and clinical documentation assistants."
          />
          {/* Data & Integration */}
          <Service
            icon={<Database className="h-8 w-8 text-cyan-300" />}
            name="Clinical Data Management"
            description="Secure data collection, integration, and analysis from IoT devices, EMRs, and APIs."
          />
          <Service
            icon={<BarChart3 className="h-8 w-8 text-cyan-300" />}
            name="Healthcare Data Science"
            description="Advanced analytics and visualization for better decision-making in hospitals and clinics."
          />
          <Service
            icon={<Cloud className="h-8 w-8 text-cyan-300" />}
            name="Cloud Infrastructure & DevOps"
            description="HIPAA/GDPR-compliant deployment on AWS, Azure, or GCP with full scalability."
          />

          {/* Software & IoT */}
          <Service
            icon={<Layers className="h-8 w-8 text-cyan-300" />}
            name="Full-Stack SaaS Platforms"
            description="Custom healthcare SaaS applications integrating AI, dashboards, and real-time monitoring."
          />
          <Service
            icon={<Network className="h-8 w-8 text-cyan-300" />}
            name="IoT & Embedded Medical Devices"
            description="Integration of sensors, wearables, and hospital equipment for automated health tracking."
          />
          <Service
            icon={<Hospital className="h-8 w-8 text-cyan-300" />}
            name="Hospital Management Systems"description="End-to-end hospital software for patient records, staff management, billing, and AI-powered workflows."
          />
          {/* Technical Capabilities */}
          <Service
            icon={<Database className="h-8 w-8 text-cyan-300" />}
            name="Clinical Data Collection & Analytics"
            description="Securely capture, store, and analyze patient data from sensors, devices, and hospital systems."
          />
          <Service
            icon={<Layers className="h-8 w-8 text-cyan-300" />}
            name="Full-Stack SaaS Development"
            description="End-to-end SaaS platforms for healthcare, integrating backend, frontend, and AI modules."
          />
          <Service
            icon={<Cloud className="h-8 w-8 text-cyan-300" />}
            name="Cloud Infrastructure & Deployment"
            description="Deploy scalable healthcare solutions on AWS, Azure, or GCP with HIPAA/GDPR compliance."
          />
          <Service
            icon={<Network className="h-8 w-8 text-cyan-300" />}
            name="IoT Device Integration"
            description="Connect medical devices and wearables for real-time health tracking and automated alerts."
          />
          <Service
            icon={<Brain className="h-8 w-8 text-cyan-300" />}
            name="Predictive Health AI"
            description="Leverage machine learning to predict health risks and optimize patient care plans."
          />
        </div>
      </div>
    </section>
  );
}
