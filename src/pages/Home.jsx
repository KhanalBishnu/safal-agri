import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            खेतिको कुरा गरौ, कुराको खेति नगरौ |
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your trusted partner in agricultural solutions, providing quality products and expert services.
            </p>
            <Link href="/contact">
              {/* <Button size="lg" className="bg-primary text-white">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Featured Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive agricultural solutions to help farmers maximize their productivity and profitability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Farm Equipment",
                image: "https://images.unsplash.com/photo-1527847263472-aa5338d178b8",
                description: "Modern machinery for efficient farming",
              },
              {
                title: "Quality Seeds",
                image: "https://images.unsplash.com/photo-1611864581049-aca018410b97",
                description: "High-yield crop varieties for better harvests",
              },
              
              {
                title: "Expert Consultation",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
                description: "Professional guidance for your agricultural needs",
              },
              {
                title: "Expert Consultation",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXcbqhkB2-ywefWQ0VLX3tf8AJleFIHEoVw&s",
                description: "Professional guidance for your agricultural needs",
              },
              {
                title: "Quality Seeds",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUPhCrUPNyht9gMYWZFBpCBq5yHOwPgWgUA&s",
                description: "High-yield crop varieties for better harvests",
              },
              {
                title: "Farm Equipment",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFVt_-R8Fz3S0ZvT06IwSS7y8_RozDjjW6g&s",
                description: "Modern machinery for efficient farming",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary rounded-lg p-8 md:p-12 text-center text-dark"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied farmers who trust Safal Agri Supplies for their agricultural needs.
            </p>
            <Link href="/contact">
              {/* <Button size="lg" variant="secondary">
                Contact Us Today
              </Button> */}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
