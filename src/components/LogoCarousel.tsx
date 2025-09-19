'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  { name: 'CBGA', file: 'CBGA GS.png' },
  { name: 'CSRC', file: 'CSRC GS.png' },
  { name: 'Farm Africa', file: 'Farm Africa GS.png' },
  { name: 'Grofit', file: 'Grofit GS.png' },
  { name: 'Heal Venture', file: 'Heal Venture GS.png' },
  { name: 'Innovit', file: 'Innovit GS.png' },
  { name: 'JDC', file: 'JDC GS.png' },
  { name: 'Legehar Hospital', file: 'Legehar Hosp GS.png' },
  { name: 'Momentous', file: 'Momentous GS.png' },
  { name: 'Santim Pay', file: 'Santim Pay GS.png' },
  { name: 'SAS Pharmacy', file: 'SAS Phramacy GS.png' },
  { name: 'Serum Skin Care', file: 'Serum Skin Care GS.png' },
  { name: 'Smile Dental', file: 'Smile Dental GS.png' },
  { name: 'Tenadam', file: 'Tenadam GS.png' },
  { name: 'YieldsApp', file: 'YieldsApp GS.png' },
];

export default function LogoCarousel() {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#294C60] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#294C60] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: [0, -(264 + 32) * logos.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 h-24 w-64 relative opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={`/client logos/Client logos/${logo.file}`}
              alt={logo.name}
              fill
              className="object-contain filter brightness-0 invert"
              sizes="256px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}