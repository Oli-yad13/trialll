import { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us - Birrama Creative Agency',
  description: 'Get in touch with Birrama for your next creative project. We specialize in brand identity, digital marketing, web design, and video production.',
  openGraph: {
    title: 'Contact Us - Birrama Creative Agency',
    description: 'Get in touch with Birrama for your next creative project.',
    type: 'website',
  },
};

export default function Contact() {
  return <ContactPage />;
}