# Flo-Orders Download Site

A professional website for downloading the Flo-Orders mobile application for Android and iOS devices. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional interface with Flo Energy branding
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **App Downloads**: Official app store badges for Android and iOS downloads
- **100vh Hero Section**: Full-screen hero matching floenergy.net design
- **SEO Optimized**: Comprehensive meta tags, structured data, and social media optimization
- **PWA Ready**: Progressive Web App capabilities with manifest.json
- **Comprehensive Guide**: Detailed app usage instructions and troubleshooting
- **Company Information**: About Flo Energy with 70+ years of industry experience
- **Legal Pages**: Privacy Policy and Terms of Service
- **Contact & Support**: Multiple ways to get help and contact the team

## Pages

- **Home**: Hero section with download buttons and feature highlights
- **App Guide**: Step-by-step instructions for using Flo-Orders
- **About**: Flo Energy company information and services
- **Support**: FAQ, troubleshooting, and contact information
- **Contact**: Contact form and business information
- **Privacy Policy**: Data protection and privacy information
- **Terms of Service**: Legal terms and conditions

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## App Files Setup

To enable actual app downloads:

1. Replace the placeholder files in `public/downloads/` with your actual app files:
   - `flo-orders-android.apk` - Your Android APK file
   - `flo-orders-ios.ipa` - Your iOS IPA file (requires enterprise distribution)

2. For iOS distribution, consider:
   - App Store distribution (recommended)
   - Enterprise distribution (requires Apple Developer Enterprise Program)
   - TestFlight for beta testing

## Customization

### Branding Colors

The site uses Flo Energy brand colors defined in `tailwind.config.js`:

- **Primary**: Blue (#1e40af)
- **Secondary**: Green (#059669) 
- **Accent**: Red (#dc2626)
- **Dark**: Dark gray (#1f2937)
- **Light**: Light gray (#f8fafc)

### Contact Information

Update contact details in:
- `src/pages/Contact.tsx`
- `src/pages/Support.tsx`
- `src/components/Footer.tsx`

### Company Information

Update company details in:
- `src/pages/About.tsx`
- `src/pages/Home.tsx`

## SEO Features

The site is fully optimized for search engines:

- **Meta Tags**: Comprehensive title, description, and keyword optimization
- **Open Graph**: Facebook and social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing with images
- **Structured Data**: Schema.org markup for rich snippets
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Proper crawler directives
- **Canonical URLs**: Prevent duplicate content issues
- **PWA Manifest**: Progressive Web App capabilities
- **Dynamic SEO**: React Helmet for page-specific optimization

## Deployment

The site can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload to S3 bucket with static hosting

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2024 Flo Energy. All rights reserved.

## Support

For technical support or questions about this website:
- Email: sales1@floenergy.net
- Phone: +263 29 2461125-7

For Flo-Orders app accounts:
- Adrian King: +263 77 224 5578
- Nathan King: +263 71 221 3338
