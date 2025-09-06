# Yoga Website - Find Your Balance

A modern, calming, and user-friendly yoga website built with React that encourages visitors to book consultation calls. The website features a clean design with soft colors, gentle animations, and a comprehensive user journey from problem identification to solution.

## 🌟 Features

### Design & User Experience
- **Minimal & Soothing Design**: Soft color palette (pastel green, white, beige, light blue)
- **Calming Typography**: Combination of Nunito and Dancing Script fonts
- **Gentle Animations**: Fade-in and slide-up effects using Framer Motion
- **Mobile-First Responsive Design**: Optimized for all device sizes
- **Smooth Scrolling**: Enhanced user navigation experience

### Website Sections

1. **Hero Section** - Inspiring headline with introduction video placeholder and primary CTA
2. **Problem Section** - Identifies common pain points (stress, flexibility, energy, etc.)
3. **Solution Section** - 4-step yoga journey (Awareness → Practice → Mindfulness → Transformation)
4. **About Team** - Instructor profiles with credentials and specialties
5. **Free Call Explanation** - Details what visitors get in their consultation
6. **Testimonials** - Real transformation stories with before/after experiences
7. **Final Call to Action** - Compelling final push with social proof
8. **Q&A Section** - Interactive FAQ addressing common concerns

### Technical Features
- **React 18** with functional components and hooks
- **Framer Motion** for smooth animations
- **Intersection Observer** for scroll-triggered animations
- **Responsive Grid Layouts** with CSS Grid and Flexbox
- **Modern CSS** with custom properties and smooth transitions
- **Accessibility Features** including ARIA labels and keyboard navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The website will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Update these in `src/index.css`:

```css
:root {
  --primary-green: #a8d5ba;
  --light-green: #e8f5e8;
  --soft-blue: #b8d4f0;
  --warm-beige: #f7f3e9;
  --white: #ffffff;
  --text-dark: #2d3748;
  --text-light: #4a5568;
  --accent-coral: #fbb6ce;
}
```

### Content Updates
- **Instructor Information**: Update the `instructors` array in `src/components/AboutTeam.js`
- **Testimonials**: Modify the `testimonials` array in `src/components/TestimonialsSection.js`
- **FAQ**: Update the `faqs` array in `src/components/QASection.js`
- **Contact Information**: Replace Calendly links throughout the components

### Images & Media
- Replace emoji placeholders with actual images in the instructor and testimonial sections
- Add your introduction video to the Hero section
- Update the video placeholder in `src/components/HeroSection.js`

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

All components include mobile-specific styling for optimal user experience across devices.

## 🔧 Key Components

### HeroSection
- Video introduction placeholder
- Compelling headline and subheading
- Primary call-to-action button

### ProblemSection
- Grid of common pain points
- Floating animation elements
- Empathetic messaging

### SolutionSection
- 4-step journey visualization
- Alternating layout design
- Progress connectors

### AboutTeam
- Instructor profile cards
- Credentials and specialties
- Experience badges

### TestimonialsSection
- Before/after transformation stories
- Star ratings
- Program badges

### QASection
- Interactive accordion FAQ
- Smooth expand/collapse animations
- Final consultation CTA

## 🎯 Conversion Optimization

The website is designed with multiple conversion points:
- Hero section primary CTA
- Secondary CTAs in About Team section
- Free consultation explanations
- Social proof through testimonials
- Urgency messaging in final CTA
- Risk-free guarantees

## 📞 Booking Integration

Currently configured for Calendly integration. To set up:

1. Replace `https://calendly.com/your-yoga-studio` with your actual Calendly link
2. Update all CTA buttons across components
3. Consider adding form submissions as an alternative

## 🌐 Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your project for seamless deployment
- **GitHub Pages**: Use the build folder for static hosting

## 📈 Performance

- Optimized images and assets
- Lazy loading for animations
- Efficient CSS with minimal dependencies
- Fast loading times with code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness across devices
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Fonts**: Google Fonts (Nunito, Dancing Script)
- **Icons**: Emoji icons for visual elements
- **Animations**: Framer Motion library
- **Design Inspiration**: Modern wellness and yoga websites

---

**Ready to launch your yoga business online?** This website template provides everything you need to attract and convert visitors into yoga students. Customize the content, add your branding, and start growing your yoga community today! 🧘‍♀️✨
