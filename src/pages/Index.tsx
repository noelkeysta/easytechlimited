import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cloud, Shield, Cpu, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Code,
    title: "Software & Data",
    desc: "Custom software, web & mobile apps, data analytics, and AI/ML integration.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Cloud migration, network optimization, and remote workspace tools.",
  },
  {
    icon: Zap,
    title: "API Integration",
    desc: "Payment gateways, third-party APIs, custom development, and system interoperability.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect your business data and infrastructure.",
  },
  {
    icon: Cpu,
    title: "Systems & Hardware",
    desc: "IoT automation, inverter & UPS installation, CCTV, and IT hardware servicing.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    desc: "Strategic technology advisory to drive your digital transformation journey.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-navy/80" />

        <div className="relative container mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-4"
            >
              Easy Technologies Limited
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-navy-foreground leading-tight mb-6"
            >
              Technology Solutions
              <br />
              <span className="text-gradient">That Empower</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-navy-foreground/70 max-w-xl mb-8 leading-relaxed"
            >
              Premier consultancy firm specializing in expert API integrations
              and cutting-edge digital solutions for businesses across Malawi and beyond.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/services">
                  Explore Services <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy-foreground/20 text-navy-foreground hover:bg-navy-foreground/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Core Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to="/services"
                  className="group block p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <service.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient section-padding">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">
              Let's discuss how our technology solutions can drive your digital
              transformation and accelerate growth.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Get In Touch <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
