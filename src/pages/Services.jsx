import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of agricultural services designed to meet the diverse needs of modern farming.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Farm Equipment & Machinery",
              description: "Latest agricultural machinery and equipment for efficient farming operations.",
              image: "https://images.unsplash.com/photo-1527847263472-aa5338d178b8",
              features: [
                "Modern tractors and implements",
                "Harvesting equipment",
                "Irrigation systems",
                "Maintenance services"
              ]
            },
            {
              title: "Seeds & Agricultural Inputs",
              description: "High-quality seeds and essential farming inputs for optimal crop yield.",
              image: "https://images.unsplash.com/photo-1611864581049-aca018410b97",
              features: [
                "Certified seed varieties",
                "Organic fertilizers",
                "Crop protection products",
                "Soil amendments"
              ]
            },
            {
              title: "Agricultural Consulting",
              description: "Expert guidance and consultation for improved farming practices.",
              image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
              features: [
                "Crop planning",
                "Soil testing",
                "Pest management",
                "Yield optimization"
              ]
            },
            {
              title: "Smart Farming Solutions",
              description: "Technology-driven solutions for precision agriculture.",
              image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7",
              features: [
                "GPS mapping",
                "Drone surveys",
                "IoT sensors",
                "Data analytics"
              ]
            }
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
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-primary mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button className="w-full">Learn More</button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-muted/50 p-8 rounded-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Why Choose Safal Agri Supplies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Expert Team", value: "20+ Years Experience" },
              { title: "Satisfied Clients", value: "1000+" },
              { title: "Products Range", value: "500+" },
              { title: "Service Locations", value: "50+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-4"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
