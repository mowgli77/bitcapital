(()=>{
        "use strict";
        new class {
            constructor(e) {
                this.type = e
            }
            init() {
                this.оbjects = [],
                    this.daClassname = "_dynamic_adapt_",
                    this.nodes = [...document.querySelectorAll("[data-da]")],
                    this.nodes.forEach((e=>{
                            const t = e.dataset.da.trim().split(",")
                                , a = {};
                            a.element = e,
                                a.parent = e.parentNode,
                                a.destination = document.querySelector(`${t[0].trim()}`),
                                a.breakpoint = t[1] ? t[1].trim() : "767",
                                a.place = t[2] ? t[2].trim() : "last",
                                a.index = this.indexInParent(a.parent, a.element),
                                this.оbjects.push(a)
                        }
                    )),
                    this.arraySort(this.оbjects),
                    this.mediaQueries = this.оbjects.map((({breakpoint: e})=>`(${this.type}-width: ${e}px),${e}`)).filter(((e,t,a)=>a.indexOf(e) === t)),
                    this.mediaQueries.forEach((e=>{
                            const t = e.split(",")
                                , a = window.matchMedia(t[0])
                                , i = t[1]
                                , n = this.оbjects.filter((({breakpoint: e})=>e === i));
                            a.addEventListener("change", (()=>{
                                    this.mediaHandler(a, n)
                                }
                            )),
                                this.mediaHandler(a, n)
                        }
                    ))
            }
            mediaHandler(e, t) {
                e.matches ? t.forEach((e=>{
                        this.moveTo(e.place, e.element, e.destination)
                    }
                )) : t.forEach((({parent: e, element: t, index: a})=>{
                        t.classList.contains(this.daClassname) && this.moveBack(e, t, a)
                    }
                ))
            }
            moveTo(e, t, a) {
                t.classList.add(this.daClassname),
                    "last" === e || e >= a.children.length ? a.append(t) : "first" !== e ? a.children[e].before(t) : a.prepend(t)
            }
            moveBack(e, t, a) {
                t.classList.remove(this.daClassname),
                    void 0 !== e.children[a] ? e.children[a].before(t) : e.append(t)
            }
            indexInParent(e, t) {
                return [...e.children].indexOf(t)
            }
            arraySort(e) {
                "min" === this.type ? e.sort(((e,t)=>e.breakpoint === t.breakpoint ? e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? -1 : "last" === e.place || "first" === t.place ? 1 : 0 : e.breakpoint - t.breakpoint)) : e.sort(((e,t)=>e.breakpoint === t.breakpoint ? e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? 1 : "last" === e.place || "first" === t.place ? -1 : 0 : t.breakpoint - e.breakpoint))
            }
        }
        ("max").init(),
            function() {
                let e = localStorage.getItem("cookieDate")
                    , t = document.getElementById("cookie_notification")
                    , a = t.querySelector(".cookie_accept");
                (!e || +e + 31536e6 < Date.now()) && t.classList.add("show"),
                    a.addEventListener("click", (function() {
                            localStorage.setItem("cookieDate", Date.now()),
                                t.classList.remove("show")
                        }
                    ))
            }(),
            window.FLS = !0,
            function(e) {
                let t = new Image;
                t.onload = t.onerror = function() {
                    e(2 == t.height)
                }
                    ,
                    t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
            }((function(e) {
                    let t = !0 === e ? "webp" : "no-webp";
                    document.documentElement.classList.add(t)
                }
            ))
    }
)();
