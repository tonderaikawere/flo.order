import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export default function SEO({
  title = 'Flo-Orders Mobile App Download | Flo Energy Zimbabwe Fuel Management',
  description = 'Download Flo-Orders mobile app for Android and iOS. Professional fuel ordering and management solution by Flo Energy Zimbabwe. 70+ years of fuel industry experience.',
  keywords = 'Flo Orders, Flo Energy, fuel ordering app, mobile fuel management, Android fuel app, iOS fuel app, Zimbabwe fuel, bulk fuel ordering, energy management, fuel delivery, Flo Energy Zimbabwe',
  image = '/images/flo-logo.png',
  url = 'https://flo-orders.floenergy.net/',
  type = 'website'
}: SEOProps) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
