# react-gsap-effects

[![npm version](https://img.shields.io/npm/v/react-gsap-effects)](https://www.npmjs.com/package/react-gsap-effects)
[![npm downloads](https://img.shields.io/npm/dm/react-gsap-effects)](https://www.npmjs.com/package/react-gsap-effects)
[![License](https://img.shields.io/npm/l/react-gsap-effects)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Ritik2513/react-gsap-effects)](https://github.com/Ritik2513/react-gsap-effects)

Reusable animation components for React powered by GSAP.

Build beautiful, production-ready animations with minimal code — without writing repetitive GSAP boilerplate every time.

---

## Why react-gsap-effects?

Building animations with GSAP inside React often requires repeated setup:

- Managing refs manually
- Writing repetitive animation logic
- Creating timelines for simple effects
- Reusing the same boilerplate across multiple projects

**react-gsap-effects** solves this by providing reusable React animation components that let developers focus on building UI instead of repeatedly writing animation logic.

---

## Features

- 🚀 Built with React + TypeScript
- ⚡ Powered by GSAP
- 📦 Lightweight and tree-shakeable
- 🎯 Developer-friendly API
- 🔒 Fully type-safe props
- 🧩 Reusable animation components
- 🎨 Modern animation primitives for UI development
- 📚 Designed for future expansion

---

## Installation

Install package with required peer dependencies.

```bash
npm install react-gsap-effects gsap @gsap/react
```

---

## Usage

Import component and styles.

```tsx
import { TextReveal } from "react-gsap-effects";
import "react-gsap-effects/styles";

export default function App() {
  return (
    <TextReveal duration={1.2} stagger={0.05}>
      Build beautiful user experiences
    </TextReveal>
  );
}
```

---

## JSX Children API

Because `TextReveal` uses React children, you can style individual words or elements freely.

### Example 1

```tsx
<TextReveal>
  Build beautiful interfaces
</TextReveal>
```

### Example 2

```tsx
<TextReveal>
  Build <strong>beautiful</strong> interfaces
</TextReveal>
```

### Example 3

```tsx
<TextReveal>
  Welcome to <span style={{ color: "orange" }}>Offerly</span>
</TextReveal>
```

This gives much more flexibility than traditional string-based APIs.

---

## Available Components

Currently available:

- ✅ TextReveal

More components are coming soon.

---

## TextReveal

Animate text smoothly using GSAP-powered staggered character reveal animation.

Ideal for:

- Hero sections
- Landing pages
- Marketing websites
- Product showcase pages
- Animated headings
- Interactive UI experiences

---

## TextReveal API

| Prop      | Type      | Default | Description |
| ----------|-----------|---------|------------ |
| children  | ReactNode | Required | JSX content to animate |
| duration  | number    | 1       | Animation duration in seconds |
| delay     | number    | 0       | Initial animation delay |
| stagger   | number    | 0.05    | Delay between character animation |
| className | string    | ""      | Additional CSS classes |

---

## Peer Dependencies

This package relies on the following peer dependencies.

```json
{
  "react": ">=18",
  "react-dom": ">=18",
  "gsap": ">=3",
  "@gsap/react": ">=2"
}
```

Make sure these are installed in your project.

---

## Current Release

### v1.0.0

Implemented:

- ✅ TextReveal (Composable Children API)

Current focus:

- Expanding reusable animation components
- Building production-ready GSAP UI primitives
- Improving developer experience and performance

---

## Upcoming Components

Planned additions to the library.

- [ ] MagneticButton
- [ ] MouseTrail
- [ ] GravityTrail
- [ ] ScrollReveal
- [ ] CursorFollower
- [ ] ParallaxImage
- [ ] FloatingCards
- [ ] HoverDistortion
- [ ] ImageTrail

---

## Live Demo

Interactive demo:

https://react-gsap-effects.vercel.app/

---

## Project Status

react-gsap-effects is actively maintained and focused on building reusable production-ready animation components for React applications.

The goal is to help developers build beautiful interfaces faster without repeatedly writing GSAP animation boilerplate.

---

## Philosophy

The goal of react-gsap-effects is simple.

Make advanced frontend animations accessible through reusable, developer-friendly React components.

Instead of repeatedly writing complex GSAP setup code, developers can focus on building beautiful interfaces faster.

---

## Contributing

Contributions, feature requests, and bug reports are welcome.

If you have an idea for a new animation effect or want to improve the package, feel free to open an issue or submit a pull request.

---

## License

MIT © Ritik Kumar Gupta