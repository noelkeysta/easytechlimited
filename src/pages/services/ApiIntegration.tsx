import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap, CreditCard, Plug, Code, RefreshCw, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import serviceImg from "@/assets/services-api.jpg";

const features = [
  {
    icon: CreditCard,
    title: "Payment Gateway Integrations",
    desc: "We connect your platforms with leading payment providers including Airtel Money, TNM Mpamba, Visa, Mastercard, PayPal, Stripe, and local banking APIs. Our integrations ensure secure, PCI-compliant transactions with real-time processing and comprehensive reconciliation systems.",
    benefits: ["Mobile money integration (Airtel, TNM)", "International payment gateways (Stripe, PayPal)", "PCI DSS compliance implementation", "Transaction monitoring and reconciliation dashboards"],
  },
  {
    icon: Plug,
    title: "Third-Party API Connections",
    desc: "Extend your platform's capabilities by connecting with third-party services — from social media platforms and messaging services to logistics providers and government databases. We handle authentication, rate limiting, error handling, and data mapping for reliable integrations.",
    benefits: ["Social media and messaging API integration", "Logistics and shipping provider connections", "Government and regulatory system integrations", "OAuth 2.0 and secure authentication flows"],
  },
  {
    icon: Code,
    title: "Custom API Development",
    desc: "We design and build RESTful and GraphQL APIs that serve as the communication backbone for your digital ecosystem. Our APIs are documented, versioned, secured, and built to handle enterprise-scale traffic with comprehensive monitoring.",
    benefits: ["RESTful and GraphQL API design", "OpenAPI/Swagger documentation", "API versioning and lifecycle management", "Rate limiting, caching, and load balancing"],
  },
  {
    icon: RefreshCw,
    title: "System Interoperability",
    desc: "Break down data silos by connecting legacy systems with modern applications. We create middleware solutions, message queues, and data transformation pipelines that enable seamless communication between disparate systems — no matter how old or new they are.",
    benefits: ["Legacy system modernization bridges", "Message queue implementation (RabbitMQ, Kafka)", "Data transformation and ETL pipelines", "Real-time synchronization across platforms"],
  },
];

const ApiIntegration = () => {
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
            API Integration
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30">Core Expertise</span>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-navy-foreground/70 max-w-2xl text-lg leading-relaxed">
            Seamlessly connect your systems, platforms, and payment gateways. API integration is at the heart of what we do — making your technology ecosystem work as one.
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-4">Need an Integration?</h2>
          <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">Tell us what systems you need connected and we'll architect the perfect integration solution.</p>
          <Button asChild size="lg" className="gap-2"><Link to="/contact">Discuss Your Project <ArrowRight size={18} /></Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default ApiIntegration;
