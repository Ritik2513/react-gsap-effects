import { useRef as e } from "react";
import t from "gsap";
import { useGSAP as n } from "@gsap/react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/effects/TextReveal/TextReveal.tsx
var a = ({ text: a, duration: o = 1, delay: s = 0, stagger: c = .05, className: l = "" }) => {
	let u = e(null), d = a.split(" ");
	return n(() => {
		if (!u.current) return;
		let e = u.current.querySelectorAll(".rge-char");
		t.fromTo(e, {
			opacity: 0,
			y: 30
		}, {
			opacity: 1,
			y: 0,
			duration: o,
			delay: s,
			stagger: c,
			ease: "power3.out"
		});
	}, { scope: u }), /* @__PURE__ */ r("div", {
		ref: u,
		className: `rge-text-reveal ${l}`,
		"aria-label": a,
		children: d.map((e, t) => /* @__PURE__ */ i("span", {
			className: "rge-word",
			children: [e.split("").map((e, t) => /* @__PURE__ */ r("span", {
				className: "rge-char",
				children: e
			}, t)), t !== d.length - 1 && /* @__PURE__ */ r("span", {
				className: "rge-space",
				children: " "
			})]
		}, t))
	});
};
//#endregion
export { a as TextReveal };
