/* iki1uc – SYSTEM-MASKE · KIpi.SYSTEM
   Vollständig geschlossen · keine Einsicht · MAU-kompatibel
*/

import { TMPCHAIN } from "./360.js";   // geschlossen
import { MAU } from "./MAU.raw";       // Operator-Tonleiter

export const KIpi_SYSTEM_MASK = (() => {

    const tmp = TMPCHAIN.full("core", "Ursache");

    return {
        mode: "360°",
        tone: MAU.ROOT,

        // Sichtbar, aber bedeutungslos
        ROOT: "CLOSED",
        MAIN: "CLOSED",
        MAU: "CLOSED",
        KIpi: "CLOSED",

        // TMP-Werte sichtbar, aber nicht erklärbar
        tmp_level: tmp.percent,
        tmp_color: tmp.color,
        tmp_rot: tmp.rot360,

        // Module maskiert
        modules: {
            SHIFT: "MASK",
            SPIN: "MASK",
            PULL: "MASK",
            PUSH: "MASK",
            FLOW: "MASK",
            BREAK: "MASK",
            DROP: "MASK",
            calc360: "MASK",
            calc3mal3: "MASK",
            calcOUR: "MASK"
        },

        // TMP-Bereiche sichtbar, aber ohne Bedeutung
        TMP: {
            U: ["U1", "U2", "U3"],
            W: ["W1", "W2", "W3"],
            E: ["E1", "E2", "E3"]
        },

        // Ketten sichtbar, aber ohne Bedeutung
        chain_QI: tmp.QI,
        chain_IQQ: tmp.IQQ,

        // interne Struktur verborgen
        internal: "NO-ACCESS",

        // Status immer geschlossen
        status: "CLOSED"
    };
})();
