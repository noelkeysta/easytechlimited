import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Cpu, BatteryCharging, Camera, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import serviceImg from "@/assets/services-hardware.jpg";

const features = [
  {
    icon: Cpu,
    title: "IoT Smart Systems & Automation",
    desc: "Transform your facilities with intelligent IoT solutions that monitor, control, and optimize your environment in real-time. From smart building automation to industrial IoT deployments, we design end-to-end systems that reduce costs, improve efficiency, and provide actionable insights.",
    benefits: ["Smart building management systems", "Environmental monitoring (temperature, humidity, air quality)", "Industrial sensor networks and SCADA integration", "Automated alerts and real-time dashboards"],
  },
  {
    icon: BatteryCharging,
    title: "Inverter & UPS Installation",
    desc: "Protect your critical systems from power disruptions with professional inverter and UPS solutions. We assess your power requirements, recommend optimal equipment, and handle complete installation, configuration, and ongoing maintenance to ensure uninterrupted operations.",
    benefits: ["Power audit and load assessment", "Commercial and industrial UPS systems", "Solar inverter installation and integration", "Preventive maintenance and battery replacement programs"],
  },
  {
    icon: Camera,
    title: "CCTV & Access Control",
    desc: "Secure your premises with state-of-the-art surveillance and access control systems. We design, install, and maintain comprehensive security solutions with remote viewing capabilities, motion detection, and integration with existing security infrastructure.",
    benefits: ["HD and 4K IP camera systems", "Biometric and card-based access control", "Remote monitoring via mobile and web apps", "Integration with alarm and fire safety systems"],
  },
  {
    icon: Wrench,
    title: "IT Hardware & Servicing",
    desc: "Keep your IT infrastructure running at peak performance with our hardware procurement and servicing solutions. We supply, install, configure, and maintain computers, servers, printers, networking equipment, and other IT hardware for businesses of all sizes.",
    benefits: ["Hardware procurement and vendor management", "Server setup and rack installation", "Preventive maintenance schedules", "On-site and remote technical support"],
  },
];

const SystemsHardware = () => {
  return (
    <Layout>
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${serviceImg})` }} />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative container mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:underline">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-foreground mb-4">
            Systems & Hardware
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-navy-foreground/70 max-w-2xl text-lg leading-relaxed">
            From IoT automation to security systems and IT equipment — we provide the physical technology layer that keeps your business operational and secure.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-16">
          {features.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">{feature.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.desc}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-xl bg-secondary/50 border border-border p-8 flex items-center justify-center min-h-[250px] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <feature.icon className="w-24 h-24 text-primary/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-navy-gradient section-padding text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-4">Need Hardware Solutions?</h2>
          <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">From smart IoT deployments to CCTV and IT equipment — we've got you covered.</p>
          <Button asChild size="lg" className="gap-2"><Link to="/contact">Contact Us <ArrowRight size={18} /></Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default SystemsHardware;
