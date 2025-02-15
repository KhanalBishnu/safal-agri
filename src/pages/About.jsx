import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About Safal Agri Supplies</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are dedicated to empowering farmers with innovative agricultural solutions and quality products that drive sustainable growth and prosperity.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To provide farmers with cutting-edge agricultural solutions and superior products that enhance productivity and sustainability while ensuring environmental responsibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the leading agricultural solutions provider, transforming farming practices and contributing to global food security through innovation and excellence.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sagar Khanal",
                role: "CEO & Founder",
                image: "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/473638921_2524512117747471_6579420870052055810_n.jpg?stp=c0.139.1628.1628a_cp6_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=0CqlG1ptEFsQ7kNvgFaMMW_&_nc_oc=AdiCedzb5q4PM-9VPyYc-hixz1HAO0e_4Yhf-fKfD2KMrmE0c5gdXajiS4TXxsSmTnQ9nC1lQ0KvWT6TBCqST3Eb&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=AaoqyZ47BKNF_tgAa1_ZSLK&oh=00_AYAfLghWMk2sWrkJ1MEyk4Hteg9ZfLIvne7XhjVGNIYySw&oe=67B6B08E",
              },
              {
                name: "Sagar Khanal",
                role: "Agricultural Expert",
                image: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/45474933_877214782477221_2890685415965065216_n.jpg?stp=c364.0.936.936a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=dWfoZtMgQg8Q7kNvgFqIIgU&_nc_oc=Adh8qgmd_sauOVvb488fY7c743Ba9Ujx6JfOfFpTxFUiKh_wyimmdC-ATdCI3g4FZ0_Y_Usr7pcEVXnTMs-cGk62&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=ARovREg-s3-C5onVUleai9w&oh=00_AYC5w7QgBJg1z6QR8nOgJwirbUNfijONB3av2Ry3zfiGUg&oe=67D85A45",
              },
              {
                name: "Sagar Khanal",
                role: "Technical Director",
                image: "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* History Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-muted/50 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: "2010", title: "Company Founded", description: "Started with a vision to revolutionize agricultural supplies." },
              { year: "2015", title: "Market Expansion", description: "Expanded operations to cover multiple regions." },
              { year: "2018", title: "Innovation Center", description: "Established our first agricultural research center." },
              { year: "2023", title: "Digital Transformation", description: "Launched digital farming solutions and online services." },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="font-bold text-xl text-primary w-24">{milestone.year}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
