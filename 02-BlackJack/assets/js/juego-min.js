const miModulo = (() => {
    "use strict";
    let e = [];
    const t = ["C", "D", "H", "S"],
        n = ["A", "J", "Q", "K"];
    let r = 0,
        s = 0;
    const a = document.querySelector("#btnPedir"),
        o = document.querySelector("#btnPlantarse"),
        c = document.querySelector("#btnNuevo"),
        l = document.querySelectorAll("small"),
        d = document.querySelector("#jugador-cartas"),
        i = document.querySelector("#computadora-cartas"),
        u = () => { e = m(), r = 0, s = 0, a.disabled = !1, o.disabled = !1, l[0].innerText = 0, l[1].innerText = 0, i.innerHTML = "", d.innerHTML = "" },
        m = () => {
            e = [];
            for (let n = 2; n <= 10; n++)
                for (let r of t) e.push(n + r);
            for (let r of t)
                for (let t of n) e.push(t + r);
            return _.shuffle(e)
        };
    u();
    const b = () => { if (0 === e.length) throw "No hay cartas en la baraja"; return e.pop() },
        g = e => { const t = String(e).substring(0, e.length - 1); return isNaN(t) ? "A" === t ? 11 : 10 : 1 * t },
        p = e => {
            do {
                const e = b();
                s > 10 && "A" === e.substring(0, e.length - 1) ? (s += g(e) - 10, l[1].innerText = s) : (s += g(e), l[1].innerText = s);
                const t = document.createElement("img");
                t.src = `assets/cartas/${e}.png`, t.className = "carta", i.append(t)
            } while (s < e && e <= 21);
            h(e)
        },
        h = e => { setTimeout(() => { s === e ? alert("Empate") : s > 21 ? alert("Ganaste") : alert("Perdiste") }, 100) };
    return a.addEventListener("click", () => {
        const e = b();
        r > 10 && "A" === e.substring(0, e.length - 1) ? (r += g(e) - 10, l[0].innerText = r) : (r += g(e), l[0].innerText = r);
        const t = document.createElement("img");
        t.src = `assets/cartas/${e}.png`, t.className = "carta", d.append(t), r > 21 ? (console.warn("Lo siento mucho, perdiste"), a.disabled = !0, o.disabled = !0, p(r)) : 21 === r && (console.warn("21, ¡Genial, Ganaste!"), a.disabled = !0, o.disabled = !0, p(r))
    }), o.addEventListener("click", () => { p(r), a.disabled = !0, o.disabled = !0 }), c.addEventListener("click", () => { console.clear, u() }), { nuevoJuego: u }
})();