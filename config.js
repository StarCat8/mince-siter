/**
 * MINCE website configuration
 * ════════════════════════════
 * Edit THIS file to update papers, team, facilities and stats.
 * No need to touch any HTML file.
 */

const MINCE = {

  // ── Project stats ─────────────────────────────────────────────────────────
  stats: {
    starsAnalysed:  102,      // current number of analysed stars
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
  // To add a telescope: copy one block and edit it. The page updates by itself.
  //   aperture : mirror diameter (text shown on the card)
  //   url      : official website (button under the picture)
  //   image    : picture file inside  images/facilities/  (.png .jpg .jpeg .webp)
  //              If omitted, the page looks for  images/facilities/<name>.png|jpg|jpeg|webp
  //              (name with "/" and spaces turned into "_", accents removed, e.g. MPG_ESO.jpg)
  //   credit   : image credit shown under the picture (required by most photo licences)
  facilities: [
    { name: "TNG",      aperture: "3.58m", spectrograph: "HARPS-N",   resolution: "115,000", location: "La Palma, Spain",
      url: "https://www.tng.iac.es/",                                          image: "", credit: "Avet Harutyunyan / TNG" },
    { name: "CFHT",     aperture: "3.6m",  spectrograph: "ESPaDOnS",  resolution: "68,000",  location: "Mauna Kea, Hawaii",
      url: "https://www.cfht.hawaii.edu/",                                     image: "", credit: "Webcam image" },
    { name: "OHP",      aperture: "1.93m", spectrograph: "SOPHIE",    resolution: "75,000",  location: "Haute-Provence, France",
      url: "https://ohp.osupytheas.fr/",                                       image: "", credit: "" },
    { name: "NOT",      aperture: "2.56m", spectrograph: "FIES",      resolution: "67,000",  location: "La Palma, Spain",
      url: "https://www.not.iac.es/",                                          image: "", credit: "Ruslan Merzlyakov" },
    { name: "Molėtai",  aperture: "1.65m", spectrograph: "VUES",      resolution: "60,000",  location: "Lithuania",
      url: "https://mao.tfai.vu.lt/sci/en/",                                   image: "", credit: "By MindaugasMacijauskas at English Wikipedia - Author: Mindaugas Macijauskas, Public Domain, https://commons.wikimedia.org/wiki/Special:Redirect/page/5059295" },
    { name: "VLT",      aperture: "8.2m",  spectrograph: "UVES",      resolution: "110,000", location: "Paranal, Chile",
      url: "https://www.eso.org/public/teles-instr/paranal-observatory/vlt/",  image: "", credit: "By ESO/G. Hüdepohl (atacamaphoto.com), CC BY 4.0, https://commons.wikimedia.org/wiki/Special:Redirect/page/106165664" },
    { name: "MPG/ESO",  aperture: "2.2m",  spectrograph: "FEROS",     resolution: "48,000",  location: "La Silla, Chile",
      url: "https://www.eso.org/public/teles-instr/lasilla/mpg22/",            image: "", credit: "By Credit: ESO/H.H.Heyer - https://www.eso.org/public/images/esopia00046teles/http://www.eso.org/public/archives/images/original/esopia00046teles.jpg, CC BY 3.0, https://commons.wikimedia.org/wiki/Special:Redirect/page/12117220" },
    { name: "Magellan", aperture: "6.5m",  spectrograph: "MIKE",      resolution: "65,000",  location: "Las Campanas, Chile",
      url: "https://www.lco.cl/magellan-telescopes/",                          image: "", credit: "By Jan Skowron - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/wiki/Special:Redirect/page/32278583" },
    { name: "Large Binocular Telescope", aperture: "11.8m (effective)",  spectrograph: "PEPSI",      resolution: "130,000",  location: "Arizona, USA",
      url: "https://www.lbto.org/",                          image: "", credit: "By Mohamed Osama AlNagdy, 2010-12-13 - de:File:LargeBinoTelescope_NASA.jpg, auf etwa 40% beschnitten, Copyrighted free use, https://commons.wikimedia.org/wiki/Special:Redirect/page/32980017" },
  ],

  // ── GitHub data links ─────────────────────────────────────────────────────
  // Fill these in once you set up the GitHub repo
  github: {
    repoUrl:        "https://github.com/StarCat8/mince-siter",   // main repo
    releasesUrl:    "https://github.com/YOUR-ORG/mince/releases", // FITS files
    catalogCsv:     "https://github.com/StarCat8/mince_rep/blob/main/MINCE32.csv",
    visualizerUrl:  "https://starcat8.github.io/mince_rep/", // existing visualizer
    spectraUrl:     "https://starcat8.github.io/mince_rep/spectra.html", // spectra archive (browse / plot / download FITS)
  },
};
