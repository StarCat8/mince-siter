/**
 * MINCE website configuration
 * ════════════════════════════
 * Edit THIS file to update papers, team, facilities and stats.
 * No need to touch any HTML file.
 */

const MINCE = {

  // ── Project stats ─────────────────────────────────────────────────────────
  stats: {
    starsAnalysed:  207,      // current number of analysed stars
    starsTarget:    1000,     // final catalog goal
    facilities:     8,        // number of telescopes
    papers:         4,        // published papers
  },

  // ── Papers ────────────────────────────────────────────────────────────────
  // status: "published" | "inprep"
  papers: [
    {
      roman: "I",
      title: "MINCE. I. Presentation of the project and of the first year sample",
      authors: "Cescutti G., et al.",
      journal: "A&A",
      year: 2022,
      adsUrl: "https://scixplorer.org/abs/2022A%26A...668A.168C/abstract",   // ← paste ADS link here
      status: "published",
    },
    {
      roman: "II",
      title: "MINCE. II. Neutron capture elements",
      authors: "François, P., et al.",
      journal: "A&A",
      year: 2024,
      adsUrl: "https://scixplorer.org/abs/2024A%26A...686A.295F/abstract",
      status: "published",
    },
    {
      roman: "III",
      title: "MINCE: III. Detailed chemical analysis of the UVES sample",
      authors: "F. Lucertini — et al.",
      journal: "A&A",
      year: 2025,
      adsUrl: "https://scixplorer.org/abs/2025A%26A...695A..36L/abstract",
      status: "published",
    },
    {
      roman: "IV",
      title: "MINCE: IV. A detailed analysis of 37 metal-poor and subsolar metallicity stars",
      authors: "L. Sgatti — et al.",
      journal: "A&A",
      year: 2026,
      adsUrl: "https://scixplorer.org/abs/2026A%26A...714A.370S/abstract",
      status: "published",
    },
    {
      roman: "V",
      title: "MINCE V — MIKE observations",
      authors: "L. Lombardo — et al.",
      journal: "A&A",
      year: null,
      adsUrl: null,
      status: "inprep",
    },
    {
      roman: "VI",
      title: "MINCE VI",
      authors: "A. Schichtel — et al.",
      journal: "A&A",
      year: null,
      adsUrl: null,
      status: "inprep",
    },
  ],

  // ── Team ──────────────────────────────────────────────────────────────────
  // Add/remove people freely. 'role' is optional.
  team: [
    { name: "Piercarlo Bonifacio",    inst: "Obs. de Paris, France",        role: "PI" },
    { name: "Gabriele Cescutti",      inst: "INAF Trieste, Italy",           role: "PI" },
    { name: "Elisabetta Caffau",      inst: "Obs. de Paris, France",         role: "" },
    { name: "Paolo di Marcantonio",   inst: "INAF Trieste, Italy",           role: "" },
    { name: "Maria Grazia Franchini",         inst: "INAF Trieste, Italy",           role: "" },
    { name: "Camilla Juls Hansen",         inst: "INAF Trieste, Italy",           role: "" },
    { name: "Andreas Korn",         inst: "INAF Trieste, Italy",           role: "" },
    { name: "Luca Sbordone",         inst: "INAF Trieste, Italy",           role: "" },
    { name: "Linda Lombardo",         inst: "INAF Trieste, Italy",           role: "" },
    { name: "Francesca Lucertini",         inst: "INAF Trieste, Italy",           role: "" },
    { name: "Thanh Chi Nguyen",         inst: "INAF Trieste, Italy",           role: "" },
    { name: "Lapo Sgatti",         inst: "INAF Trieste, Italy",           role: "" },
    { name: "The next person could be you ;)",         inst: "INAF Trieste, Italy",           role: "" },
    // ← add more collaborators here, same format
  ],

  // ── Facilities ────────────────────────────────────────────────────────────
  // aperture: mirror diameter in metres (edit these — the defaults may be wrong!)
  facilities: [
    { name: "TNG",      aperture: "3.58m", spectrograph: "HARPS-N",   resolution: "115,000", location: "La Palma, Spain" },
    { name: "CFHT",     aperture: "3.6m",  spectrograph: "ESPaDOnS",  resolution: "68,000",  location: "Mauna Kea, Hawaii" },
    { name: "OHP",      aperture: "1.93m", spectrograph: "SOPHIE",    resolution: "75,000",  location: "Haute-Provence, France" },
    { name: "NOT",      aperture: "2.56m", spectrograph: "FIES",      resolution: "67,000",  location: "La Palma, Spain" },
    { name: "Molėtai",  aperture: "1.65m", spectrograph: "VUES",      resolution: "60,000",  location: "Lithuania" },
    { name: "VLT",      aperture: "8.2m",  spectrograph: "UVES",      resolution: "110,000", location: "Paranal, Chile" },
    { name: "MPG/ESO",  aperture: "2.2m",  spectrograph: "FEROS",     resolution: "48,000",  location: "La Silla, Chile" },
    { name: "Magellan", aperture: "6.5m",  spectrograph: "MIKE",      resolution: "65,000",  location: "Las Campanas, Chile" },
  ],

  // ── GitHub data links ─────────────────────────────────────────────────────
  // Fill these in once you set up the GitHub repo
  github: {
    repoUrl:        "https://github.com/StarCat8/mince-siter",   // main repo
    releasesUrl:    "https://github.com/YOUR-ORG/mince/releases", // FITS files
    catalogCsv:     "https://github.com/StarCat8/mince_rep/blob/main/MINCE32.csv",
    visualizerUrl:  "https://starcat8.github.io/mince_rep/", // existing visualizer
  },
};
