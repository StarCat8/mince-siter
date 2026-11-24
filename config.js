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
      title: "Neutron capture elements in Milky Way halo stars at intermediate metallicity — First sample",
      authors: "Bonifacio P., Cescutti G., Caffau E. et al.",
      journal: "A&A",
      year: 2022,
      adsUrl: "#",   // ← paste ADS link here
      status: "published",
    },
    {
      roman: "II",
      title: "MINCE II — title",
      authors: "Cescutti G., Bonifacio P., Caffau E. et al.",
      journal: "A&A",
      year: 2023,
      adsUrl: "#",
      status: "published",
    },
    {
      roman: "III",
      title: "MINCE III — title",
      authors: "— et al.",
      journal: "A&A",
      year: 2024,
      adsUrl: "#",
      status: "published",
    },
    {
      roman: "IV",
      title: "MINCE IV — title",
      authors: "— et al.",
      journal: "A&A",
      year: 2024,
      adsUrl: "#",
      status: "published",
    },
    {
      roman: "V",
      title: "MINCE V — MIKE observations",
      authors: "— et al.",
      journal: "A&A",
      year: null,
      adsUrl: null,
      status: "inprep",
    },
    {
      roman: "VI",
      title: "MINCE VI — title",
      authors: "— et al.",
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
    { name: "M.G. Franchini",         inst: "INAF Trieste, Italy",           role: "" },
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
    repoUrl:        "https://github.com/YOUR-ORG/mince",   // main repo
    releasesUrl:    "https://github.com/YOUR-ORG/mince/releases", // FITS files
    catalogCsv:     "https://raw.githubusercontent.com/YOUR-ORG/mince/main/catalog.csv",
    visualizerUrl:  "https://YOUR-ORG.github.io/mince/visualizer/", // existing visualizer
  },
};
