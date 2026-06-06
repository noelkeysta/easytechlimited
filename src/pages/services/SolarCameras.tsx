import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Sun,
  Smartphone,
  Signal,
  Mic,
  Bell,
  Moon,
  Cloud,
  HardDrive,
  Eye,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import serviceImg from "@/assets/services-solar-camera.jpg";

const features = [
  { icon: Camera, title: "6K Ultra HD Resolution", desc: "Crystal-clear video quality for day and night monitoring." },
  { icon: Sun, title: "100% Solar Powered", desc: "Operates using the included solar panel — no electricity connection required." },
  { icon: Smartphone, title: "Remote Viewing Anywhere", desc: "View live footage from your smartphone via the V380 app, from anywhere in the world." },
  { icon: Signal, title: "SIM Card Connectivity", desc: "Camera uses a SIM card for internet access — works with mobile data from your preferred network." },
  { icon: Mic, title: "Two-Way Audio", desc: "Listen and speak through the camera using your phone." },
  { icon: Bell, title: "Motion Detection & Alerts", desc: "Receive instant notifications when movement is detected." },
  { icon: Moon, title: "Day & Night Vision", desc: "Clear visibility during both daytime and nighttime." },
  { icon: Cloud, title: "Cloud Storage Support", desc: "Record and save footage to the cloud, accessible remotely through the app." },
  { icon: HardDrive, title: "SD Card Support", desc: "Optional Micro SD card for local recording — continuous storage without a cloud subscription." },
  { icon: Eye, title: "Wide-Angle Coverage", desc: "Multiple lenses provide extensive surveillance coverage around your property." },
];

const included = [
  "Camera unit",
  "Solar panel",
  "Professional installation and setup",
  "Mobile app configuration",
  "Customer training on how to use the camera",
];

const SolarCameras = () => {
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
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-heading text-sm uppercase tracking-widest mb-3">
            EasyTech V380 Solar-Powered Camera
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-foreground mb-4">
            Solar-Powered 6K Security Cameras
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-navy-foreground/70 max-w-2xl text-lg leading-relaxed">
            Secure your home or business with reliable, high-definition surveillance — no electricity required. Powered by solar and connected via SIM, monitor your property anytime, anywhere from your smartphone.
          </motion.p>
        </div>
      </section>

      {/* Price & What's Included */}
      <section className="section-padding bg-background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-8 md:p-10"
          >
            <p className="text-primary font-heading text-sm uppercase tracking-widest mb-3">Price</p>
            <p className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">MWK 450,000</p>
            <p className="text-muted-foreground">All-inclusive package with installation and training.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-8 md:p-10"
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Price Includes</h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-heading text-sm uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Key Features</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <f.icon className="w-9 h-9 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary font-heading text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Two Recording Options</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Both options can be used simultaneously.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-8">
              <Cloud className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">Option 1: Cloud Recording</h3>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground text-sm">
                <li>Insert a SIM card with an active data bundle.</li>
                <li>Connect the camera to the V380 mobile app.</li>
                <li>Subscribe to cloud storage (if required).</li>
                <li>View live footage and recordings from anywhere.</li>
              </ol>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <HardDrive className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">Option 2: SD Card Recording</h3>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground text-sm">
                <li>Insert a Micro SD card into the camera.</li>
                <li>Footage will be recorded directly onto the SD card.</li>
                <li>Access recordings through the mobile app.</li>
              </ol>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-foreground">
              <Signal className="inline w-5 h-5 text-primary mr-2 align-text-bottom" />
              <span className="font-semibold">Data Bundle Required:</span> Because the camera streams live video to your phone, a SIM card with an active data bundle is required.
            </p>
          </div>
        </div>
      </section>

      {/* App Setup */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <p className="text-primary font-heading text-sm uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Mobile App Setup</h2>
          </motion.div>
          <ol className="space-y-4">
            {[
              "Download the V380 Pro app from the Google Play Store (Android) or Apple App Store (iPhone).",
              "Create an account.",
              "Scan the QR code on the camera.",
              "Follow the setup instructions provided by our technician.",
              "Start monitoring your property instantly.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm shrink-0">{i + 1}</span>
                <span className="text-foreground pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Installation & Support */}
      <section className="section-padding bg-background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Installation by EasyTech</h3>
            <p className="text-muted-foreground mb-6">Our team will handle everything end-to-end:</p>
            <ul className="space-y-3">
              {[
                "Install the camera in the optimal location",
                "Mount the solar panel for maximum sunlight exposure",
                "Configure the SIM card connection",
                "Connect the camera to your smartphone",
                "Test live viewing and recording functions",
                "Provide user guidance before completion",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Support — 3 Months</h3>
            <p className="text-muted-foreground leading-relaxed">
              EasyTech provides installation support and guidance to ensure your camera is operating correctly. Our team is available to assist with setup questions and basic troubleshooting for the first 3 months.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient section-padding text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-4">Ready to Secure Your Property?</h2>
          <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">Get in touch to order your EasyTech Solar-Powered 6K Security Camera today.</p>
          <Button asChild size="lg" className="gap-2"><Link to="/contact">Contact Us <ArrowRight size={18} /></Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default SolarCameras;
