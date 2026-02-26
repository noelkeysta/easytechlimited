import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Clock, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import aboutBg from "@/assets/about-bg.jpg";
import teamImg from "@/assets/team.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutBg})` }} />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-heading text-sm uppercase tracking-widest mb-3">
            About Us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-navy-foreground mb-4">
            Who We Are
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-navy-foreground/70 max-w-2xl mx-auto text-base sm:text-lg">
            Easy Technologies Limited is a premier consultancy firm specializing in technology solutions and expert API integrations for businesses and public sector clients across Malawi and beyond.
          </motion.p>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 sm:h-80 lg:h-[500px]">
            <img src={teamImg} alt="Easy Technologies Team" className="w-full h-full object-cover" />
          </div>
          <div className="bg-background flex items-center p-8 md:p-12 lg:p-16">
            <div>
              <p className="text-primary font-heading text-sm uppercase tracking-widest mb-3">Our Team</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                Expert Consultants, Real Results
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of seasoned technology consultants brings decades of combined experience across software engineering, cloud architecture, cybersecurity, and API integration. We're passionate about solving complex technical challenges and delivering solutions that make a tangible difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Lilongwe, Malawi, we serve clients across the region and internationally, bringing world-class technology expertise to businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 md:p-8 rounded-xl border border-border bg-card">
            <Eye className="w-10 h-10 text-primary mb-5" />
            <h3 className="font-heading font-semibold text-xl text-card-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Shape a future where technology empowers all communities and businesses through innovative, scalable, and sustainable solutions.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 md:p-8 rounded-xl border border-border bg-card">
            <Target className="w-10 h-10 text-primary mb-5" />
            <h3 className="font-heading font-semibold text-xl text-card-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empower clients with exceptional IT infrastructure, consulting services, and cutting-edge technology that boosts efficiency, connectivity, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality & Support */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
            <p className="text-primary font-heading text-sm uppercase tracking-widest mb-3">Our Commitment</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">Quality & Support</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Quality Assurance", desc: "Strict quality, reliability, and security standards with rigorous control protocols to exceed expectations." },
              { icon: Clock, title: "Timely Delivery", desc: "Continuous improvement through client feedback with timely project delivery within budget." },
              { icon: HeadphonesIcon, title: "24hr Support", desc: "Email, phone, live chat, and support portal with urgent issues receiving immediate attention." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 md:p-8 rounded-xl bg-card border border-border text-center">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-5" />
                <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient section-padding text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-4">Work With Us</h2>
          <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">Discover how Easy Technologies can help transform your business with innovative technology solutions.</p>
          <Button asChild size="lg" className="gap-2"><Link to="/contact">Get In Touch <ArrowRight size={18} /></Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
