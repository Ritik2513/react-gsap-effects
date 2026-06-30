import e, { useRef as t } from "react";
import n from "gsap";
import { useGSAP as r } from "@gsap/react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/effects/TextReveal/TextReveal.tsx
var o = ({ children: o, duration: s = 1, delay: c = 0, stagger: l = .05, className: u = "" }) => {
	let d = t(null);
	r(() => {
		if (!d.current) return;
		let e = d.current.querySelectorAll(".rge-char");
		n.fromTo(e, {
			opacity: 0,
			y: 30
		}, {
			opacity: 1,
			y: 0,
			duration: s,
			delay: c,
			stagger: l,
			ease: "power3.out"
		});
	}, { scope: d });
	let f = (t) => {
		if (typeof t == "string" || typeof t == "number") {
			let e = String(t).split(" ");
			return e.map((t, n) => /* @__PURE__ */ a("span", {
				className: "rge-word",
				children: [t.split("").map((e, t) => /* @__PURE__ */ i("span", {
					className: "rge-char",
					children: e
				}, t)), n !== e.length - 1 && /* @__PURE__ */ i("span", {
					className: "rge-space",
					children: " "
				})]
			}, n));
		}
		if (e.isValidElement(t)) {
			let n = t;
			return e.cloneElement(n, {}, f(n.props.children));
		}
		return Array.isArray(t) ? t.map((t, n) => /* @__PURE__ */ i(e.Fragment, { children: f(t) }, n)) : t;
	};
	return /* @__PURE__ */ i("div", {
		ref: d,
		className: `rge-text-reveal ${u}`,
		"aria-live": "polite",
		children: f(o)
	});
};
//#endregion
export { o as TextReveal };
