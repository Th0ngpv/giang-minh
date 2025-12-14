# 💒 Giang & Minh Wedding Site

A beautiful, modern wedding website built with Next.js, React, and Tailwind CSS. This project showcases an elegant invitation experience with interactive features for guests to celebrate the upcoming wedding.

**Wedding Date:** December 28, 2025 at 9:00 AM  
**Location:** Tư Gia

---

## 🎯 Features

- **Hero Section** - Eye-catching introduction with couple's names, wedding date, and location
- **Welcome Message** - Personal greeting to guests
- **Digital Envelope** - Interactive invitation envelope
- **Countdown Timer** - Real-time countdown to the wedding day (days, hours, minutes, seconds)
- **Attendance Counter** - Track guest confirmations via Supabase
- **Wish Section** - Guests can leave congratulatory messages
- **Photo Gallery** - Carousel of cherished moments using Swiper
- **Music Player** - Background music to enhance the ambiance
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) - React framework with server-side rendering and static generation
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Database:** [Supabase](https://supabase.com/) - Open-source Firebase alternative
- **Carousel:** [Swiper](https://swiperjs.com/) - Mobile-friendly touch slider
- **Font Optimization:** Next.js Font Optimization

---

## 📁 Project Structure

```
giang-minh/
├── app/
│   ├── components/              # Reusable UI components
│   │   ├── AttendanceCounter.tsx    # Guest attendance tracking
│   │   ├── countdown.tsx            # Wedding countdown timer
│   │   ├── envelope.tsx             # Interactive invitation envelope
│   │   ├── gallery.tsx              # Photo carousel gallery
│   │   ├── hero.tsx                 # Hero section with event details
│   │   ├── MusicPlayer.tsx          # Background music player
│   │   ├── Welcome.tsx              # Welcome message
│   │   └── WishSection.tsx          # Guest wishes/messages
│   ├── hooks/                   # Custom React hooks
│   │   └── useInView.ts             # Intersection Observer hook
│   ├── attendance-checker/      # Attendance checking feature
│   │   ├── AttendanceCheckerClient.tsx
│   │   └── page.tsx
│   ├── invitation/              # Invitation page
│   │   └── page.tsx
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page
├── lib/
│   └── supabase.ts              # Supabase client configuration
├── public/
│   ├── fonts/                   # Custom font files
│   ├── images/                  # Image assets
│   │   ├── envelope/
│   │   ├── gallery/
│   │   └── welcome/
│   ├── music/                   # Audio files
│   └── svgs/                    # SVG assets
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
└── eslint.config.mjs             # ESLint configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd giang-minh
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the project for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

---

## 🔧 Configuration

### Supabase Setup

This project uses Supabase for:
- Storing guest attendance confirmations
- Managing guest messages/wishes

**To set up Supabase:**
1. Create a [Supabase account](https://supabase.com/)
2. Create a new project
3. Create tables for:
   - `attendance` - Guest attendance records
   - `wishes` - Guest messages and congratulations
4. Get your project URL and anonymous key from Project Settings
5. Add them to your `.env.local` file

### Customization

**Update Wedding Details:**
Edit [app/page.tsx](app/page.tsx) to change:
- Couple names
- Wedding date and time
- Location
- Custom messages

**Update Gallery Images:**
Add your photos to `public/images/gallery/` and update the `slides` array in [app/components/gallery.tsx](app/components/gallery.tsx)

**Update Music:**
Replace the audio file in `public/music/` and update the reference in [app/components/MusicPlayer.tsx](app/components/MusicPlayer.tsx)

---

## 🎨 Styling

The project uses **Tailwind CSS v4** with custom configurations. Global styles are defined in [app/globals.css](app/globals.css).

### Custom Fonts
The project includes custom fonts loaded from `public/fonts/`. Update font declarations in `layout.tsx` as needed.

---

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile:** 0px and up
- **Tablet:** 640px and up
- **Desktop:** 1024px and up

All components adapt gracefully to different screen sizes.

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/), created by the Next.js team:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add environment variables in Vercel project settings
4. Deploy

**[Deploy Now](https://vercel.com/new)**

### Other Hosting Options

- **Netlify** - Static hosting with serverless functions
- **AWS Amplify** - AWS-powered deployment
- **Docker** - Containerized deployment

---

## 🔐 Security

- Never commit `.env.local` to version control
- Use Supabase Row Level Security (RLS) to protect your data
- Keep dependencies updated: `npm audit` and `npm update`

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Swiper Documentation](https://swiperjs.com/docs/v12/react/)

---

## 📄 License

This project is private and created for personal use.

---

## 💬 Support

For issues or questions, feel free to reach out or check the documentation of the technologies used.

---

**Made with ❤️ for Hoàng Giang & Tue Minh**
