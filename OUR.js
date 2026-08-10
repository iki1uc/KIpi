<script>
// iki1uc · INTERNAL TMP ENGINE · 3x3 · 6-ACHSE · 360° · 8X · 12X

const TMP360 = {
    // 1:1 virtuelle Adressen (jede Zugnummer bekommt eine eindeutige Adresse)
    addr(id) {
        return `vaddr_${id}_360`;
    },

    // 360° Grundrotation
    rot360(id) {
        return {
            deg: 360,
            tag: `rot360_${id}`,
            addr: this.addr(id)
        };
    },

    // 8×360° Konstellation
    rot8x(id) {
        return {
            deg: 360 * 8,
            tag: `rot8x_${id}`,
            addr: this.addr(id)
        };
    },

    // 12×360° gerichtete Rotation
    rot12x(id) {
        return {
            deg: 360 * 12,
            tag: `rot12x_${id}`,
            addr: this.addr(id)
        };
    },

    // TMP-Führung (ein- und ausstieg)
    lead(id) {
        return {
            in: `tmp_in_${id}`,
            out: `tmp_out_${id}`,
            addr: this.addr(id)
        };
    },

    // Vollständiger TMP-Datensatz (kombiniert mit deinem TMP.get)
    full(operator, ebene) {
        const base = TMP.get(operator, ebene);
        const id = base.zug;

        return {
            zug: id,
            hit: base.hit,
            dump: base.dump,
            lage: base.lage,
            ursache: base.ursache,
            wirkung: base.wirkung,
            ergebnis: base.ergebnis,

            // neue interne Felder
            addr: this.addr(id),
            rot360: this.rot360(id),
            rot8x: this.rot8x(id),
            rot12x: this.rot12x(id),
            lead: this.lead(id)
        };
    }
};

// Beispiel: interne Ausgabe
console.log(TMP360.full("slide", "Ursache"));
console.log(TMP360.full("score", "Ergebnis"));
</script>
