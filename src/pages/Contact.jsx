import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "postcss";
// import textarea from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
// import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const formData = new FormData(e.currentTarget);
//       const data = {
//         name: formData.get("name"),
//         email: formData.get("email"),
//         phone: formData.get("phone"),
//         message: formData.get("message"),
//       };

//       await apiRequest("POST", "/api/contact", data);
      
//       toast({
//         title: "Message Sent",
//         description: "We'll get back to you as soon as possible.",
//       });
      
//       (e.target as HTMLFormElement).reset();
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to send message. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

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
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us for any inquiries about our agricultural products and services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full"
                  disabled=""
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Agriculture Road<br />
                      Farming District<br />
                      Agricultural State, 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@safalagri.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573496130141-209d200cebd8"
                alt="Customer Service Team"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">Professional Support</h3>
              <p className="text-muted-foreground">
                Our dedicated team of agricultural experts is ready to assist you with any questions or concerns you may have.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
