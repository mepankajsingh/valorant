(() => {
	"use strict";

	const t = {
			"0:p": ["general.adsUsePrimary", 0, 1, !0, e => 0 !== e],
			"0:c": ["general.overwriteAllPrimary", 0, 1, !0, e => 0 !== e],
			"0:s": ["general.advancedOptions", 0, 1, !0, e => 0 !== e],
			"P:c": ["primary.color", 0, 8, !0],
			"P:u": ["primary.hexColor.value", 0, 4294967295, !0, e => a(e)],
			"P:h": ["primary.outlines.enabled", 0, 1, !0, e => 0 !== e],
			"P:t": ["primary.outlines.width", 1, 6, !0],
			"P:o": ["primary.outlines.alpha", 0, 1, !1],
			"P:d": ["primary.dot.enabled", 0, 1, !0, e => 0 !== e],
			"P:b": ["primary.hexColor.enabled", 0, 1, !0, e => 0 !== e],
			"P:z": ["primary.dot.width", 1, 6, !0],
			"P:a": ["primary.dot.alpha", 0, 1, !1],
			"P:f": ["general.hideOnFire", 0, 1, !0, e => 0 !== e],
			"P:s": ["general.followSpectating", 0, 1, !0, e => 0 !== e],
			"P:m": ["primary.overwriteFireMul", 0, 1, !0, e => 0 !== e],
			"P:0b": ["primary.inner.enabled", 0, 1, !0, e => 0 !== e],
			"P:0t": ["primary.inner.width", 0, 10, !0],
			"P:0l": ["primary.inner.length", 0, 20, !0],
			"P:0v": ["primary.inner.vertical.length", 0, 20, !0],
			"P:0g": ["primary.inner.vertical.enabled", 0, 1, !0, e => 0 !== e],
			"P:0o": ["primary.inner.offset", 0, 20, !0],
			"P:0a": ["primary.inner.alpha", 0, 1, !1],
			"P:0m": ["primary.inner.moveMul.enabled", 0, 1, !0, e => 0 !== e],
			"P:0f": ["primary.inner.fireMul.enabled", 0, 1, !0, e => 0 !== e],
			"P:0s": ["primary.inner.moveMul.mul", 0, 3, !1],
			"P:0e": ["primary.inner.fireMul.mul", 0, 3, !1],
			"P:1b": ["primary.outer.enabled", 0, 1, !0, e => 0 !== e],
			"P:1t": ["primary.outer.width", 0, 10, !0],
			"P:1l": ["primary.outer.length", 0, 10, !0],
			"P:1v": ["primary.outer.vertical.length", 0, 20, !0],
			"P:1g": ["primary.outer.vertical.enabled", 0, 1, !0, e => 0 !== e],
			"P:1o": ["primary.outer.offset", 0, 40, !0],
			"P:1a": ["primary.outer.alpha", 0, 1, !1],
			"P:1m": ["primary.outer.moveMul.enabled", 0, 1, !0, e => 0 !== e],
			"P:1f": ["primary.outer.fireMul.enabled", 0, 1, !0, e => 0 !== e],
			"P:1s": ["primary.outer.moveMul.mul", 0, 3, !1],
			"P:1e": ["primary.outer.fireMul.mul", 0, 3, !1],
			"A:c": ["ads.color", 0, 8, !0],
			"A:u": ["ads.hexColor.value", 0, 4294967295, !0, e => a(e)],
			"A:h": ["ads.outlines.enabled", 0, 1, !0, e => 0 !== e],
			"A:t": ["ads.outlines.width", 1, 6, !0],
			"A:o": ["ads.outlines.alpha", 0, 1, !1],
			"A:d": ["ads.dot.enabled", 0, 1, !0, e => 0 !== e],
			"A:b": ["ads.hexColor.enabled", 0, 1, !0, e => 0 !== e],
			"A:z": ["ads.dot.width", 1, 6, !0],
			"A:a": ["ads.dot.alpha", 0, 1, !1],
			"A:m": ["ads.overwriteFireMul", 0, 1, !0, e => 0 !== e],
			"A:0b": ["ads.inner.enabled", 0, 1, !0, e => 0 !== e],
			"A:0t": ["ads.inner.width", 0, 10, !0],
			"A:0l": ["ads.inner.length", 0, 20, !0],
			"A:0v": ["ads.inner.vertical.length", 0, 20, !0],
			"A:0g": ["ads.inner.vertical.enabled", 0, 1, !0, e => 0 !== e],
			"A:0o": ["ads.inner.offset", 0, 20, !0],
			"A:0a": ["ads.inner.alpha", 0, 1, !1],
			"A:0m": ["ads.inner.moveMul.enabled", 0, 1, !0, e => 0 !== e],
			"A:0f": ["ads.inner.fireMul.enabled", 0, 1, !0, e => 0 !== e],
			"A:0s": ["ads.inner.moveMul.mul", 0, 3, !1],
			"A:0e": ["ads.inner.fireMul.mul", 0, 3, !1],
			"A:1b": ["ads.outer.enabled", 0, 1, !0, e => 0 !== e],
			"A:1t": ["ads.outer.width", 0, 10, !0],
			"A:1l": ["ads.outer.length", 0, 10, !0],
			"A:1v": ["ads.outer.vertical.length", 0, 20, !0],
			"A:1g": ["ads.outer.vertical.enabled", 0, 1, !0, e => 0 !== e],
			"A:1o": ["ads.outer.offset", 0, 40, !0],
			"A:1a": ["ads.outer.alpha", 0, 1, !1],
			"A:1m": ["ads.outer.moveMul.enabled", 0, 1, !0, e => 0 !== e],
			"A:1f": ["ads.outer.fireMul.enabled", 0, 1, !0, e => 0 !== e],
			"A:1s": ["ads.outer.moveMul.mul", 0, 3, !1],
			"A:1e": ["ads.outer.fireMul.mul", 0, 3, !1],
			"S:b": ["sniper.hexColor.enabled", 0, 1, !0, e => 0 !== e],
			"S:c": ["sniper.color", 0, 8, !0],
			"S:t": ["sniper.hexColor.value", 0, 4294967295, !0, e => a(e)],
			"S:d": ["sniper.dot.enabled", 0, 1, !0, e => 0 !== e],
			"S:s": ["sniper.dot.width", 0, 4, !1],
			"S:o": ["sniper.dot.alpha", 0, 1, !1]
		},
		n = ["P", "A", "S"],
		r = {
			general: {
				advancedOptions: !1,
				adsUsePrimary: !0,
				overwriteAllPrimary: !1,
				hideOnFire: !0,
				followSpectating: !0
			},
			primary: {
				color: 0,
				useCustomColor: !1,
				hexColor: {
					enabled: !1,
					value: "FFFFFFFF"
				},
				outlines: {
					enabled: !0,
					width: 1,
					alpha: .5
				},
				dot: {
					enabled: !1,
					width: 2,
					alpha: 1
				},
				overwriteFireMul: !1,
				inner: {
					enabled: !0,
					width: 2,
					length: 6,
					vertical: {
						enabled: !1,
						length: 6
					},
					offset: 3,
					alpha: .8,
					moveMul: {
						enabled: !1,
						mul: 1
					},
					fireMul: {
						enabled: !0,
						mul: 1
					}
				},
				outer: {
					enabled: !0,
					width: 2,
					length: 2,
					vertical: {
						enabled: !1,
						length: 2
					},
					offset: 10,
					alpha: .35,
					moveMul: {
						enabled: !0,
						mul: 1
					},
					fireMul: {
						enabled: !0,
						mul: 1
					}
				}
			},
			ads: {
				color: 0,
				useCustomColor: !1,
				hexColor: {
					enabled: !1,
					value: "FFFFFFFF"
				},
				outlines: {
					enabled: !0,
					width: 1,
					alpha: .5
				},
				dot: {
					enabled: !1,
					width: 2,
					alpha: 1
				},
				overwriteFireMul: !1,
				inner: {
					enabled: !0,
					width: 2,
					length: 6,
					vertical: {
						enabled: !1,
						length: 6
					},
					offset: 3,
					alpha: .8,
					moveMul: {
						enabled: !1,
						mul: 1
					},
					fireMul: {
						enabled: !0,
						mul: 1
					}
				},
				outer: {
					enabled: !0,
					width: 2,
					length: 2,
					vertical: {
						enabled: !1,
						length: 2
					},
					offset: 10,
					alpha: .35,
					moveMul: {
						enabled: !0,
						mul: 1
					},
					fireMul: {
						enabled: !0,
						mul: 1
					}
				}
			},
			sniper: {
				color: 7,
				useCustomColor: !1,
				hexColor: {
					enabled: !1,
					value: "FFFFFFFF"
				},
				dot: {
					enabled: !0,
					width: 1,
					alpha: .75
				}
			}
		},
		l = ["#ffffff", "#00ff00", "#7fff00", "#dfff00", "#ffff00", "#00ffff", "#ff00ff", "#ff0000"],
		o = ["White", "Green", "Yellow Green", "Green Yellow", "Yellow", "Cyan", "Pink", "Red", "Custom"],
		a = function(e) {
			let t = e.toString(16).toUpperCase();
			return t.length < 8 && (t = "0".repeat(8 - t.length) + t), t
		},
		i = function(e, t, n) {
			const r = t.split(".");
			for (var l = e, o = 0; o < r.length - 1; o++) l = l[r[o]];
			l[r[r.length - 1]] = n
		},
		d = function(e, t) {
			try {
				const l = t.split(".");
				for (var n = e, r = 0; r < l.length - 1; r++) n = n[l[r]];
				return n[l[l.length - 1]]
			} catch (e) {
				return
			}
		},
		c = function(e) {
			return d(r, e)
		},
		u = /^[0-9A-F]{8}$/g,
		s = function(e, t) {
			if (e.length > t + 1) {
				if (8 === e[t + 1].length && e[t + 1].match(u)) return parseInt(e[t + 1], 16);
				const n = parseFloat(e[t + 1]);
				if (!isNaN(n)) return n
			}
			return !1
		},
		h = function(e) {
			return e = e.trim(), !!/^0[a-zA-Z0-9;.]*$/.test(e) && !!e.startsWith("0") && e
		},
		p = function(e) {
			var n = m(r, e, e.general.advancedOptions, e.general.adsUsePrimary);
			if (0 === Object.keys(n).length) return "0";
			var l = "0",
				o = "0";
			for (var a in t) {
				var i = d(n, t[a][0]);
				void 0 !== i && ("boolean" == typeof i && (i = i ? 1 : 0), o != a.charAt(0) && (l += ";" + (o = a.charAt(0))), l += ";" + a.split(":")[1] + ";" + i)
			}
			return l
		},
		m = function(e, t, n, r) {
			if ("enabled" in t && !t.enabled) return e.enabled ? {
				enabled: !1
			} : {};
			var l = {};
			for (var o in t.hexColor && (t.hexColor.enabled = 8 === t.color), t) {
				if (!n && ("ads" === o || "sniper" === o)) continue;
				if (r && "ads" === o) continue;
				const a = e[o],
					i = t[o];
				if ("object" == typeof i) {
					const e = m(a, i, r);
					0 !== Object.keys(e).length && (l[o] = e)
				} else a !== i && (l[o] = i)
			}
			return l
		},
		v = function(e) {
			if (!(e = h(e))) throw "This is not a valid crosshair!";
			return g(e)
		},
		g = function(e) {
			const l = e.split(";");
			var o = JSON.parse(JSON.stringify(r));
			if (l.length <= 1) return o;
			var a = "0",
				i = [];
			const d = l.length;
			for (var c = 1; c < d; c += 2) {
				if (n.includes(l[c])) {
					if (a = l[c], c--, i.includes(a)) return console.error("got category " + a + " twice? skipping rest"), o;
					i.push(a);
					continue
				}
				const e = s(l, c);
				if (!1 === e) {
					console.error("ignoring invalid key: " + l[c]);
					continue
				}
				const r = a + ":" + l[c],
					d = t[r];
				if (!d) {
					console.error("ignoring unmapped key: " + r);
					continue
				}
				if (d[3] && !Number.isInteger(e)) {
					console.error("ignoring non-int value: " + r + "=" + e);
					continue
				}
				if (e < d[1] || e > d[2]) {
					console.error("ignoring out of bounds value: " + r + "=" + e);
					continue
				}
				const p = d[0].split(".");
				for (var u = o, h = 0; h < p.length - 1; h++) u = u[p[h]];
				u[p[p.length - 1]] = d.length >= 5 ? d[4](e) : e
			}
			return o
		},
		f = function(e, t, n = !1, r = "primary") {
			const o = e,
				a = t.getContext("2d"),
				i = t.width / 2;
			switch (a.imageSmoothingEnabled = !1, a.clearRect(0, 0, t.width, t.height), a.strokeStyle = "#000", a.globalAlpha = .03, a.strokeText("vcrdb.net", 0, t.height), r) {
				case "primary":
				case "ads": {
					const t = (e = e[o.general.adsUsePrimary ? "primary" : r]).outlines,
						u = {
							xy: .5 * t.width,
							wh: 1 * t.width
						};
					8 == e.color ? a.fillStyle = "#" + e.hexColor.value.substr(0, 6) : a.fillStyle = l[e.color], a.lineWidth = t.width;
					const s = ["inner", "dot", "outer"];
					for (var d in s) {
						const r = s[d];
						if ("dot" === r) {
							if (e.dot.enabled) {
								const {
									width: n,
									alpha: r
								} = e.dot;
								a.globalAlpha = r;
								const l = i - Math.ceil(n / 2);
								a.fillRect(l, l, n, n), t.enabled && (a.globalAlpha = t.alpha, a.strokeRect(l - u.xy, l - u.xy, n + u.wh, n + u.wh))
							}
						} else {
							const l = e[r];
							if (l.enabled) {
								let {
									width: r,
									length: d,
									alpha: s,
									fireMul: h
								} = l;
								var c = l.offset;
								h.enabled && !e.overwriteFireMul && (c += 4);
								const p = r % 2;
								b(a, i + c, Math.floor(i - r / 2), d, r, u, t, s), b(a, i - c - d - p, Math.floor(i - r / 2), d, r, u, t, s), l.vertical.enabled && (d = l.vertical.length), b(a, Math.floor(i - r / 2), i + c, r, d, u, t, s), n && o.general.hideOnFire || b(a, Math.floor(i - r / 2), i - c - d - p, r, d, u, t, s)
							}
						}
					}
					break
				}
				case "sniper":
					e = e[r], a.globalAlpha = 1, a.fillStyle = "#0003", a.fillRect(0, i - 1, 2 * i, 2), a.fillRect(i - 1, 0, 2, 2 * i), e.dot.enabled && (a.globalAlpha = e.dot.alpha, 8 == e.color ? a.fillStyle = "#" + e.hexColor.value.substr(0, 6) : a.fillStyle = l[e.color], a.beginPath(), a.arc(i, i, 3 * e.dot.width, 0, 2 * Math.PI), a.fill())
			}
			return t
		},
		b = function(e, t, n, r, l, o, a, i) {
			e.globalAlpha = i, e.fillRect(t, n, r, l), a.enabled && 0 !== r && 0 !== l && (e.globalAlpha = a.alpha, e.strokeRect(t - o.xy, n - o.xy, r + o.wh, l + o.wh))
		},
		y = {
			Bind_Screenshot: "Metal",
			Breeze_Screenshot: "Blue/Yellow",
			Fracture_Screenshot: "Yellow",
			Haven_Screenshot: "Orange/White",
			Icebox_Screenshot: "Blue/White",
			Lotus_Screenshot: "Grass",
			Pearl_Screenshot: "Sky",
			Split_Screenshot: "Sky"
		};

	function A(e, t, n, r = !1, l) {
		if (!1 === t) return console.error("invalid code: " + t), !1;
		void 0 !== e && (e = e.trim());
		const o = h(t);
		if (!o) return console.error("invalid code: " + o), !1;
		const a = document.createElement("DIV");
		a.classList.add("x-hair-container");
		const i = document.createElement("X-HAIR");
		if (i.attr_code = o, i.attr_name = e, a.appendChild(i), void 0 !== e) {
			const t = document.createElement("H2");
			t.innerText = e, a.appendChild(t)
		}
		const c = () => function(e, t, n) {
			if (!t.attr_code) return !1;
			const r = t.attr_code;
			try {
				const e = function(e, t = !1, n = 128) {
					try {
						const r = v(e);
						if (t && !r.general.hideOnFire) return !1;
						const l = document.createElement("CANVAS");
						return l.width = l.height = n, f(r, l, t)
					} catch (e) {
						console.error(e)
					}
					return !1
				}(r, n);
				return !1 !== e && (t.appendChild(e), !0)
			} catch (e) {
				console.error("Invalid crosshair code: " + r), console.error(e)
			}
			return !1
		}(0, i, r);
		if (l) a.lazyLoader = c, l.observe(a);
		else if (!c()) return !1;
		return a
	}
	window.addEventListener("load", (() => {
		document.getElementById("builderCopy").addEventListener("click", (e => {
				! function(e) {
					navigator.clipboard ? navigator.clipboard.writeText(e) : alert(e)
				}(p(document.getElementById("builderCustomize").currentParsed));
				var t = e.target,
					n = document.createElement("span");
				n.className = "copy_tooltip", n.innerHTML = "Copied!", t.querySelector(".copy_tooltip") || t.appendChild(n), setTimeout((function() {
					n.style.top = "-40px", n.style.opacity = "0", setTimeout((function() {
						n.remove()
					}), 300)
				}), 2e3)
			})), document.getElementById("builderPaste").addEventListener("click", (e => function() {
				const e = e => x(h(e)),
					t = function() {
						const t = prompt("Your browser doesn't support reading from your clipboard. Please paste your code here.");
						e(t)
					};
				try {
					navigator.clipboard.readText().then((t => e(t))).catch((e => t()))
				} catch (e) {
					t()
				}
			}())), document.getElementById("builderRandomize").addEventListener("click", (e => function() {
				const e = document.getElementById("builderCustomize").currentParsed;
				e.general.advancedOptions = !1, document.getElementById("builderCustomize").lastCode = p(e);
				const n = e => e.enabled && e.alpha > .5 && (void 0 === e.length || void 0 === e.width || 0 !== e.length && 0 !== e.width);
				do {
					for (var r in t) {
						if (!r.startsWith("P:") || w.includes(r)) continue;
						const n = t[r];
						var l;
						n[3] ? l = Math.floor(n[1] + Math.random() * (n[2] - n[1] + 1)) : (l = n[1] + Math.random() * (n[2] - n[1]), l = Math.round(1e3 * l) / 1e3), i(e, n[0], n.length >= 5 ? n[4](l) : l)
					}
				} while (!n(e.primary.inner) && !n(e.primary.outer) && !n(e.primary.dot));
				x(p(e))
			}())), document.addEventListener("keydown", (e => {
				e.ctrlKey && "z" === e.key && void 0 !== document.getElementById("builderCustomize").lastCode && x(document.getElementById("builderCustomize").lastCode)
			})),
			function() {
				const e = document.getElementById("builderResize"),
					t = document.getElementById("builderImage");
				let n, r = !1;
				const l = function(t) {
					r = !1, document.body.removeEventListener("mouseup", l), e.removeEventListener("mousemove", n)
				};
				n = function(e) {
					r ? t.style.flexBasis = 100 * e.clientX / window.innerWidth + "%" : l()
				}, e.addEventListener("mousedown", (e => {
					r = !0, document.body.addEventListener("mousemove", n), document.body.addEventListener("mouseup", l)
				}))
			}(),
			function(e, n, r) {
				e.images = n;
				const a = e.querySelectorAll(".x-hair-toggle");
				for (var i = 0; i < a.length; i++) {
					const n = a[i];
					if (0 !== n.children.length || !n.hasAttribute("binding")) continue;
					const r = n.getAttribute("binding"),
						l = t[r],
						o = c(l[0]),
						d = document.createElement("BUTTON"),
						u = document.createElement("BUTTON");
					d.innerText = "On", u.innerText = "Off", o && n.classList.add("x-checked"), d.addEventListener("click", (t => {
						n.classList.add("x-checked"), S(e, l, 1)
					})), u.addEventListener("click", (t => {
						n.classList.remove("x-checked"), S(e, l, 0)
					})), n.appendChild(d), n.appendChild(u), n.updateValue = function(e, t) {
						t ? n.classList.add("x-checked") : n.classList.remove("x-checked")
					}
				}
				const d = e.querySelectorAll(".x-hair-slider");
				for (i = 0; i < d.length; i++) {
					const n = d[i];
					if (0 !== n.children.length || !n.hasAttribute("binding")) continue;
					const r = n.hasAttribute("bindinglink"),
						l = n.getAttribute("binding"),
						o = t[l],
						a = c(o[0]),
						u = r ? n.getAttribute("bindinglink") : null,
						s = r ? n.getAttribute("bindinglinked") : null,
						h = r ? t[u] : null,
						p = r ? t[s] : null,
						m = document.createElement("INPUT"),
						v = r ? document.createElement("INPUT") : null,
						g = r ? document.createElement("BUTTON") : null,
						f = document.createElement("INPUT"),
						b = r ? document.createElement("INPUT") : null;
					m.setAttribute("type", "text"), m.value = a, f.setAttribute("type", "range"), f.setAttribute("min", o[1]), f.setAttribute("max", o[2]), f.setAttribute("step", o[3] ? 1 : .001), f.setAttribute("value", a), r && (v.setAttribute("type", "text"), v.value = a, g.innerHTML = '<span class="material-icons">link</span>', g.classList.add("link"), g.value = "true", g.set = e => g.value = e, g.get = () => "true" === g.value, g.toggle = () => (g.value = !g.get(), g.get()), b.setAttribute("type", "range"), b.setAttribute("min", o[1]), b.setAttribute("max", o[2]), b.setAttribute("step", o[3] ? 1 : .001), b.setAttribute("value", a)), m.addEventListener("change", (t => {
						isNaN(m.value) ? m.value = f.value : (f.value = m.value, m.value = f.value, S(e, o, f.value), r && g.get() && n.updateValue(s, f.value))
					})), f.addEventListener("input", (t => {
						m.value = f.value, S(e, o, f.value), r && g.get() && n.updateValue(s, f.value)
					})), r && (v.addEventListener("change", (t => {
						g.get() && (g.toggle(), g.querySelector("span").innerText = "link_off", S(e, h, 1)), isNaN(v.value) ? v.value = b.value : (b.value = v.value, v.value = b.value, S(e, p, b.value))
					})), g.addEventListener("click", (t => {
						const n = g.toggle();
						g.querySelector("span").innerText = n ? "link" : "link_off", n ? (v.value = f.value, b.value = f.value) : (v.value = C(e, p), b.value = C(e, p)), S(e, h, n ? 0 : 1)
					})), b.addEventListener("input", (t => {
						g.get() && (g.toggle(), g.querySelector("span").innerText = "link_off", S(e, h, 1)), v.value = b.value, S(e, p, b.value)
					}))), n.appendChild(m), r && n.appendChild(v), n.appendChild(f), r && (n.appendChild(g), n.appendChild(b)), n.updateValue = function(e, t) {
						r ? e === l ? (m.value = t, f.value = t) : e === u ? (t = !t, g.set(t), g.querySelector("span").innerText = t ? "link" : "link_off", t && (v.value = f.value, b.value = f.value)) : e === s && (v.value = t, b.value = t) : (m.value = t, f.value = t)
					}
				}
				const u = e.querySelectorAll(".x-hair-drop");
				for (i = 0; i < u.length; i++) {
					const n = u[i];
					if (0 !== n.children.length || !n.hasAttribute("binding")) continue;
					const r = n.getAttribute("binding"),
						a = t[r],
						d = c(a[0]),
						h = document.createElement("SELECT");
					if (h.classList.add("x-hair-drop-content"), n.colorPickerHook = () => null, n.hasAttribute("colorpicker")) {
						const t = n.getAttribute("colorpicker"),
							r = e.querySelector('.x-hair-color[binding="' + t + '"]');
						n.colorPickerHook = () => {
							"Custom" !== h.options[h.value].innerText && r.updateValue(t, l[h.value], !0)
						}
					}
					h.addEventListener("change", (t => {
						p(l[h.value]), S(e, a, h.value), n.colorPickerHook()
					}));
					const p = function(t) {
						const n = e.querySelectorAll(".x-hair-color");
						let r = null;
						for (r = t || "#ffffff", i = 0; i < n.length; i++) {
							const e = n[i].querySelector(".picker input"),
								t = n[i].querySelector(".hex-code-input input");
							e.value = r, t.value = r
						}
					};
					for (var s = a[1]; s <= a[2]; s++) {
						const e = document.createElement("OPTION");
						e.value = s, e.innerText = o[s], s === d && e.setAttribute("selected", ""), h.appendChild(e)
					}
					n.appendChild(h), n.updateValue = function(e, t) {
						h.value = t, n.colorPickerHook()
					}
				}
				const h = e.querySelectorAll(".x-hair-color");
				for (i = 0; i < h.length; i++) {
					const n = h[i];
					if (0 !== n.children.length || !n.hasAttribute("binding")) continue;
					const r = n.getAttribute("binding"),
						l = t[r];
					if (c(l[0]), n.colorDropHook = () => null, n.hasAttribute("colordrop")) {
						const r = n.getAttribute("colordrop"),
							l = e.querySelector('.x-hair-drop[binding="' + r + '"]'),
							o = l.getAttribute("binding"),
							a = t[o];
						n.innerSelect = l.querySelector("select"), n.colorDropHook = () => {
							l.updateValue(r, "8"), S(e, a, "8")
						}
					}
					const o = document.createElement("DIV");
					o.classList.add("picker");
					const a = document.createElement("INPUT");
					a.setAttribute("type", "color"), o.appendChild(a);
					const d = document.createElement("DIV");
					d.classList.add("hex-code-input");
					const u = document.createElement("INPUT");
					u.setAttribute("type", "text"), d.appendChild(u), u.addEventListener("input", (t => {
						const r = E(u.value);
						a.value = "#" + r, S(e, l, r + "FF"), n.colorDropHook()
					})), a.addEventListener("input", (t => {
						const r = E(a.value);
						u.value = "#" + r, S(e, l, r + "FF"), n.colorDropHook()
					})), n.appendChild(o), n.appendChild(d), n.updateValue = function(e, t, r) {
						(r || "8" === n.innerSelect.value) && (t = E(t), u.value = "#" + t, a.value = "#" + t)
					}, a.addEventListener("click", (t => {
						const n = e.querySelectorAll(".x-hair-drop");
						for (i = 0; i < n.length; i++) {
							n[i].querySelector(".x-hair-drop-content").value = 8
						}
						S(e, ["primary.color", 0, 8, !0], 8)
					}))
				}
				const p = r.querySelectorAll("button");
				for (i = 0; i < p.length; i++) {
					const t = p[i],
						n = t.innerText.toLowerCase();
					t.addEventListener("click", (r => {
						p.forEach((e => e.classList.remove("selected"))), t.classList.add("selected"), P(e, n)
					})), t.classList.contains("selected") && P(e, n)
				}
			}(document.getElementById("builderCustomize"), document.getElementById("builderImage"), document.getElementById("builderTabSelect"));
		var e = "0";
		const n = new URLSearchParams(window.location.search);
		if (n.has("c")) {
			const t = h(n.get("c"));
			t && (e = t)
		}
		x(e);
		var r = document.querySelectorAll(".x-hair-container");
		for (let e = 0; e < r.length; e++) {
			r[e].addEventListener("click", (e => {
				document.querySelector(".x-hair-container img").src = e.target.querySelector("img").src
			}))
		}
	}));
	const w = ["P:f", "P:s"];

	function x(e) {
		const n = A(void 0, e);
		if (!n) return;
		const r = document.getElementById("builderImage");
		for (var l in r.innerHTML = "", r.appendChild(n), y) {
			const t = A(void 0, e, l);
			r.appendChild(t)
		}
		var o = document.createElement("div");
		o.classList.add("x-hair-container"), o.innerHTML = '<x-hair></x-hair>', document.getElementById("builderImage").querySelector(".x-hair-container").insertAdjacentElement("afterend", o),
			function(e, n) {
				for (var r in n.currentParsed = e, t) {
					const l = n.querySelector('x-chapter > div > div[binding="' + r + '"], x-chapter > div > div[bindinglink="' + r + '"], x-chapter > div > div[bindinglinked="' + r + '"]');
					if (!l || !l.updateValue) continue;
					const o = d(e, t[r][0]);
					l.updateValue(r, o)
				}
				const l = document.getElementsByClassName("tabAdvanced");
				for (var o = 0; o < l.length; o++) e.general.advancedOptions ? l[o].removeAttribute("disabled") : l[o].setAttribute("disabled", "")
			}(v(e), document.getElementById("builderCustomize"))
	}

	function E(e) {
		return e.startsWith("#") && (e = e.substr(1)), 8 === e.length && (e = e.substr(0, 6)), (e = e.toUpperCase()).match(/^[0-9A-F]{6}$/g) ? e : "FFFFFF"
	}

	function P(e, t) {
		const n = e.querySelectorAll("x-chapter");
		for (var r = 0; r < n.length; r++) {
			const e = n[r];
			t === e.getAttribute("data-tab") ? e.style.display = null : e.style.display = "none"
		}
		const l = t.toLowerCase();
		"general" !== l && (e.currentTab = l, k(e))
	}

	function S(e, t, n) {
		if ("string" != typeof n || 8 === n.length || n.match(u) || (n = parseFloat(n)), i(e.currentParsed, t[0], t.length >= 5 ? t[4](n) : n), "general.advancedOptions" === t[0]) {
			const e = document.getElementsByClassName("tabAdvanced");
			for (var r = 0; r < e.length; r++) n ? e[r].removeAttribute("disabled") : e[r].setAttribute("disabled", "")
		}
		k(e)
	}

	function C(e, t) {
		return d(e.currentParsed, t[0])
	}

	function k(e) {
		if (!e.images) return;
		const t = e.images.children;
		for (var n = 0; n < t.length; n++) {
			const r = t[n].querySelector("x-hair > canvas");
			f(e.currentParsed, r, !1, e.currentTab)
		}
	}
})();
