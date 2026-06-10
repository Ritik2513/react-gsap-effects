# react-gsap-effects

[![npm version](https://img.shields.io/npm/v/react-gsap-effects)](https://www.npmjs.com/package/react-gsap-effects)
[![npm downloads](https://img.shields.io/npm/dm/react-gsap-effects)](https://www.npmjs.com/package/react-gsap-effects)
[![License](https://img.shields.io/npm/l/react-gsap-effects)](LICENSE)

TypeScript-first React animation library featuring reusable GSAP-powered effects.


Build beautiful, production-ready animations in React using simple, reusable components powered by GSAP.

## Features

* 🚀 Built with React + TypeScript
* ⚡ Powered by GSAP
* 📦 Lightweight and tree-shakeable
* 🎯 Developer-friendly API
* 🔒 Type-safe props
* 🧩 Reusable animation components
* 📚 Designed for scalability and future expansion

---

## Installation

Install the package:

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

function App() {
  return (
    <TextReveal
      text="Hello from react-gsap-effects"
    />
  );
}

export default App;
```

---

## TextReveal

Animate text character-by-character using GSAP.

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

## Props

| Prop      | Type   | Default  | Description                        |
| --------- | ------ | -------- | ---------------------------------- |
| text      | string | Required | Text to animate                    |
| duration  | number | 1        | Animation duration in seconds      |
| delay     | number | 0        | Initial animation delay            |
| stagger   | number | 0.05     | Delay between character animations |
| className | string | ""       | Additional CSS classes             |

---

## Peer Dependencies

This package relies on the following peer dependencies:

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

## Roadmap

### v1.0.0

* [x] TextReveal

### Planned Components

* [ ] MagneticButton
* [ ] MouseTrail
* [ ] GravityTrail
* [ ] ParallaxImage
* [ ] FloatingCards
* [ ] ScrollReveal
* [ ] CursorFollower
* [ ] HoverDistortion
* [ ] ImageTrail

---

## Browser Support

Supports all modern browsers that support:

* ES2020
* React 18+
* GSAP 3+

---

## Contributing

Contributions, feature requests, and bug reports are welcome.

If you find a bug or have an idea for a new animation effect, please open an issue.

---

## Development

Clone the repository:

```bash
git clone https://github.com/Ritik2513/react-gsap-effects.git
```

Install dependencies:

```bash
npm install
```

Run development mode:

```bash
npm run dev
```

Build the package:

```bash
npm run build
```

---

## License

MIT © Ritik Kumar Gupta
