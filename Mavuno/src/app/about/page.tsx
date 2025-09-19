"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Header from "@/components/layout/Header"
import ScrollTextFill from "@/components/ui/ScrollTextFill";
// import image1 from "../../assets/Screenshot 2025-09-04 184708.png";
// import image2 from "../../assets/Screenshot 2025-09-04 184720.png";
// import image3 from "../../assets/Screenshot 2025-09-04 184731.png";


export default function AboutPage() {
  const imageFrameRef = useRef(null)


  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm text-gray-500 mb-8 font-medium tracking-wider">
              About Mavuno
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight mb-8">
              We Believe in a Future<br />
              Where Every Farmer<br />
              Can Thrive.
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mavuno was born from a simple belief: that the immense resilience of Africa&apos;s farmers, 
              when combined with the power of technology, can create a sustainable and prosperous 
              future for the entire continent. We are a team of technologists, agronomists, and 
              community leaders—rooted in Ethiopia, with a vision for Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Frame Section */}
      <section ref={imageFrameRef} className="py-20 bg-white">
        <div className="max-w-none w-full h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 bg-white"
            >
              <div className="max-w-2xl mx-auto px-4">
                
                <ScrollTextFill text={`Built by the industry, for the industry<br><br>For decades, the primary challenge in agriculture has been defined by physical inputs: seeds, water, fertilizer. While essential, this focus overlooks the most critical variable: information. Climate volatility has rendered traditional knowledge unreliable, creating a systemic information vacuum. This leads to profound inefficiency, wasted resources, and suppressed economic potential across the continent. Existing digital solutions have failed to bridge this gap, often creating complex tools for markets that require radical simplicity.`} />
              </div>
            </motion.div>
            
            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              <div className="relative overflow-hidden h-full w-full" style={{
                clipPath: 'polygon(40px 0%, 100% 0%, 100% 100%, 40px 100%, 40px 90%, 60px 85%, 60px 15%, 40px 10%)'
              }}>
                                  <Image 
                    src="/about-01.jpg"
                    alt="Mavuno Farm Intelligence Dashboard"
                    fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flipped Image Frame Section */}
      <section className="py-20 bg-white">
        <div className="max-w-none w-full h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              <div className="relative overflow-hidden h-full w-full" style={{
                clipPath: 'polygon(0% 0%, calc(100% - 40px) 0%, calc(100% - 40px) 10%, calc(100% - 60px) 15%, calc(100% - 60px) 85%, calc(100% - 40px) 90%, calc(100% - 40px) 100%, 0% 100%)'
              }}>
                                  <Image 
                    src="/about-02.jpg"
                    alt="Mavuno AI Analytics Interface"
                    fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 bg-white"
            >
              <div className="max-w-2xl mx-auto px-4">
                {/* Section number */}
                <div className="text-sm font-semibold text-gray-500 mb-4 tracking-wider">
                  02
                </div>
                
                <ScrollTextFill text={`Based on Proven Methods<br><br>We believe the solution is not merely to digitize agriculture, but to make it intelligent. This requires a new approach: one that fuses hyperlocal, ground-truth sensor data with broad-spectrum satellite analysis. By building proprietary AI models trained on this unique, multi-layered dataset, we can translate immense complexity into simple, actionable directives. This is the core of Mavuno: we provide the intelligence that unlocks optimal decision-making at scale.`} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Image Frame Section */}
      <section className="py-20 bg-white">
        <div className="max-w-none w-full h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 bg-white"
            >
                <div className="text-sm font-semibold text-gray-500 mb-4 tracking-wider">
                  03
                </div>
                
                <div className="max-w-2xl mx-auto px-4">
                
                <ScrollTextFill text={`Engineered for Economic Resilience<br><br>Even with perfect agronomic intelligence, a farmer's potential is constrained by a disconnected and risk-averse financial system. A successful harvest has little value without access to fair markets, and a single climate shock can erase progress without a financial safety net. Mavuno engineers a solution for this by integrating the entire value chain. Our platform serves as a trusted data layer for financial partners, unlocking access to tailored loans and crop insurance. Simultaneously, it connects farmers directly to pre-vetted buyers, ensuring their hard work translates into predictable, profitable outcomes. We are not just optimizing the farm; we are building the financial infrastructure for a resilient agricultural economy.`} />
              </div>
            </motion.div>
            
            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              <div className="relative overflow-hidden h-full w-full" style={{
                clipPath: 'polygon(40px 0%, 100% 0%, 100% 100%, 40px 100%, 40px 90%, 60px 85%, 60px 15%, 40px 10%)'
              }}>
                                  <Image 
                    src="/about-03.jpg"
                    alt="Mavuno Financial Integration Platform"
                    fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Our Story, Our Values Section */}
      <section className="py-32 bg-white relative">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              Our story, our values
            </h2>
          </motion.div>

          {/* Two Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-xl text-gray-800 leading-relaxed">
                  Every day, millions of farmers across Africa face the challenge of feeding a growing population while dealing with climate volatility, limited resources, and disconnected markets. While other industries have embraced digital transformation, agriculture remains largely analog—relying on traditional knowledge and outdated tools. The result? Wasted potential, environmental degradation, and millions trapped in poverty.
                </p>
                
                <div className="py-4">
                  <p className="text-2xl text-gray-900 leading-tight font-bold">
                    Mavuno is reinventing agriculture.
                  </p>
                </div>
                
                <p className="text-xl text-gray-800 leading-relaxed">
                  We are building Africa&apos;s first AI-powered, hyperlocal Farm Intelligence Platform—designed to digitize, analyze, and optimize farm operations from seed to sale. Our platform connects real-time sensor data, satellite imagery, and predictive AI into one seamless layer of intelligence. From irrigation scheduling and pest prediction to financial modeling and market linkage, Mavuno delivers rapid ROI: increasing yields, conserving water, and unlocking new income for the continent&apos;s most vital producers.
                </p>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-xl text-gray-800 leading-relaxed">
                  With backing from leading investors and partnerships with several of the top agricultural organizations across Africa, Mavuno is building with farmers, for farmers—setting the new standard for a resilient and profitable agricultural future.
                </p>
                
                <p className="text-xl text-gray-800 leading-relaxed">
                  Our platform delivers rapid ROI through increased yields, water conservation, and new income opportunities. We&apos;re not just optimizing individual farms—we&apos;re building the digital infrastructure for Africa&apos;s agricultural transformation.
                </p>
                
                <p className="text-xl text-gray-800 leading-relaxed">
                  From smallholder farmers to large agricultural enterprises, Mavuno provides the intelligence needed to make data-driven decisions that maximize both productivity and sustainability across the entire value chain.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
