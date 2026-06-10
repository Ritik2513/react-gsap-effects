import { useRef as e } from "react";
import t from "gsap";
import { useGSAP as n } from "@gsap/react";
import { jsx as r } from "react/jsx-runtime";
//#region src/effects/TextReveal/TextReveal.tsx
var i = ({ text: i, duration: a = 1, delay: o = 0, stagger: s = .05, className: c = "" }) => {
	let l = e(null), u = i.split("");
	return n(() => {
		if (!l.current) return;
		let e = l.current.querySelectorAll(".rge-char");
		t.fromTo(e, {
			opacity: 0,
			y: 30
		}, {
			opacity: 1,
			y: 0,
			duration: a,
			delay: o,
			stagger: s,
			ease: "power3.out"
		});
	}, { scope: l }), /* @__PURE__ */ r("div", {
		ref: l,
		className: `rge-text-reveal ${c}`,
		"aria-label": i,
		children: u.map((e, t) => /* @__PURE__ */ r("span", {
			className: "rge-char",
			children: e === " " ? "\xA0" : e
		}, t))
	});
};
//#endregion
export { i as TextReveal };
