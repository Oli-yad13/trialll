# Kana TV Website

A modern, responsive website for Kana TV - Ethiopia's premier entertainment destination. Built with Next.js, Tailwind CSS, and Framer Motion, featuring Radical Face-inspired design with Nike-style hero sections.

## 🎯 Features

- **Radical Face-Inspired Design**: Collapsible sections with smooth animations
- **Nike-Style Hero Sections**: Bold, impactful typography and layouts
- **YouTube Integration**: Seamless playlist embeds with lazy loading
- **Responsive Design**: Perfect on desktop and mobile
- **CMS Integration**: Sanity CMS for content management
- **Performance Optimized**: Fast loading with modern web standards

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion + CSS transitions
- **CMS**: Sanity (headless CMS)
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **TypeScript**: Full type safety

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/
│   ├── animations/         # Animation components (CollapsibleSection)
│   ├── layout/            # Header, Footer, Layout components
│   ├── sections/          # Page sections (Hero, Featured, etc.)
│   ├── ui/                # Reusable UI components
│   └── youtube/           # YouTube embed components
├── constants/             # App constants and configuration
├── data/                  # Static data and mock content
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and Sanity client
├── styles/                # Global styles and CSS
├── types/                 # TypeScript type definitions
└── utils/                 # Helper functions
```

## 🎨 Design System

### Colors
- **Primary**: Pink gradient (#FF6B9D to #FF8E9B)
- **Secondary**: Deep pink (#E91E63)
- **Accent**: Light pink (#FFB3D1)
- **Neutral**: Charcoal (#2D2D2D), Light gray (#F5F5F5)

### Typography
- **Headings**: Inter (clean, modern sans-serif)
- **Body**: System UI fonts
- **Display**: Bold, impactful fonts for hero sections

### Animations
- **Collapsible Sections**: Smooth height transitions
- **Hover Effects**: Scale and shadow animations
- **Page Transitions**: Fade and slide animations
- **Micro-interactions**: Button and card animations

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kana-tv-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Fill in your Sanity project details and other configuration.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### Homepage
- **Hero Section**: Nike-style with featured content
- **Trending Now**: CMS-driven trending shows
- **Show Categories**: Radical Face-style collapsible sections
- **YouTube Integration**: Lazy-loaded playlist embeds

### Show Pages
- **Show Information**: Description, schedule, status
- **YouTube Playlist**: Auto-updating episode list
- **Related Shows**: Recommendation system

### About Page
- **Nike-Style Layout**: Balanced text and visuals
- **Brand Story**: Kana TV's mission and values
- **Team Information**: Key personnel and contributors

## 🎬 Content Management

### Sanity CMS Setup
1. Create a Sanity project
2. Set up content schemas for:
   - Shows (title, description, type, YouTube URL)
   - Events (title, date, location, type)
   - Blog Posts (title, content, author, tags)
   - Pages (title, content, SEO)

### Content Types
- **Shows**: Drama, Variety, Educational, Kids, Music, News, Documentary
- **Events**: Concerts, Festivals, Special Broadcasts, Warehouse Events
- **Blog Posts**: News, Updates, Behind-the-scenes
- **Pages**: About, Contact, Terms, Privacy

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Static site generation
- **AWS**: S3 + CloudFront
- **Custom VPS**: Docker + Nginx setup

## 📊 Performance

- **Core Web Vitals**: Optimized for fast loading
- **Lazy Loading**: YouTube embeds and images
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Caching**: Static generation where possible

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Code Style
- **ESLint**: Configured for Next.js
- **Prettier**: Code formatting
- **TypeScript**: Strict mode enabled
- **Tailwind**: Utility-first CSS

## 📈 Analytics

- **Vercel Analytics**: Page views and performance
- **Custom Events**: Show engagement, search queries
- **YouTube Analytics**: Video performance tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary to Kana TV. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: dev@kana.tv
- GitHub Issues: [Repository Issues](https://github.com/kana-tv/website/issues)

---

**Built with ❤️ for Kana TV**