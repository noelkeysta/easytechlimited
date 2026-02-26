import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code, Database, Smartphone, Brain, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import serviceImg from "@/assets/services-software.jpg";

const features = [
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "We build tailor-made software solutions designed to address your unique business challenges. From enterprise resource planning (ERP) systems to customer relationship management (CRM) platforms, our team delivers robust, scalable applications that grow with your organization.",
    benefits: ["Bespoke solutions aligned to your workflows", "Agile development methodology", "Full-stack expertise across modern technologies", "Ongoing maintenance and support"],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    desc: "Reach your customers wherever they are with responsive web applications and native mobile apps for iOS and Android. We design intuitive user experiences backed by powerful backend systems to ensure seamless performance across all devices.",
    benefits: ["Cross-platform development (React Native, Flutter)", "Progressive Web Apps (PWA)", "UI/UX design and prototyping", "App store submission and management"],
  },
  {
    icon: Database,
    title: "Data Analytics & Business Intelligence",
    desc: "Turn raw data into actionable insights with our data analytics and BI solutions. We help businesses collect, process, and visualize data to make informed strategic decisions, optimize operations, and identify growth opportunities.",
    benefits: ["Dashboard design and implementation", "ETL pipeline development", "Predictive analytics models", "Real-time reporting systems"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Integration",
    desc: "Leverage the power of artificial intelligence and machine learning to automate processes, enhance customer experiences, and uncover hidden patterns in your data. Our AI solutions are practical, deployable, and designed for real business impact.",
    benefits: ["Natural language processing (NLP)", "Computer vision solutions", "Recommendation engines", "Process automation with ML"],
  },
];

const SoftwareData = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${serviceImg})` }} />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative container mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:underline">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-foreground mb-4"
          >
            Software & Data
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-navy-foreground/70 max-w-2xl text-lg leading-relaxed"
          >
            From custom applications to intelligent data solutions, we build the digital tools
            that power modern businesses and drive measurable results.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
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

      {/* CTA */}
      <section className="bg-navy-gradient section-padding text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-4">
            Ready to Build Your Solution?
          </h2>
          <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">
            Let's discuss your software and data needs. Our team is ready to turn your vision into reality.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/contact">Get a Quote <ArrowRight size={18} /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SoftwareData;
