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
import softwareImg from "@/assets/services-software.jpg";
import cloudImg from "@/assets/services-cloud.jpg";
import apiImg from "@/assets/services-api.jpg";
import hardwareImg from "@/assets/services-hardware.jpg";

const categories = [
  {
    title: "Software & Data",
    slug: "/services/software-data",
    icon: Code,
    image: softwareImg,
    items: [
      { icon: Code, label: "Custom Software Development" },
      { icon: Smartphone, label: "Web & Mobile Applications" },
      { icon: Database, label: "Data Analytics & BI" },
      { icon: Brain, label: "AI & ML Integration" },
    ],
  },
  {
    title: "Infrastructure & Security",
    slug: "/services/infrastructure-security",
    icon: Cloud,
    image: cloudImg,
    items: [
      { icon: Cloud, label: "Cloud Setup, Migration & Management" },
      { icon: Network, label: "Network Design & Optimization" },
      { icon: Shield, label: "Cybersecurity Solutions" },
      { icon: Monitor, label: "Remote Workspace Tools" },
    ],
  },
  {
    title: "API Integration",
    slug: "/services/api-integration",
    icon: Zap,
    image: apiImg,
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
    slug: "/services/systems-hardware",
    icon: Cpu,
    image: hardwareImg,
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
      <section className="bg-navy-gradient py-28 md:py-36 text-center px-6">
        <div className="container mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-heading text-sm uppercase tracking-widest mb-3">
            Our Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground mb-4">
            What We Offer
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-navy-foreground/70 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions tailored to your business needs — from
            custom software to secure infrastructure and seamless API integrations.
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
            >
              <Link
                to={cat.slug}
                className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Image */}
                  <div className="relative h-48 lg:h-auto overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/40" />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <cat.icon className="w-7 h-7 text-primary" />
                      <h2 className="font-heading font-bold text-xl md:text-2xl text-card-foreground">{cat.title}</h2>
                      {cat.badge && (
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                          {cat.badge}
                        </span>
                      )}
                      <ArrowRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.items.map((item) => (
                        <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                          <item.icon className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm text-foreground">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-primary font-medium group-hover:underline">
                      Learn more →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient section-padding text-center">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">Tell us about your project and we'll craft the perfect technology stack for your business.</p>
            <Button asChild size="lg" className="gap-2"><Link to="/contact">Let's Talk <ArrowRight size={18} /></Link></Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
