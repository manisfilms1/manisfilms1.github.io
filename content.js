/* =====================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR SITE.

   Three rules so nothing breaks:
   1. Text goes inside "double quotes".
   2. Every line inside a block ends with a comma.
   3. Do not delete the brackets  { }  [ ]  around a block.

   To add a film: copy one whole { ... } block in the "films" list,
   paste it at the top of the list, and change the words inside.
   ===================================================================== */

window.SITE = {

  /* ---------- Your name and the home page ---------- */
  name: "Mani Sachdeva",
  roles: ["Filmmaker"],

  hero: {
    big: "All for Art, Art for All",
    small: "11 short films directed, a dozen more produced.",
    button: "View films",
    /* the pictures behind your name on the home page. Six film stills work best. */
    images: [
      "images/film-the-modern-don-quixote.jpg",
      "images/film-genieology-still.jpg",
      "images/film-better-than-her.jpg",
      "images/film-monkeying-around-still.jpg",
      "images/film-beat-that.jpg",
      "images/film-comic-heist-still.jpg"
    ]
  },

  featured: "Frankenshark",   /* the film shown on the home page. Must match a film title below. */

  /* ---------- How people reach you ---------- */
  email: "m7sachdeva@gmail.com",
  phone: "",                       /* shown on the Contact page. Leave "" to hide it */
  instagram: "goldenmstudios",    /* your handle, without the @ */
  studio: "Golden M Studios",

  /* ---------- The banner at the top of each page ---------- */
  pages: {
    directing: {
      title: "Directing",
      intro: "Mani's films aim to entertain the masses while staying true to his indie roots.",
      image: "images/film-better-than-her.jpg"      /* the picture behind the page title */
    },
    projects: {
      title: "Projects",
      intro: "Producing, assistant directing, production design and crew work, on Golden M Studios productions and other filmmakers' sets.",
      image: "images/film-comic-heist-still.jpg"
    },
    about: {
      title: "About",
      intro: "Filmmaker and producer. UC Santa Cruz film graduate, relocating to Los Angeles.",
      image: "images/film-the-modern-don-quixote.jpg"
    },
    contact: {
      title: "Contact",
      intro: "For work, collaborations or screenings, send an email or a message on Instagram.",
      image: "images/film-genieology-still.jpg",
      photo: "images/mani-at-work.jpg"     /* the picture under your email and Instagram */
    }
  },

  /* ---------- About page ---------- */
  about: {
    photo: "images/mani-portrait.jpg",       /* the picture next to your bio */
    gallery: [],         /* optional extra pictures under your bio, like  ["images/a.jpg", "images/b.jpg"] */
    paragraphs: [
      "Mani Sachdeva is a filmmaker, producer, and the founder of Golden M Studios. Known for an agile, end-to-end approach to visual storytelling, Mani has directed and produced over a dozen independent projects across live-action, stop-motion, documentary, and music video formats.",
      "A versatile collaborator, he draws on comprehensive on-set experience, spanning assistant directing, production design, script supervision, and editing, to execute distinct creative visions efficiently. Mani’s films have garnered festival awards and selections at Tromadance, Great Film Club, and TINAFF, with his latest genre piece, Frankenshark, featured on HorrorHound TV."
    ]
  },

  /* ---------- Films you directed (newest first) ----------
     youtube: paste the normal YouTube link.
     image:   the thumbnail in the Directing grid. Put a picture in the "images" folder and
              write "images/its-name.jpg". Leave it "" and the picture comes from YouTube.
     poster:  optional bigger picture behind the play button on the film's own page.
              Leave it "" to reuse the thumbnail.
     Leave anything you do not have as ""  or  []                                   */
  thumbShape: "4:3",     /* shape of the Directing thumbnails: "4:3" or "16:9" */

  films: [
    {
      title: "The Modern Don Quixote",
      year: "2026",
      kind: "Mockumentary",
      status: "In post-production",
      youtube: "",
      image: "images/film-the-modern-don-quixote.jpg",
      poster: "",
      logline: "A comical play on the famous Don Quixote, putting him in a modern setting as he and his noble squire, Sancho, traverse the world.",
      statementLabel: "Director's statement",
      statement: "This film was made as a tribute to my friend and actor, Uriel Mendoza, as I saw many parallels between his life and Don Quixote's.",
      cast: [],
      festivals: [],
      awards: ""
    },
    {
      title: "Frankenshark",
      year: "2026",
      kind: "Senior thesis film",
      status: "",
      youtube: "https://youtu.be/yUtQJnQ5JOw",
      image: "images/film-frankenshark.jpg",
      poster: "",
      logline: "It's the end of finals at Saint Druze College. Logan and Shreeta party their woes away until their plans are cut short by the mysterious creature known only as... FRANKENSHARK.",
      statementLabel: "Director's statement",
      statement: "Frankenshark is a love letter to Frankenstein, the most misunderstood monster in horror. It also serves as a goodbye to my college years, with themes of graduating and the fear of losing friends and the connections you make during those years.",
      cast: [],
      festivals: ["Tromadance", "HorrorHound TV", "TINAFF"],
      awards: ""
    },
    {
      title: "Better Than Her",
      year: "2025",
      kind: "Music video",
      status: "",
      youtube: "https://youtu.be/DASpgt_Icf8",
      image: "images/film-better-than-her.jpg",
      poster: "",
      logline: "Joey Ferlatte stars in the music video for his debut album as he goes through the motions of a breakup and the feeling of loss with his new partner.",
      statementLabel: "Director's statement",
      statement: "I worked closely with the musician, Joey Ferlatte, to create a vision both of us could be proud of. Basing the story on our own experiences, we took the opportunity to experiment with filmmaking, especially in the editing process, as we both wanted to get out of our comfort zones.",
      cast: ["Joey Ferlatte"],
      festivals: [],
      awards: ""
    },
    {
      title: "In the Mind of Sodz: The Making of the Sodz Show",
      year: "2025",
      kind: "Behind the scenes",
      status: "",
      youtube: "https://youtu.be/ZzoPFyea5Wg",
      image: "images/film-in-the-mind-of-sodz.jpg",
      poster: "images/film-in-the-mind-of-sodz-still.jpg",
      logline: "A behind-the-scenes look at the making of The Sodz Show, with an exclusive interview with series creator Daniel Ward.",
      statementLabel: "Director's statement",
      statement: "This serves as a tribute to my close friend Daniel, a fellow artist who works hard to create his web series, The Sodz Show. I strongly believe in supporting other artists, and the best way to do that is to make a movie about them.",
      cast: ["Daniel Ward"],
      festivals: [],
      awards: ""
    },
    {
      title: "Genieology",
      year: "2025",
      kind: "",
      status: "",
      youtube: "https://youtu.be/0_cUSRRORTE",
      image: "images/film-genieology.jpg",
      poster: "images/film-genieology-still.jpg",
      logline: "When Edward (Dean Veera) is given three wishes by a Genie (Sraavya Apuri), it's up to his lawyer, Antonio Azad (Armstrong Dorismond), to help him decide his wishes.",
      statementLabel: "Director's statement",
      statement: "Based on a class assignment, the film grew out of a game my friends and I would play: Genie Lawyer, a hypothetical game where one tries to make a foolproof wish. I took on the challenge of making a simple conversation between three people interesting, using a combination of humor and my own directing style. I took this chance to really work with my actors and embrace subtle acting choices to give a more comedic performance.",
      cast: ["Dean Veera as Edward", "Sraavya Apuri as the Genie", "Armstrong Dorismond as Antonio Azad"],
      festivals: ["TINAFF"],
      awards: ""
    },
    {
      title: "Beat That",
      year: "2025",
      kind: "48-hour film",
      status: "",
      youtube: "https://youtu.be/3Lz7W7kYnOg",
      image: "images/film-beat-that.jpg",
      poster: "",
      logline: "Made in just under 48 hours for UCSC's Slug48 competition, the film follows Dean (Dean Veera) and Anwyn (Anwyn Benson Hernandez) as they attempt to one-up each other in various competitions.",
      statementLabel: "Director's statement",
      statement: "",
      cast: ["Dean Veera as Dean", "Anwyn Benson Hernandez as Anwyn"],
      festivals: ["UCSC Slug48"],
      awards: "Winner, Most Fun Film"
    },
    {
      title: "Monkeying Around",
      year: "2024",
      kind: "",
      status: "",
      youtube: "https://youtu.be/aHg_99Pxy1Y",
      image: "images/film-monkeying-around.jpg",
      poster: "images/film-monkeying-around-still.jpg",
      logline: "Meet Roddy (Mani Sachdeva), a 20-something adoptee from Africa trying to make it big as an aspiring actor, who is also an ape.",
      statementLabel: "Director's statement",
      statement: "The film serves as a self-reflection on my own personal fears in filmmaking.",
      cast: ["Mani Sachdeva as Roddy"],
      festivals: ["Tromadance", "Filmmaker Sessions", "Great Film Club"],
      awards: ""
    },
    {
      title: "Comic Heist",
      year: "2024",
      kind: "",
      status: "",
      youtube: "https://youtu.be/4BrwwiIgVZo",
      image: "images/film-comic-heist.jpg",
      poster: "images/film-comic-heist-still.jpg",
      logline: "When Remi (Aditya Krishnan) is wrongfully fired from his job at the comic shop, he enlists his best friend, Static (Dulce Arias), and small-time crook Jimmy Pool (Joey Arvizu) to enact the greatest heist of the 2000s: stealing his boss's prized comic books.",
      statementLabel: "Director's statement",
      statement: "My biggest live-action film at the time, this was an amazing opportunity to work with a talented cast and crew who were patient with me in this new era. I was able to work with them and move my ideas from the page to the screen seamlessly.",
      cast: ["Aditya Krishnan as Remi", "Dulce Arias as Static", "Joey Arvizu as Jimmy Pool"],
      festivals: ["Liftoff Film Festival", "SCTV Film Festival"],
      awards: ""
    },
    {
      title: "Adam",
      year: "2023",
      kind: "Stop motion",
      status: "",
      youtube: "https://youtu.be/8o8qqAU7WX4",
      image: "images/film-adam.jpg",
      poster: "",
      logline: "The mad Doctor Viktor Frankenstein has created life in ADAM, a stop-motion tribute to Frankenstein.",
      statementLabel: "Director's statement",
      statement: "I was bullied, mistreated and seen as a freak for many years of my life. I was attacked mentally and physically up until my high school graduation. Even while I was bullied, I slowly started to get stronger and fight back. Although I always knew about Frankenstein and even sort of read it for a class once, I never appreciated it until recently. I saw myself in Frankenstein, especially in Bride of Frankenstein. Watching that made me cry, and it stuck with me more than a lot of movies had. A line I specifically held onto was 'to a new world of gods and monsters.' Even though it's almost 100 years old, something about that line stuck with me. That, combined with buying a Gundam kit, made me want to make something again. For weeks I was thinking of what to make with this literal blank skeleton. Then I found a latex glove and figured it out: I would make a Frankenstein homage. So about three weeks ago I began creating Adam. I had no concept art or script, but just hoped what I made would look good.",
      cast: [],
      festivals: ["Chromatic Cinematheque"],
      awards: ""
    },
    {
      title: "The Last Adventure",
      year: "2023",
      kind: "",
      status: "",
      youtube: "https://www.youtube.com/watch?v=qWA8UNKROFM",
      image: "images/film-the-last-adventure.jpg",
      poster: "",
      logline: "After the death of their globetrotting best friend, Nancy and Heather set out to complete The Last Adventure.",
      statementLabel: "Director's statement",
      statement: "This was my first foray into live-action filmmaking. It was a great experience, and I deeply appreciate my actors' and crew's patience with me. Turning my love of adventure films into something I could make at home, I was heavily inspired by the documentary 'Raiders!: The Story of the Greatest Fan Film Ever Made'.",
      cast: [],
      festivals: [],
      awards: ""
    },
    {
      title: "Le Mannequin",
      year: "2022",
      kind: "",
      status: "",
      youtube: "https://youtu.be/_bPZvL5KCgI",
      image: "images/film-le-mannequin.jpg",
      poster: "",
      logline: "A struggling artist attempts his next magnum opus. Frustrated at the lack of progress, he storms out of his room. Unbeknownst to him, his model, Le Mannequin, has come to life and attempts to inspire him to keep creating.",
      statementLabel: "Artist statement",
      statement: "A tribute to the Pixar shorts that inspired me growing up, Le Mannequin serves as the premiere of my college years of filmmaking. Like Le Mannequin, I too am ready to venture into the greater world of creativity. Though I may not know what I'll do next, I know I will at least make something.",
      cast: [],
      festivals: ["Miyazaki Film Festival"],
      awards: ""
    }
  ],

  /* ---------- Projects page: everything else you worked on ----------
     Each line is  ["Title", "Your role", "Year"]                        */
  credits: [
    {
      group: "Golden M Studios Productions",
      items: [
        ["Cream and Sugar", "Producer", ""],
        ["Synthetic Hope", "Producer", ""],
        ["Marked", "Producer / Assistant Director", ""],
        ["Buckets", "Producer / Writer", ""],
        ["Golden Minute Movies: Studio '97", "Producer / Writer", ""],
        ["Continuity", "Producer", "2026"],
        ["Golden Minute Movies: Teleportation", "Producer / Writer", "2026"],
        ["I Am Afraid", "Producer", "2026"],
        ["Unrehearsed", "Producer", "2026"],
        ["Fratpires", "Producer", "2026"],
        ["Amma", "Producer", "2026"],
        ["Impulsive", "Producer", "2025"],
        ["The Sodz Show", "Executive Producer", "2024 to present"],
        ["Making of Comic Heist", "Executive Producer", "2024"]
      ]
    },
    {
      group: "Short Films",
      items: [
        ["Cognitive Bicycle Therapy", "Assistant Director", "2026"],
        ["Castles", "Assistant Director", "2026"],
        ["Midnight Bite", "Production Designer", "2025"],
        ["Piggies", "Extra", "2025"],
        ["Where the Wild Wind Blows", "Props", "2025"],
        ["Mirrors", "Extra", "2024"],
        ["Father Nature", "Production Assistant, Set Decorator, Props", "2024"],
        ["Synthetic Hope", "Prop Design, Production Assistant", "2024"],
        ["Legal Justice Saga", "Script Supervisor, Episode 3", "2023"]
      ]
    },
    {
      group: "Music Videos",
      items: [
        ["La Russel: Hammer Time", "Production Assistant", "2024"]
      ]
    },
    {
      group: "School Projects",
      items: [
        ["Tales from the Comic Shop", "Director / Editor (Film150)", "2025"],
        ["Beyond the Boardwalk", "Editor / Director (Film170)", "2025"],
        ["Spare Me No One", "Set Designer (FPC)", "2025"],
        ["Melt Into You", "Animator (FPC)", "2025"],
        ["Mort D'un Acteur", "Actor, Production Assistant (FPC)", "2024"]
      ]
    }
  ]

};
