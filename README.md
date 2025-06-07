# EcoNova - By Rajinder Kumar 
Hi I’m a Full Stack Developer with experience in modern web technologies like React, Next.js, Node.js, TypeScript, and more. I love building scalable, clean, and user-friendly applications—and this project showcases my skills in working with headless CMS and frontend architecture


---

## 🌐 Live Deployment Link

🔗 [EcoNova Landing Page  (Deployed on Vercel)](https://eco-nova-assignment.vercel.app/)

---

## 🌟 Features

- **Dynamic Content Management**: All content managed through Contentful CMS
- **Modular Architecture**: Section-based components that can be rearranged in Contentful
- **Multi-language Support**: English and Spanish localization
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Image optimization, caching, and lazy loading
- **Accessibility Compliant**: WCAG 2.1 AA standards
- **Content Preview**: Live preview for editors before publishing
- **SEO Optimized**: Dynamic meta tags and structured data

## 🏗️ Architecture Overview

### Content Model Structure

The project uses a flexible, section-based content model in Contentful:

```
Landing Page
├── Hero Section
├── Features Section
├── Testimonials Section
├── CTA Section
└── Footer
```

Each section is a separate content type that can be independently managed and reordered.

### Technical Stack

- **Frontend**: Next.js 13+ with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Contentful with GraphQL API
- **Animations**: Framer Motion for smooth interactions
- **State Management**: React hooks and Apollo Client for data fetching
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel/Netlify



### 1. Contentful Setup I Used


##### Landing Page
- **Fields**:
  - Title (Short text)
  - Slug (Short text, unique)
  - SEO Title (Short text)
  - SEO Description (Long text)
  - Sections (References, many - Links to section content types)

##### Hero Section
- **Fields**:
  - Title (Short text)
  - Subtitle (Short text, optional)
  - Description (Long text)
  - Primary Button Text (Short text)
  - Primary Button URL (Short text)
  - Secondary Button Text (Short text, optional)
  - Secondary Button URL (Short text, optional)
  - Background Image (Media)

##### Features Section
- **Fields**:
  - Title (Short text)
  - Subtitle (Short text, optional)
  - Features (References, many - Links to Feature content type)

##### Feature
- **Fields**:
  - Title (Short text)
  - Description (Long text)
  - Icon (Short text - icon name from Lucide)
  - Image (Media, optional)

##### Testimonials Section
- **Fields**:
  - Title (Short text)
  - Subtitle (Short text, optional)
  - Testimonials (References, many - Links to Testimonial content type)

##### Testimonial
- **Fields**:
  - Name (Short text)
  - Role (Short text)
  - Company (Short text)
  - Content (Long text)
  - Rating (Number, 1-5)
  - Avatar (Media, optional)

##### CTA Section
- **Fields**:
  - Title (Short text)
  - Description (Long text)
  - Primary Button Text (Short text)
  - Primary Button URL (Short text)
  - Secondary Button Text (Short text, optional)
  - Secondary Button URL (Short text, optional)
  - Background Image (Media, optional)

#### Enable Localization

1. Go to Settings > Locales in your Contentful space
2. Add Spanish (es) as a locale
3. Configure fallback locales appropriately

### 2. Environment Configuration


```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
CONTENTFUL_ENVIRONMENT=master

NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_delivery_token
```


Thank you for reviewing my assignment!
I appreciate your time and look forward to any feedback.
                                            - Rajinder Kumar


