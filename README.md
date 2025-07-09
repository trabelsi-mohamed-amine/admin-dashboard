# Admin Dashboard

A modern, responsive admin dashboard built with Next.js for managing educational platforms and learning management systems.

![Dashboard Preview](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Features

### 📊 Dashboard Components
- **Student Progress Tracking** - Monitor course completion rates across multiple programs
- **Course Management** - Comprehensive course administration
- **Enrollment Analytics** - Track student enrollments and engagement
- **Session Scheduling** - Manage classes and meetings
- **Real-time Statistics** - Performance metrics and insights

### 🎨 UI/UX Features
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Collapsible Sidebar** - Space-efficient navigation with keyboard shortcuts
- **Dark/Light Theme** - Theme switching capabilities
- **Interactive Components** - Progress bars, cards, and data visualization
- **Accessibility** - WCAG compliant components

### 🛠 Technical Features
- **TypeScript** - Fully typed for better development experience
- **Custom Hooks** - Reusable logic for mobile detection and state management
- **Component Library** - Built with Radix UI primitives and shadcn/ui
- **Modular Architecture** - Clean separation of concerns

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/admin-dashboard.git
cd admin-dashboard
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard pages
│   └── layout.tsx         # Root layout
├── components/
│   ├── dashboard/         # Dashboard-specific components
│   │   └── student-progress.tsx
│   └── ui/               # Reusable UI components
│       ├── card.tsx
│       ├── progress.tsx
│       └── sidebar.tsx
├── hooks/                # Custom React hooks
│   └── use-mobile.tsx
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Key Components

### Student Progress
Displays course completion analytics with:
- Progress bars for visual representation
- Student enrollment counts
- Course-specific metrics

```tsx
<StudentProgress />
```

### Responsive Sidebar
Collapsible navigation with:
- Mobile/desktop adaptive behavior
- Keyboard shortcuts (Ctrl/Cmd + B)
- Smooth animations

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## Course Data Structure

The dashboard currently tracks these courses:
- Introduction to Web Development (85% completion, 1,245 students)
- Advanced JavaScript Concepts (72% completion, 982 students)
- UX/UI Design Fundamentals (68% completion, 745 students)
- Data Science Bootcamp (56% completion, 892 students)

## Customization

### Adding New Courses
Update the `progressData` array in `components/dashboard/student-progress.tsx`:

```tsx
const progressData = [
  {
    id: "5",
    course: "Your New Course",
    progress: 75,
    students: 500,
  },
  // ... existing courses
]
```

### Theming
Customize colors and styling in `tailwind.config.js` and CSS variables.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons

---

Built with ❤️ using Next.js and TypeScript
