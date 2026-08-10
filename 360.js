<script>
// iki1uc · INTERNAL TMP ENGINE · QI · IQQ · 360° · 8X · 12X · KETTEN

const TMPCHAIN = {
    // Farben (gelb/rot/grün)
    color: {
        ursache: "gelb",
        wirkung: "rot",
        ergebnis: "grün"
    },

    // Prozent
    percent: {
        ursache: 33,
        wirkung: 66,
        ergebnis: 99,
        voll: 100
    },

    // Rotationen
    rot: {
        r360: 360,
        r8x: 360 * 8,
        r12x: 360 * 12
    },

    // QI-Kette (12x360°)
    QI: ["◉", 3, "◎", "◆", "△", "▣", 81, 756, 27, 3, "↺"],

    // IQQ-Kette (6x360°)
    IQQ: [3, 9, 81, 756, 27, 3, "↺"],

    // Ketten-Ausgabe
    chain(type) {
        return type === "QI" ? this.QI : this.IQQ;
    },

    // TMP360 + Ketten kombiniert
    full(operator, ebene) {
        const base = TMP360.full(operator, ebene);

        return {
            ...base,
            color: TMPCHAIN.color[ebene.toLowerCase()],
            percent: TMPCHAIN.percent[ebene.toLowerCase()],
            rot360: TMPCHAIN.rot.r360,
            rot8x: TMPCHAIN.rot.r8x,
            rot12x: TMPCHAIN.rot.r12x,
            QI: TMPCHAIN.chain("QI"),
            IQQ: TMPCHAIN.chain("IQQ")
        };
    }
};

// Beispiel
console.log(TMPCHAIN.full("slide", "Ursache"));
console.log(TMPCHAIN.full("score", "Ergebnis"));
</script>
