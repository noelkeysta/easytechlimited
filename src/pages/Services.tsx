import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code, Database, Smartphone, Brain,
  Cloud, Network, Shield, Monitor,
  Zap, CreditCard, Plug, RefreshCw,
  Cpu, BatteryCharging, Camera, Wrench,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const categories = [
  {
    title: "Software & Data",
    icon: Code,
    color: "text-primary",
    items: [
      { icon: Code, label: "Custom Software Development" },
      { icon: Smartphone, label: "Web & Mobile Applications" },
      { icon: Database, label: "Data Analytics & BI" },
      { icon: Brain, label: "AI & ML Integration" },
    ],
  },
  {
    title: "Infrastructure & Security",
    icon: Cloud,
    color: "text-primary",
    items: [
      { icon: Cloud, label: "Cloud Setup, Migration & Management" },
      { icon: Network, label: "Network Design & Optimization" },
      { icon: Shield, label: "Cybersecurity Solutions" },
      { icon: Monitor, label: "Remote Workspace Tools" },
    ],
  },
  {
    title: "API Integration",
    icon: Zap,
    color: "text-primary",
    badge: "Core Expertise",
    items: [
      { icon: CreditCard, label: "Payment Gateway Integrations" },
      { icon: Plug, label: "Third-Party API Connections" },
      { icon: Code, label: "Custom API Development" },
      { icon: RefreshCw, label: "System Interoperability" },
    ],
  },
  {
    title: "Systems & Hardware",
    icon: Cpu,
    color: "text-primary",
    items: [
      { icon: Cpu, label: "IoT Smart Systems & Automation" },
      { icon: BatteryCharging, label: "Inverter & UPS Installation" },
      { icon: Camera, label: "CCTV & Access Control" },
      { icon: Wrench, label: "IT Hardware & Servicing" },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy-gradient py-32 md:py-40 text-center px-6">
        <div className="container mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-heading text-sm uppercase tracking-widest mb-3"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground mb-4"
          >
            What We Offer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-navy-foreground/70 max-w-2xl mx-auto text-lg"
          >
            Comprehensive technology solutions tailored to your business needs — from
            custom software to secure infrastructure and seamless API integrations.
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              className="p-8 rounded-xl border border-border bg-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <cat.icon className={`w-8 h-8 ${cat.color}`} />
                <h2 className="font-heading font-bold text-2xl text-card-foreground">{cat.title}</h2>
                {cat.badge && (
                  <span className="ml-2 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {cat.badge}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-accent transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient section-padding text-center">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">
              Tell us about your project and we'll craft the perfect technology stack for your business.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Let's Talk <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
