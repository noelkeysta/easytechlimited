import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Cloud, Network, Shield, Monitor, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import serviceImg from "@/assets/services-cloud.jpg";

const features = [
  {
    icon: Cloud,
    title: "Cloud Setup, Migration & Management",
    desc: "We help businesses move to the cloud with confidence. Whether you're migrating from on-premises infrastructure or optimizing your existing cloud environment, our certified engineers ensure zero-downtime transitions and cost-efficient architectures across AWS, Azure, and Google Cloud.",
    benefits: ["Multi-cloud strategy planning", "Lift-and-shift and re-architecture migrations", "Cost optimization and resource monitoring", "24/7 cloud infrastructure management"],
  },
  {
    icon: Network,
    title: "Network Design & Optimization",
    desc: "Build reliable, high-performance networks that connect your teams and systems. We design, implement, and optimize LAN, WAN, and wireless networks to ensure maximum uptime, throughput, and security for your organization.",
    benefits: ["Network architecture and topology design", "SD-WAN implementation", "Performance monitoring and optimization", "VPN and secure remote access"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    desc: "Protect your business from evolving threats with our comprehensive cybersecurity services. From vulnerability assessments to incident response, we provide multi-layered security strategies that safeguard your data, applications, and reputation.",
    benefits: ["Penetration testing and vulnerability assessments", "Firewall and intrusion detection systems", "Security awareness training", "Compliance and regulatory support (ISO 27001, GDPR)"],
  },
  {
    icon: Monitor,
    title: "Remote Workspace Tools",
    desc: "Empower your workforce with secure, productive remote work environments. We deploy and manage collaboration platforms, virtual desktops, and unified communications tools that keep your teams connected and efficient from anywhere.",
    benefits: ["Microsoft 365 and Google Workspace deployment", "Virtual Desktop Infrastructure (VDI)", "Video conferencing and unified communications", "Endpoint security for remote devices"],
  },
];

const InfrastructureSecurity = () => {
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
            Infrastructure & Security
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-navy-foreground/70 max-w-2xl text-lg leading-relaxed">
            Reliable infrastructure and robust security form the backbone of every successful digital operation. We build and protect yours.
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-4">Secure Your Infrastructure Today</h2>
          <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">Let us assess your current setup and build a stronger, safer digital foundation.</p>
          <Button asChild size="lg" className="gap-2"><Link to="/contact">Get Started <ArrowRight size={18} /></Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default InfrastructureSecurity;
