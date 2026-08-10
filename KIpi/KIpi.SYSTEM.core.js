export async function KIpi_SYSTEM() {

  const system = {
    ROOT: null,
    MAU: null,
    MAIN: null,
    KIpi: null,
    TMP: { U: [], W: [], E: [] },
    modules: {},
    errors: [],
    status: "INIT"
  };

  // ------------------------------------------------------
  // 1. ROOT LADEN
  // ------------------------------------------------------
  try {
    const root = await import("./ROOT.js");
    system.ROOT = root.ROOT || "NO_ROOT";
  } catch (err) {
    system.errors.push("ROOT fehlt: " + err);
  }

  // ------------------------------------------------------
  // 2. 2u-MODULE LADEN
  // ------------------------------------------------------
  const twoU = ["SHIFT", "SPIN", "PULL", "PUSH", "FLOW", "BREAK", "DROP"];

  for (const mod of twoU) {
    try {
      const m = await import(`./${mod}.js`);
      system.modules[mod] = m.run || null;
    } catch (err) {
      system.errors.push(`Fehler in ${mod}.js: ${err}`);
    }
  }

  // ------------------------------------------------------
  // 3. RECHENMODULE LADEN
  // ------------------------------------------------------
  const calc = ["360", "3mal3", "OUR"];

  for (const mod of calc) {
    try {
      const m = await import(`./${mod}.js`);
      system.modules[mod] = m.calc || null;
    } catch (err) {
      system.errors.push(`Fehler in ${mod}.js: ${err}`);
    }
  }

  // ------------------------------------------------------
  // 4. TMP-BEREICHE LADEN
  // ------------------------------------------------------
  system.TMP.U = [1, 2, 3];
  system.TMP.W = [4, 5, 6];
  system.TMP.E = [7, 8, 9];

  // ------------------------------------------------------
  // 5. MAU / MAIN / KIpi erzeugen
  // ------------------------------------------------------
  system.MAU = { raw: { U: 1, W: 2 } };
  system.MAIN = { raw: { E: 3 } };
  system.KIpi = { raw: { U: 1, W: 2, E: 3 } };

  // ------------------------------------------------------
  // 6. PIPELINE AUSFÜHREN
  // ------------------------------------------------------
  try {
    const pipeline = await import("./Pipeline.raw.js");
    system.pipeline = pipeline.run(system);
  } catch (err) {
    system.errors.push("Pipeline.raw Fehler: " + err);
  }

  // ------------------------------------------------------
  // 7. STATUS
  // ------------------------------------------------------
  system.status = system.errors.length === 0 ? "OK" : "WARN";

  return system;
}
