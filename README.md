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

* Managing refs manually
* Writing repetitive animation logic
* Creating timelines for simple effects
* Reusing the same boilerplate across projects

**react-gsap-effects** solves this by providing reusable React animation components that let developers focus on building UI instead of rewriting animation logic.

---

## Features

* 🚀 Built with React + TypeScript
* ⚡ Powered by GSAP
* 📦 Lightweight and tree-shakeable
* 🎯 Developer-friendly API
* 🔒 Fully type-safe props
* 🧩 Reusable animation components
* 🎨 Beautiful animation primitives for modern UI
* 📚 Designed for future expansion

---

## Installation

Install package:

```bash
npm install react-gsap-effects
```

Install peer dependencies:

```bash
npm install gsap @gsap/react
```

---

## Usage

```tsx
import { TextReveal } from "react-gsap-effects";
import "react-gsap-effects/styles";

export default function App() {
  return (
    <TextReveal
      text="Build beautiful user experiences"
      duration={1.2}
      stagger={0.05}
    />
  );
}
```

---

## Available Components

Currently available:

* ✅ TextReveal

More components are coming soon.

---

## TextReveal

Animate text smoothly using GSAP-powered staggered reveal animation.

### Example

```tsx
<TextReveal
  text="Build amazing user experiences"
  duration={1}
  stagger={0.05}
  delay={0.2}
/>
```

---

## TextReveal API

| Prop      | Type   | Default  | Description                      |
| --------- | ------ | -------- | -------------------------------- |
| text      | string | Required | Text to animate                  |
| duration  | number | 1        | Animation duration in seconds    |
| delay     | number | 0        | Initial animation delay          |
| stagger   | number | 0.05     | Delay between animation sequence |
| className | string | ""       | Additional CSS classes           |

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

### v0.2.0

Implemented:

* ✅ TextReveal

Current focus:

* Improving API architecture
* Expanding reusable animation components
* Improving performance and developer experience

---

## Upcoming Components

Planned additions to the library.

* [ ] MagneticButton
* [ ] MouseTrail
* [ ] GravityTrail
* [ ] ScrollReveal
* [ ] CursorFollower
* [ ] ParallaxImage
* [ ] FloatingCards
* [ ] HoverDistortion
* [ ] ImageTrail

---

## Live Demo

Interactive demo: https://react-gsap-effects.vercel.app/

---

## Project Status

react-gsap-effects is currently under active development.

This package is in early-stage release and the API may evolve as new components and improvements are introduced.

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
