const projects = [
  {
    id: "mturk-study",
    type: ["ux"],
    image: `${import.meta.env.BASE_URL}/assets/images/mturk.png`,
    caption: {
      en: "A behind-the-scenes look at a participant engaging with one task during the study. Photo © 2022 by Christoph Müller, featuring a consenting participant.",
      de: "Ein Blick hinter die Kulissen: Eine Teilnehmerin bei der Bearbeitung einer Aufgabe während der Studie. Foto © 2022 von Christoph Müller, mit Einwilligung der abgebildeten Person",
    },

    title: {
      en: "Quantitative Visualization Study",
      de: "Quantitative Visualisierungsstudie",
    },

    summary: {
      en: "Quantitative evaluation of static network representations.",
      de: "Quantitative Bewertung statischer Netzwerkdarstellungen.",
    },

    tldr: {
      en: `
  > **TL;DR**  
  > Conducted a quantitative study via MTurk to compare three static network representations: Node-Link diagrams (NL), Adjacency Matrices (AM), and Bipartite layouts (BP). AM and BP supported better high-level comprehension, while NL helped with cluster detection. Results inform layout choices based on task type and user goals.
      `,
      de: `
  > **Kurzfassung**  
  > Durchführung einer quantitativen Studie über MTurk zum Vergleich von drei statischen Netzwerkdarstellungen: Node-Link-Diagramme (NL), Adjazenzmatrizen (AM) und bipartite Layouts (BP). AM und BP unterstützten ein besseres Gesamtverständnis, während NL bei der Clustererkennung hilfreich war. Die Ergebnisse geben Empfehlungen zur Wahl geeigneter Layouts je nach Aufgabentyp und Nutzerziel.
      `,
    },

    sections: [
      {
        title: {
          en: "Summary",
          de: "Zusammenfassung",
        },
        content: {
          en: `I led a quantitative user study comparing three network visualization techniques — node-link diagrams (NL), adjacency matrices (AM), and bipartite layouts (BP) — with a focus on large networks and high-level overview tasks. The study was conducted using Amazon Mechanical Turk (MTurk) to achieve statistically significant results.`,
          de: `Ich leitete eine quantitative Nutzerstudie, in der drei Visualisierungstechniken für Netzwerke verglichen wurden – Node-Link-Diagramme (NL), Adjazenzmatrizen (AM) und bipartite Layouts (BP) – mit Fokus auf große Netzwerke und Aufgaben auf Übersichtsebene. Die Studie wurde über Amazon Mechanical Turk (MTurk) durchgeführt, um statistisch signifikante Ergebnisse zu erzielen.`,
        },
      },
      {
        title: {
          en: "My Role",
          de: "Meine Rolle",
        },
        content: {
          en: `
  - Designed a between-subjects study, including task structure and layout conditions  
  - Generated the study stimuli using **R** and **d3.js**  
  - Built the study platform using **JsPsych**, **PHP**, and **MySQL**  
  - Recruited and screened 150 participants via MTurk based on demographics, HIT score, and attention checks  
  - Conducted two rounds of pilot testing to refine task clarity and flow  
  - Interpreted findings to inform visualization design decisions
          `,
          de: `
  - Konzipierte eine Between-Subjects-Studie mit Aufgabenstruktur und Layoutbedingungen  
  - Erstellte die Stimuli mit **R** und **d3.js**  
  - Entwickelte die Studienplattform mit **JsPsych**, **PHP** und **MySQL**  
  - Rekrutierte und filterte 150 MTurk-Teilnehmer basierend auf Demografie, HIT-Score und Aufmerksamkeitschecks  
  - Führte zwei Pilotphasen durch, um Aufgabenverständnis und Ablauf zu optimieren  
  - Interpretierte die Ergebnisse zur Ableitung von Visualisierungsentscheidungen
          `,
        },
      },
      {
        title: {
          en: "Study Details",
          de: "Studienaufbau",
        },
        content: {
          en: `
  - **Participants:** 150 MTurk users, screened for quality  
  - **Design:** Randomized assignment to one of three layout types across five network tasks  
  - **Tasks Included:** Density estimation, cluster detection, structural overview  
  - **Metrics Recorded:** Accuracy, response time, and perceived difficulty
          `,
          de: `
  - **Teilnehmer:** 150 MTurk-Nutzer, auf Qualität geprüft  
  - **Studiendesign:** Zufällige Zuteilung zu einem von drei Layouttypen über fünf Netzwerkaufgaben  
  - **Aufgaben:** Dichteschätzung, Clustererkennung, strukturelle Übersicht  
  - **Messgrößen:** Genauigkeit, Reaktionszeit, wahrgenommene Schwierigkeit
          `,
        },
      },
      {
        title: {
          en: "Key Insights",
          de: "Zentrale Erkenntnisse",
        },
        content: {
          en: `
  - BP and AM layouts supported better high-level comprehension of network structure, while NL excelled at visualizing clusters  
  - BP was the weakest layout for density estimation; AM performed best  
  - For tasks involving node attributes or directionality, AM and BP provided clearer overviews due to their dual-axis structure
          `,
          de: `
  - BP und AM ermöglichten ein besseres Verständnis der Netzwerkstruktur, NL war am besten für Clustererkennung  
  - BP war am schlechtesten für Dichteschätzungen geeignet; AM war am besten  
  - Bei Aufgaben mit Knoteneigenschaften oder Richtung waren AM und BP durch ihre zweiachsige Struktur vorteilhaft
          `,
        },
      },
      {
        title: {
          en: "Implications",
          de: "Implikationen",
        },
        content: {
          en: `
  - For understanding overall network structure, layouts based on vertex ordering (AM and BP) performed better than force-directed approaches (NL)  
  - For density estimation, edge packing (as in AM) provided more accurate results than edge overdrawing (NL and BP)  
  - For cluster detection, node proximity had more impact than edge visibility — spatial grouping helped users more than clearly drawn connections
          `,
          de: `
  - Für das Gesamtverständnis waren Layouts mit Knotenordnung (AM, BP) effektiver als Kraft-basierte Ansätze (NL)  
  - Bei Dichteschätzungen war Kantenverdichtung (wie bei AM) präziser als überlagerte Kanten (NL, BP)  
  - Für Clustererkennung war Knotennähe wichtiger als Kantenzeichnung — räumliche Gruppierung half mehr als deutlich sichtbare Verbindungen
          `,
        },
      },
      {
        title: {
          en: "Reflection",
          de: "Reflexion",
        },
        content: {
          en: `
  This project sharpened my skills in crowd-sourced study design, visual stimulus development, and translating quantitative findings into actionable design recommendations. If repeated, I’d combine quantitative metrics with qualitative ones to better understand users’ reasoning during task performance.
          `,
          de: `
  Dieses Projekt stärkte meine Fähigkeiten in der Konzeption von Crowd-basierten Studien, der Entwicklung visueller Stimuli und der Ableitung praxisrelevanter Empfehlungen aus quantitativen Ergebnissen. Bei einer Wiederholung würde ich quantitative mit qualitativen Methoden kombinieren, um die Denkweise der Nutzer besser zu verstehen.
          `,
        },
      },
      {
        title: {
          en: "Read More",
          de: "Mehr erfahren",
        },
        content: {
          en: `
  <p class="project-actions">
    <a href="https://ieeexplore.ieee.org/document/9908291" target="_blank" class="contact-button">
      📄 Read Full Article
    </a>
  </p>
          `,
          de: `
  <p class="project-actions">
    <a href="https://ieeexplore.ieee.org/document/9908291" target="_blank" class="contact-button">
      📄 Zum Artikel
    </a>
  </p>
          `,
        },
      },
    ],
  },

  {
    id: "architect-lab",
    type: ["ux", "aec"],
    image: `${
      import.meta.env.BASE_URL
    }/assets/images/archiect_user_study_diagram.png`,
    caption: {
      en: "A visual summary of the study design, highlighting procedure, tasks, independent variables, and collected measures.",
      de: "Eine visuelle Zusammenfassung des Studiendesigns mit Ablauf, Aufgaben, unabhängigen Variablen und erhobenen Daten.",
    },
    title: {
      en: "Qualitative Study with Architects",
      de: "Qualitative Studie mit Architekt:innen",
    },
    summary: {
      en: "Evaluating design decisions in a visualization tool for architects.",
      de: "Bewertung von Designentscheidungen in einem Visualisierungstool für Architekt:innen.",
    },
    tldr: {
      en: `
  > **TL;DR**  
  > Studied how projection and visualization methods affect design exploration. Star Coordinates was preferred; continuous maps encouraged open exploration, while discrete maps supported detailed analysis. Results suggest value in user-adaptive visualization tools.
      `,
      de: `
  > **Kurzfassung**  
  > Untersuchte, wie Projektion und Visualisierung das Design-Explorationsverhalten beeinflussen. Star Coordinates wurde bevorzugt; kontinuierliche Karten förderten offene Exploration, während diskrete Karten detaillierte Analysen unterstützten. Die Ergebnisse sprechen für nutzeradaptive Visualisierungstools.
      `,
    },
    sections: [
      {
        title: { en: "Summary", de: "Zusammenfassung" },
        content: {
          en: `
  I led a qualitative lab study to evaluate how different visualization techniques and projection methods influence architects’ exploration of a design space. The study focused on how two visualization techniques (continuous vs. discrete maps) and two methods for projecting multivariate data into 2D space (Star Coordinates vs. UMAP) influenced user behavior and insight generation. The study was conducted with 12 architects in a controlled lab setting.
          `,
          de: `
  Ich leitete eine qualitative Laborstudie zur Untersuchung, wie verschiedene Visualisierungstechniken und Projektionsmethoden die Designexploration von Architekt:innen beeinflussen. Dabei wurden zwei Visualisierungstypen (kontinuierlich vs. diskret) und zwei Projektionsmethoden (Star Coordinates vs. UMAP) verglichen. Die Studie wurde mit 12 Architekt:innen in einer kontrollierten Laborumgebung durchgeführt.
          `,
        },
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        content: {
          en: `
  - Designed the overall study structure, including four domain-specific tasks  
  - Integrated the visualization tool developed in **.NET WPF** with **LimeSurvey** for capturing task responses  
  - Ran pilot testing with three visualization experts to refine the setup  
  - Collected and analyzed qualitative data, including screen and audio recordings  
  - Synthesized insights to inform future visualization tool design
          `,
          de: `
  - Entwarf die Studienstruktur inklusive vier fachspezifischer Aufgaben  
  - Integrierte das in **.NET WPF** entwickelte Tool mit **LimeSurvey** zur Erfassung von Antworten  
  - Führte Pilotversuche mit drei Visualisierungsexpert:innen zur Optimierung des Setups durch  
  - Sammelte und analysierte qualitative Daten (Bildschirm-/Audioaufnahmen)  
  - Leitet Erkenntnisse zur Weiterentwicklung von Visualisierungstools ab
          `,
        },
      },
      {
        title: { en: "Study Details", de: "Studiendetails" },
        content: {
          en: `
  - **Participants:** 12 architects from academic backgrounds  
  - **Design:** Mixed study design; participants were split into three groups to vary exposure to projection methods and visualization techniques  
  - **Tasks Included:** Participants completed four domain-specific tasks: estimating solution positions on the map, identifying alternative designs, detecting influential parameters, and analyzing parameter-performance correlations.  
  - **Data Collected:** Think-aloud protocols, screen/audio recordings, task difficulty ratings, mouse movement data, and subjective preferences regarding visualization and projection methods
          `,
          de: `
  - **Teilnehmende:** 12 Architekt:innen aus akademischem Umfeld  
  - **Design:** Gemischtes Studiendesign mit drei Gruppen zur Variation der Visualisierungsbedingungen  
  - **Aufgaben:** Positionsschätzung, Alternativdesigns identifizieren, einflussreiche Parameter erkennen, Parameter-Performance-Korrelationen analysieren  
  - **Daten:** Laut-Denken-Protokolle, Bildschirm-/Audioaufnahmen, Schwierigkeitseinschätzungen, Mausbewegungen, subjektive Präferenzen
          `,
        },
      },
      {
        title: { en: "Key Insights", de: "Zentrale Erkenntnisse" },
        content: {
          en: `
  - **Star Coordinates** was consistently preferred across tasks due to its intuitiveness and the presence of navigation axes  
  - **Continuous maps** supported open-ended exploration, while **discrete maps** facilitated detailed analysis and comparison  
  - Participants exhibited three primary navigation strategies: **axis sweeping** (often with Star Coordinates), **random exploration** (frequent with UMAP), and **systematic scanning** (more common with discrete maps)
          `,
          de: `
  - **Star Coordinates** wurde durchweg bevorzugt, da es intuitiv ist und Navigationsachsen bietet  
  - **Kontinuierliche Karten** förderten offene Exploration, während **diskrete Karten** gezielte Analysen ermöglichten  
  - Drei Navigationsstrategien wurden beobachtet: **Achsen-Sweeping** (bei Star Coordinates), **zufällige Exploration** (häufig bei UMAP) und **systematisches Scannen** (bei diskreten Karten)
          `,
        },
      },
      {
        title: { en: "Implications", de: "Implikationen" },
        content: {
          en: `
  This study highlights the need for **user-adaptive visual analytics tools** — systems that tailor interaction based on user traits such as expertise, visualization literacy, and cognitive preferences. Participants with lower familiarity or confidence, especially with UMAP, showed signs of frustration and disengagement. Future systems should aim to reduce cognitive load through intuitive adaptation while maintaining transparency and user control. Balancing adaptability with user trust remains a complex but critical design challenge.
          `,
          de: `
  Diese Studie zeigt den Bedarf an **nutzeradaptiven Visual-Analytics-Tools** — Systeme, die Interaktionen an individuelle Merkmale wie Expertise oder Visualisierungskompetenz anpassen. Weniger vertraute Teilnehmer:innen, insbesondere mit UMAP, waren häufig frustriert. Zukünftige Systeme sollten die kognitive Belastung reduzieren, intuitive Anpassungen bieten und gleichzeitig Kontrolle und Vertrauen erhalten.
          `,
        },
      },
      {
        title: { en: "Reflection", de: "Reflexion" },
        content: {
          en: `
  While the small sample size limited the generalizability of our findings, conducting in-person evaluations with domain experts provided unique value. The lab setting enabled close observation of user strategies, detailed feedback, and rich think-aloud commentary — insights difficult to achieve through crowd-sourced studies. In future work, I would combine this in-depth qualitative approach with larger-scale, quantitative studies to validate and expand on the observed patterns.
          `,
          de: `
  Die geringe Stichprobengröße begrenzt zwar die Verallgemeinerbarkeit, aber die persönliche Zusammenarbeit mit Fachexpert:innen ermöglichte tiefe Einblicke. Die Laborsituation erlaubte detaillierte Beobachtungen, Feedback und Laut-Denken-Protokolle — Erkenntnisse, die per Crowdsourcing kaum zu erzielen wären. Künftig würde ich qualitative Tiefe mit quantitativer Breite kombinieren.
          `,
        },
      },
      {
        title: { en: "Read More", de: "Mehr erfahren" },
        content: {
          en: `
  <p class="project-actions">
    <a href="https://link.springer.com/article/10.1007/s00371-024-03491-3" target="_blank" class="contact-button">
      📄 Read Full Article
    </a>
  </p>
          `,
          de: `
  <p class="project-actions">
    <a href="https://link.springer.com/article/10.1007/s00371-024-03491-3" target="_blank" class="contact-button">
      📄 Zum Artikel
    </a>
  </p>
          `,
        },
      },
    ],
  },

  {
    id: "literature-review",
    type: ["ux"],
    image: `${import.meta.env.BASE_URL}/assets/images/thematic.png`,

    title: {
      en: "Thematic Analysis",
      de: "Thematische Analyse",
    },
    summary: {
      en: "Thematic coding of visualization literature on scalability.",
      de: "Thematische Codierung von Visualisierungsforschung zur Skalierbarkeit.",
    },
    tldr: {
      en: `
> **TL;DR**  
> Contributed to a large-scale literature review by thematically coding 127 visualization papers to analyze how scalability is defined and justified. The project highlighted inconsistencies in terminology and the need for shared frameworks across visualization subfields.
    `,
      de: `
> **Kurzfassung**  
> Beitrag zu einer groß angelegten Literaturstudie durch thematische Codierung von 127 Visualisierungspublikationen, um zu analysieren, wie Skalierbarkeit definiert und begründet wird. Das Projekt offenbarte Begriffsunschärfen und betonte die Notwendigkeit gemeinsamer Frameworks innerhalb der Visualisierungsforschung.
    `,
    },

    sections: [
      {
        title: { en: "Summary", de: "Zusammenfassung" },
        content: {
          en: `
As part of a larger literature review project on scalability in visualization, I contributed to the thematic coding of over 120 visualization publications. The goal was to analyze how scalability is defined and communicated in visualization research and to support the development of a conceptual model that clarifies the different meanings and dimensions of scalability across subfields.
        `,
          de: `
Im Rahmen eines umfassenderen Literaturprojekts zu Skalierbarkeit in der Visualisierung beteiligte ich mich an der thematischen Codierung von über 120 wissenschaftlichen Publikationen. Ziel war es, zu analysieren, wie Skalierbarkeit definiert und kommuniziert wird, und ein konzeptionelles Modell zu entwickeln, das unterschiedliche Bedeutungen und Dimensionen von Skalierbarkeit in verschiedenen Fachrichtungen klärt.
        `,
        },
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        content: {
          en: `
- Participated in the **manual coding** of all 127 selected papers using a structured coding scheme  
- Identified how scalability claims were defined and supported across papers (e.g., through metrics, case studies, or user studies)  
- Worked collaboratively to ensure consistency and accuracy in coding through consensus reviews  
- Contributed to refining the coding scheme and surfacing recurring patterns in the literature
        `,
          de: `
- Beteiligung an der **manuellen Codierung** aller 127 ausgewählten Publikationen mithilfe eines strukturierten Codierschemas  
- Analyse, wie Skalierbarkeitsaussagen definiert und gestützt wurden (z. B. durch Metriken, Fallstudien oder Nutzertests)  
- Zusammenarbeit im Team zur Sicherstellung von Konsistenz und Genauigkeit durch Konsensabgleiche  
- Mitwirkung an der Weiterentwicklung des Schemas und der Identifikation wiederkehrender Muster in der Literatur
        `,
        },
      },
      {
        title: { en: "Study Details", de: "Studiendetails" },
        content: {
          en: `
- **Data Source:** 127 peer-reviewed visualization papers  
- **Coding Method:** Manual thematic coding of paper content  
- **Goal:** Understand how scalability is presented and justified, and validate our conceptual model for consistent use across the field
        `,
          de: `
- **Datenbasis:** 127 peer-reviewte Publikationen zur Visualisierung  
- **Methode:** Manuelle thematische Codierung der Inhalte  
- **Ziel:** Analyse der Darstellung und Begründung von Skalierbarkeit sowie Validierung unseres konzeptionellen Modells für eine konsistente Nutzung im Fachgebiet
        `,
        },
      },
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
        content: {
          en: `
Scalability is defined and evaluated in very different ways across visualization research — from performance metrics and plots in technical papers to subjective reasoning in design-focused studies.
        `,
          de: `
Skalierbarkeit wird in der Visualisierungsforschung sehr unterschiedlich definiert und bewertet — von Leistungskennzahlen in technischen Arbeiten bis hin zu subjektiven Einschätzungen in gestaltungsorientierten Studien.
        `,
        },
      },
      {
        title: { en: "Implications", de: "Implikationen" },
        content: {
          en: `
Our work showed the need for shared frameworks and terminology that help researchers communicate and share knowledge, especially when working across disciplines.
        `,
          de: `
Unsere Arbeit verdeutlichte den Bedarf an gemeinsamen Frameworks und Begrifflichkeiten, die den Austausch und die Verständigung über Fachgrenzen hinweg erleichtern.
        `,
        },
      },
      {
        title: { en: "Reflection", de: "Reflexion" },
        content: {
          en: `
This project sharpened my skills in **thematic coding**. It also reminded me how important it is to be **precise and evidence-based** when making claims about concepts like scalability, both in research and product contexts.
        `,
          de: `
Das Projekt schärfte meine Fähigkeiten in der **thematischen Codierung**. Es erinnerte mich auch daran, wie wichtig es ist, bei Aussagen zu Konzepten wie Skalierbarkeit **präzise und evidenzbasiert** zu sein — sowohl in der Forschung als auch in der Produktentwicklung.
        `,
        },
      },
      {
        title: { en: "Read More", de: "Mehr erfahren" },
        content: {
          en: `
<p class="project-actions">
  <a href="https://ieeexplore.ieee.org/document/10003102/" target="_blank" class="contact-button">
    📄 Read Full Article
  </a>
</p>
        `,
          de: `
<p class="project-actions">
  <a href="https://ieeexplore.ieee.org/document/10003102/" target="_blank" class="contact-button">
    📄 Zum Artikel
  </a>
</p>
        `,
        },
      },
    ],
  },

  {
    id: "creativity-workshops",
    type: ["ux", "aec"],
    image: `${import.meta.env.BASE_URL}/assets/images/workshop2.png`,
    caption: {
      en: "Examples of sticky notes collected from the workshop.",
      de: "Beispiele von im Workshop gesammelten Haftnotizen.",
    },
    title: {
      en: "Creativity Workshops",
      de: "Kreativitäts-Workshops",
    },
    summary: {
      en: "Exploring early-stage design through participatory workshops.",
      de: "Untersuchung früher Designphasen durch partizipative Workshops.",
    },
    tldr: {
      en: `
  > **TL;DR**  
  > Facilitated a creativity workshop with architects to explore their current workflows and identify opportunities for visualization. Used structured activities—including wishful thinking, brainstorming, and visual analogies—to elicit design needs and data-driven tool ideas.
      `,
      de: `
  > **Kurzfassung**  
  > Durchführung eines Kreativworkshops mit Architekt:innen zur Analyse bestehender Arbeitsabläufe und Identifikation von Visualisierungspotenzialen. Eingesetzte Methoden: Wunschdenken, Brainstorming und visuelle Analogien zur Ableitung datengetriebener Toolideen.
      `,
    },
    sections: [
      {
        title: { en: "Summary", de: "Zusammenfassung" },
        content: {
          en: `
  I facilitated a creativity workshop with five architects to explore their current design workflows and uncover how visualization could support early-stage decision-making. Based on the **Creative Visualization-Opportunities (CVO)** framework, the session aimed to elicit domain challenges, inspire ideation, and surface opportunities for new visualization tools.
          `,
          de: `
  Ich leitete einen Kreativitäts-Workshop mit fünf Architekt:innen, um ihre bestehenden Designprozesse zu analysieren und herauszufinden, wie Visualisierung in frühen Phasen unterstützen kann. Der Workshop basierte auf dem **Creative Visualization-Opportunities (CVO)**-Framework und zielte darauf ab, Herausforderungen zu identifizieren, Ideen zu fördern und neue Toolpotenziale aufzuzeigen.
          `,
        },
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        content: {
          en: `
  - Designed and facilitated a half-day **CVO-inspired workshop** with five architectural designers  
  - Selected and led key workshop activities: **wishful thinking**, **brainstorming**, and **visualization analogies**  
  - Collected and analyzed artifacts including **sticky notes**, **sketches**, and **audio recordings**  
  - Synthesized the results into themes and opportunity areas to inform future tool development
          `,
          de: `
  - Konzipierte und moderierte einen halbtägigen Workshop auf Basis des CVO-Frameworks mit fünf Architekt:innen  
  - Wählte und leitete zentrale Aktivitäten: **Wunschdenken**, **Brainstorming**, **visuelle Analogien**  
  - Sammelte und analysierte Materialien wie **Haftnotizen**, **Skizzen** und **Audioaufnahmen**  
  - Leitete aus den Ergebnissen Themen und Potenziale für neue Visualisierungstools ab
          `,
        },
      },
      {
        title: { en: "Workshop Methods", de: "Workshop-Methoden" },
        content: {
          en: `
  - **Wishful Thinking**: Participants shared ideal visualization capabilities without technological constraints  
  - **Brainstorming**: Small group discussion and sketching generated concepts around data types, tasks, and interaction modes  
  - **Visualization Analogies**: Participants reflected on existing visualizations from other domains and imagined how these could map to their design context
          `,
          de: `
  - **Wunschdenken**: Teilnehmende nannten ideale Visualisierungsfunktionen ohne technische Einschränkungen  
  - **Brainstorming**: Diskussionen in Kleingruppen und Skizzierung neuer Ideen zu Datentypen, Aufgaben und Interaktionsformen  
  - **Visuelle Analogien**: Reflexion über Visualisierungen aus anderen Domänen und deren Übertragbarkeit auf architektonische Kontexte
          `,
        },
      },
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
        content: {
          en: `
  The **visualization analogy** activity was especially effective at prompting participants to link unfamiliar visuals to their domain needs. Across activities, participants expressed a preference for tools that connect abstract data to **geometric and material representations**—a recurring theme in architectural workflows.
          `,
          de: `
  Die Methode der **visuellen Analogien** war besonders wirksam, um Assoziationen zwischen fremden Visualisierungen und den eigenen Anforderungen herzustellen. Insgesamt äußerten die Teilnehmenden eine Präferenz für Tools, die abstrakte Daten mit **geometrischen und materiellen Darstellungen** verbinden — ein wiederkehrendes Thema in der Architekturpraxis.
          `,
        },
      },
      {
        title: { en: "Reflection", de: "Reflexion" },
        content: {
          en: `
  This was my first hands-on experience conducting a creativity-focused research workshop. It gave me a deeper understanding of how to structure open-ended, participatory sessions and how letting participants lead the conversation and resisting the urge to steer the discussion are essential for uncovering authentic insights.
          `,
          de: `
  Dies war meine erste praktische Erfahrung mit einem kreativitätsorientierten Forschungsworkshop. Ich lernte, wie man offene, partizipative Sitzungen sinnvoll strukturiert — und wie wichtig es ist, die Diskussion nicht zu lenken, sondern den Teilnehmenden Raum für echte Einsichten zu geben.
          `,
        },
      },
      {
        title: { en: "Read More", de: "Mehr erfahren" },
        content: {
          en: `
  <p class="project-actions">
    <a href="https://ieeexplore.ieee.org/abstract/document/8440830/" target="_blank" class="contact-button">
      📄 Read More
    </a>
  </p>
          `,
          de: `
  <p class="project-actions">
    <a href="https://ieeexplore.ieee.org/abstract/document/8440830/" target="_blank" class="contact-button">
      📄 Zum Artikel
    </a>
  </p>
          `,
        },
      },
    ],
  },

  {
    id: "dynamic-network",
    type: ["viz"],
    title: {
      en: "Dynamic Network Visualization",
      de: "Dynamische Netzwerkvisualisierung",
    },
    summary: {
      en: "Scalable layouts for visualizing dynamic networks.",
      de: "Skalierbare Layouts zur Visualisierung dynamischer Netzwerke.",
    },
    tldr: {
      en: `
  > **TL;DR**  
  > Designed and evaluated two scalable layout techniques for dynamic networks based on bipartite graph layouts. The layouts support temporal pattern recognition while minimizing overdraw, and were tested through parameter studies and real-world datasets.
      `,
      de: `
  > **Kurzfassung**  
  > Entwicklung und Bewertung zweier skalierbarer Layouttechniken für dynamische Netzwerke auf Basis bipartiter Graphen. Die Layouts unterstützen die Erkennung zeitlicher Muster bei gleichzeitig minimaler Überlagerung und wurden durch Parameterstudien und reale Datensätze getestet.
      `,
    },
    sections: [
      {
        title: { en: "Summary", de: "Zusammenfassung" },
        content: {
          en: `
  I led the design and evaluation of two alternative approaches for visualizing dynamic networks using bipartite layouts. The goal was to create scalable visual representations that preserve both **temporal patterns** and **network structure** as the number of time points increases. The two designs were developed, tested, and applied to datasets from different domains.
          `,
          de: `
  Ich leitete die Konzeption und Evaluation zweier alternativer Visualisierungsansätze für dynamische Netzwerke basierend auf bipartiten Layouts. Ziel war es, skalierbare Darstellungen zu entwickeln, die sowohl **zeitliche Muster** als auch **Netzwerkstrukturen** bei zunehmender Anzahl an Zeitpunkten bewahren. Die Designs wurden entwickelt, getestet und auf verschiedene Domänendaten angewendet.
          `,
        },
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        content: {
          en: `
  - Designed two layout strategies (SEP and TEP) for dynamic network visualization  
  - Implemented interactive prototypes using **Java**, later re-developed in **Angular** and **Node.js**  
  - Conducted a **parameter study** using synthetic network data generated in **R**  
  - Applied both designs to real-world datasets: **global trade**, **US domestic flights**, and **software call graphs**
          `,
          de: `
  - Entwarf zwei Layoutstrategien (SEP und TEP) für die dynamische Netzwerkvisualisierung  
  - Implementierte interaktive Prototypen in **Java**, später neu entwickelt mit **Angular** und **Node.js**  
  - Führte eine **Parameterstudie** mit synthetischen Netzwerken aus **R** durch  
  - Angewendet auf reale Datensätze: **Welthandel**, **US-Inlandsflüge** und **Software-Aufrufgraphen**
          `,
        },
      },
      {
        title: { en: "Project Details", de: "Projektdetails" },
        content: {
          en: `
  - **Design Goal:** Visualize dynamic networks in a way that scales over time (i.e., thousands of time points) while retaining readability of both structural and temporal features  
  - **Approach:**  
    - Developed two layout strategies—**Stacked Edge Plot (SEP)** and **Time-aligned Edge Plot (TEP)**—that compress small multiples into a stacked layout  
    - Built a frontend to interact with various visualization parameters and data operations, including **timeline partitioning** and **vertex ordering**  
  - **Evaluation:**  
    - Conducted a parameter study using synthetic graphs with varying density and number of time points  
    - Applied the designs to real datasets to assess generalizability and insight generation
          `,
          de: `
  - **Ziel:** Dynamische Netzwerke visualisieren, die über viele Zeitpunkte hinweg skalieren, ohne Lesbarkeit von Struktur oder Zeitverlauf zu verlieren  
  - **Ansatz:**  
    - Entwicklung zweier Layoutstrategien – **Stacked Edge Plot (SEP)** und **Time-aligned Edge Plot (TEP)** – zur Komprimierung von Small Multiples in gestapelte Darstellungen  
    - Frontend für die Interaktion mit Visualisierungsparametern und Datenoperationen, inkl. **Zeitachsen-Segmentierung** und **Knotenordnung**  
  - **Evaluation:**  
    - Parameterstudie mit synthetischen Graphen mit unterschiedlicher Dichte und Zeitanzahl  
    - Anwendung auf reale Daten zur Bewertung von Generalisierbarkeit und Erkenntnisgewinn
          `,
        },
      },
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
        content: {
          en: `
  Both designs mitigated overdraw and supported temporal pattern recognition better than existing techniques. However, scalability remains constrained by screen space, especially for large networks (i.e., more than a few hundred nodes). **Edge filtering** and **timeline partitioning** were key to making dense datasets interpretable.
          `,
          de: `
  Beide Layouts reduzierten Überzeichnungen und verbesserten die Erkennung zeitlicher Muster im Vergleich zu bestehenden Methoden. Die Skalierbarkeit bleibt jedoch durch den Bildschirmplatz begrenzt – insbesondere bei großen Netzwerken (mehrere hundert Knoten). **Kantenfilterung** und **Zeitachsen-Segmentierung** waren entscheidend, um dichte Daten interpretierbar zu machen.
          `,
        },
      },
      {
        title: { en: "Reflection", de: "Reflexion" },
        content: {
          en: `
  Although the focus was on layout design, this project highlighted how **data-layer operations** (like timeline partitioning) are critical to the effectiveness of visual mapping. Our designs outperformed state-of-the-art techniques in flexibility but also revealed how certain visual mapping decisions can limit the impact of those data operations.
          `,
          de: `
  Obwohl der Fokus auf Layoutdesign lag, zeigte das Projekt, wie wichtig **Operationen auf Datenebene** (wie Zeitachsen-Segmentierung) für die Wirksamkeit visueller Darstellungen sind. Unsere Layouts übertrafen etablierte Ansätze in der Flexibilität, offenbarten aber auch Grenzen bestimmter Visualisierungsentscheidungen in Bezug auf Datenoperationen.
          `,
        },
      },
      {
        title: { en: "Future Work", de: "Zukünftige Arbeiten" },
        content: {
          en: `
  Next steps include developing a **quantitative user study** to validate the findings from our work, as well as building a **graph generation model** that integrates temporal and structural features.
          `,
          de: `
  Nächste Schritte sind eine **quantitative Nutzerstudie**, um die Ergebnisse zu validieren, sowie die Entwicklung eines **Graphgenerierungsmodells**, das zeitliche und strukturelle Eigenschaften integriert.
          `,
        },
      },
    ],
  },

  {
    id: "timber-stakeholders",
    type: ["viz", "aec"],

    title: {
      en: "Timber Stakeholders Explorer",
      de: "Timber Stakeholders Explorer",
    },
    summary: {
      en: "An interactive tool to explore global stakeholder networks in timber construction.",
      de: "Ein interaktives Tool zur Analyse globaler Stakeholder-Netzwerke im Holzbau.",
    },
    tldr: {
      en: `
  > **TL;DR**  
  > Built an interactive web app to visualize relationships among global timber construction stakeholders. The tool supports exploration of stakeholder networks and was developed iteratively with domain experts.
      `,
      de: `
  > **Kurzfassung**  
  > Entwicklung einer interaktiven Webanwendung zur Visualisierung globaler Beziehungen im Holzbau. Das Tool unterstützt die Erkundung von Stakeholder-Netzwerken und wurde iterativ mit Fachexpert:innen entwickelt.
      `,
    },

    sections: [
      {
        title: { en: "Summary", de: "Zusammenfassung" },
        content: {
          en: `
  I designed and developed an interactive web application to explore stakeholder relationships in the global timber construction industry. The goal was to help users uncover collaboration patterns and identify key players across the industry. The tool provides both geographic and network-based views of stakeholder interactions.
          `,
          de: `
  Ich entwickelte eine interaktive Webanwendung zur Analyse von Stakeholder-Beziehungen in der globalen Holzbauindustrie. Ziel war es, Kollaborationsmuster sichtbar zu machen und wichtige Akteure zu identifizieren. Das Tool bietet sowohl geografische als auch netzwerkbasierte Ansichten.
          `,
        },
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        content: {
          en: `
  - Cleaned and structured raw data, identifying key attributes for stakeholder classification and visual encoding  
  - Designed and implemented an interactive UI for exploring stakeholders by geography, type, and connection patterns using **D3.js**, **Leaflet**, and **JavaScript**  
  - Collaborated iteratively with subject matter experts to refine the feature set and improve usability
          `,
          de: `
  - Rohdaten bereinigt und strukturiert, Schlüsselattribute für Stakeholder-Klassifikation und visuelle Kodierung definiert  
  - Interaktive Benutzeroberfläche entwickelt, zur Exploration nach Region, Typ und Verbindungen – unter Einsatz von **D3.js**, **Leaflet** und **JavaScript**  
  - In enger Zusammenarbeit mit Expert:innen die Funktionalität iterativ weiterentwickelt und die Bedienbarkeit verbessert
          `,
        },
      },
      {
        title: { en: "Project Details", de: "Projektdetails" },
        content: {
          en: `
  - **Use Case:** Help policymakers, researchers, and industry analysts explore how different players in the timber construction sector collaborate globally  
  - **Core Features:**  
    - Two interactive views of the stakeholder network: a **node-link diagram** and a **geographical map**  
    - Multiple **visual encoding options** for the node-link diagram, a **fisheye zoom lens**, and **filtering by stakeholder role**  
  - **Technology Stack:**  
    - Frontend: **JavaScript**, **HTML**, **CSS**  
    - Visualization: **D3.js** for network graphs, **Leaflet** for geographic mapping
          `,
          de: `
  - **Anwendungsfall:** Unterstützung von politischen Entscheidungsträgern, Forschenden und Analyst:innen bei der Analyse globaler Zusammenarbeit im Holzbau  
  - **Kernfunktionen:**  
    - Zwei interaktive Ansichten: **Netzwerkdiagramm** und **geografische Karte**  
    - Verschiedene **visuelle Kodierungen**, **Fisheye-Zoom**, **Filterung nach Stakeholder-Rollen**  
  - **Technologie-Stack:**  
    - Frontend: **JavaScript**, **HTML**, **CSS**  
    - Visualisierung: **D3.js** (Netzwerk), **Leaflet** (Karte)
          `,
        },
      },
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
        content: {
          en: `
  Working closely with domain experts was essential to shaping the tool's functionality and ensuring its value. A flexible, dual-mode visualization approach allowed users to shift between **network structure** and **spatial distribution**, helping uncover patterns not obvious in tabular format.
          `,
          de: `
  Die enge Zusammenarbeit mit Fachexpert:innen war entscheidend für die Gestaltung der Funktionalität und den Mehrwert des Tools. Der flexible Wechsel zwischen **Netzwerkstruktur** und **räumlicher Verteilung** ermöglichte es den Nutzenden, Muster zu erkennen, die in Tabellenform verborgen geblieben wären.
          `,
        },
      },
      {
        title: { en: "Reflection", de: "Reflexion" },
        content: {
          en: `
  This project reinforced the importance of **designing with—not just for—domain experts**. It also deepened my experience with D3.js.
          `,
          de: `
  Das Projekt unterstrich, wie wichtig es ist, **mit und nicht nur für Fachexpert:innen** zu gestalten. Es vertiefte außerdem meine Erfahrungen mit D3.js.
          `,
        },
      },
      {
        title: { en: "Read More", de: "Mehr erfahren" },
        content: {
          en: `
  <p class="project-actions">
    <a href="https://www.mdpi.com/2075-5309/13/9/2287" target="_blank" class="contact-button">
      📄 Read Full Article
    </a>
    <a href="https://archstakeholders.github.io/" target="_blank" class="contact-button">
      🧭 Live Prototype
    </a>
  </p>
          `,
          de: `
  <p class="project-actions">
    <a href="https://www.mdpi.com/2075-5309/13/9/2287" target="_blank" class="contact-button">
      📄 Zum Artikel
    </a>
    <a href="https://archstakeholders.github.io/" target="_blank" class="contact-button">
      🧭 Live-Demo
    </a>
  </p>
          `,
        },
      },
    ],
  },

  {
    id: "fitness-landscape",
    type: ["viz", "aec"],
    image: `${import.meta.env.BASE_URL}/assets/images/fitness.png`,
    caption: {
      en: "A screenshot of the interactive user interface for exploring fitness landscapes in architectural design optimization. Visual polish and annotations by Kuno Kurzhals.",
      de: "Ein Screenshot der interaktiven Benutzeroberfläche zur Erkundung von Fitness-Landschaften in der architektonischen Designoptimierung. Visuelle Gestaltung und Annotationen von Kuno Kurzhals.",
    },
    title: {
      en: "Fitness Landscape Explorer",
      de: "Fitness Landscape Explorer",
    },
    summary: {
      en: "An interactive tool for exploring architectural design optimization through visualized fitness landscapes.",
      de: "Ein interaktives Tool zur Analyse architektonischer Designoptimierung über visualisierte Fitness-Landschaften.",
    },
    tldr: {
      en: `
  > **TL;DR**  
  > Contributed to the design and delivery of an interactive tool for exploring high-dimensional design spaces in architectural design. The tool enables trade-off analysis and optimization insight through two visual encodings and was evaluated through a structured case study with domain experts.
      `,
      de: `
  > **Kurzfassung**  
  > Beteiligte mich an Konzeption und Umsetzung eines interaktiven Tools zur Erkundung hochdimensionaler Designräume in der Architektur. Das Tool ermöglicht Kompromissanalyse und Optimierungseinblicke über zwei Visualisierungsformen und wurde im Rahmen einer strukturierten Fallstudie mit Expert:innen evaluiert.
      `,
    },
    sections: [
      {
        title: { en: "Summary", de: "Zusammenfassung" },
        content: {
          en: `
  I contributed to the development of an interactive desktop tool for exploring **fitness landscapes** in architectural design optimization. Fitness landscapes visualize how design parameters relate to objective functions, such as performance or material efficiency. The tool enables designers to identify correlations between parameters, detect parameters with significant influence on performance, and find alternative solutions with similar performance but differing parameter configurations.
          `,
          de: `
  Ich arbeitete an der Entwicklung eines interaktiven Desktop-Tools zur Analyse von **Fitness-Landschaften** in der architektonischen Designoptimierung mit. Fitness-Landschaften zeigen auf, wie Entwurfsparameter mit Zielgrößen wie Leistung oder Materialeffizienz zusammenhängen. Das Tool unterstützt Designer:innen dabei, Korrelationen zu erkennen, wichtige Parameter zu identifizieren und alternative Lösungen mit vergleichbarer Leistung, aber unterschiedlichen Konfigurationen zu finden.
          `,
        },
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        content: {
          en: `
  - Conducted **requirements analysis** in collaboration with engineering and architectural stakeholders  
  - Implemented an early proof of concept to validate core ideas and interactions  
  - Supported the core developer and oversaw integration with **Rhino/Grasshopper**, the geometry engine used by design professionals  
  - Contributed to the **UI design**, helping define exploration modes and interaction behavior  
  - Evaluated usability and performance through a structured case study and feedback sessions
          `,
          de: `
  - Durchführung der **Anforderungsanalyse** in Zusammenarbeit mit Ingenieur:innen und Architekt:innen  
  - Entwicklung eines frühen Prototyps zur Validierung der Kernideen und Interaktionen  
  - Unterstützung der Hauptentwicklung und Betreuung der Integration mit **Rhino/Grasshopper**, der Geometrie-Engine für Designprofis  
  - Mitwirkung am **UI-Design**, einschließlich der Definition von Explorationsmodi und Interaktionsverhalten  
  - Evaluation von Nutzbarkeit und Leistung im Rahmen einer strukturierten Fallstudie und Feedbackrunden
          `,
        },
      },
      {
        title: { en: "Project Details", de: "Projektdetails" },
        content: {
          en: `
  - **Design Goal:** Support visual exploration of high-dimensional design spaces for single-objective optimization  
  - **Core Features:**  
    - Two visualization modes: a **continuous density map** and a **discrete glyph-based map**  
    - Dynamic views of objective function and design parameters based on cursor position  
    - A **portal lens** for semantic zooming in the glyph-based map  
    - 3D renderings of selected design configurations  
    - An **exploration history** to track which areas of the landscape have been visited  
  - **Use Case:** Applied by collaborators to analyze the design space of coreless filament wound structures  
  - **Technology Stack:**  
    - **C#**, **.NET**, **WPF**  
    - Integration with **Rhino/Grasshopper** for geometry computation and rendering
          `,
          de: `
  - **Ziel:** Visuelle Erkundung hochdimensionaler Designräume für Einzelziel-Optimierung  
  - **Hauptfunktionen:**  
    - Zwei Visualisierungsmodi: eine **kontinuierliche Dichtekarte** und eine **diskrete glyphenbasierte Karte**  
    - Dynamische Ansichten von Zielgrößen und Designparametern basierend auf Cursorposition  
    - Eine **Portal-Linse** für semantisches Zoomen in der Glyphenkarte  
    - 3D-Renderings ausgewählter Designkonfigurationen  
    - Eine **Explorationshistorie**, um besuchte Bereiche der Landschaft nachzuverfolgen  
  - **Anwendungsfall:** Analyse des Designraums kernlos gewickelter Strukturen  
  - **Technologie-Stack:**  
    - **C#**, **.NET**, **WPF**  
    - Integration mit **Rhino/Grasshopper** für Geometrie- und Renderfunktionen
          `,
        },
      },
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
        content: {
          en: `
  The expert was able to confirm existing hypotheses about the design space and also uncover new insights. They appreciated both visualization modes, with the **glyph-based map** offering focused interaction and the **density map** providing spatial overviews. The **3D render view** proved essential part of the analysis workflow, as not every high-performing solution is a feasible design.
          `,
          de: `
  Die Expert:innen konnten bestehende Hypothesen zum Designraum bestätigen und gleichzeitig neue Erkenntnisse gewinnen. Beide Visualisierungsmodi wurden geschätzt: die **glyphenbasierte Karte** für gezielte Interaktionen und die **Dichtekarte** für räumliche Übersichten. Die **3D-Ansicht** war ein essenzieller Bestandteil des Analyseprozesses, da nicht jede leistungsstarke Lösung auch tatsächlich umsetzbar war.
          `,
        },
      },
      {
        title: { en: "Reflection", de: "Reflexion" },
        content: {
          en: `
  This project reinforced the importance of designing within the tools and visual language familiar to domain experts. Integration with Rhino/Grasshopper was essential for adoption. Likewise, architects ultimately want to “see” the 3D representation of the designs. For exploration tools to be adopted, they must strike a balance between data abstraction and 3D design representation.
          `,
          de: `
  Das Projekt verdeutlichte, wie wichtig es ist, in den gewohnten Tools und mit der visuellen Sprache der Fachexpert:innen zu arbeiten. Die Integration mit Rhino/Grasshopper war entscheidend für die Akzeptanz. Architekt:innen möchten das Design letztlich **sehen** — erfolgreiche Explorationstools müssen also zwischen Datenabstraktion und 3D-Repräsentation balancieren.
          `,
        },
      },
      {
        title: { en: "Read More", de: "Mehr erfahren" },
        content: {
          en: `
  <p class="project-actions">
    <a href="https://link.springer.com/article/10.1007/s00371-024-03491-3" target="_blank" class="contact-button">
      📄 Read Full Article
    </a>
  </p>
          `,
          de: `
  <p class="project-actions">
    <a href="https://link.springer.com/article/10.1007/s00371-024-03491-3" target="_blank" class="contact-button">
      📄 Zum Artikel
    </a>
  </p>
          `,
        },
      },
    ],
  },

  {
    id: "vis-future-aec",
    type: ["aec"],
    title: {
      en: "Visualization for the Future of AEC",
      de: "Visualisierung für die Zukunft der AEC-Branche",
    },
    summary: {
      en: "A perspective article on visualization's role in shaping AEC’s future.",
      de: "Ein Perspektivartikel über die Rolle der Visualisierung in der Zukunft von Architektur, Ingenieurwesen und Bauwesen (AEC).",
    },
    tldr: {
      en: `
  > **TL;DR**  
  > Co-authored a perspective article on how visualization and AR technologies can support the digital transformation of the architecture, engineering, and construction (AEC) industry. The piece outlines domain challenges and identifies visualization opportunities across design, fabrication, and construction workflows.
      `,
      de: `
  > **Kurzfassung**  
  > Mitverfasser eines Perspektivartikels über das Potenzial von Visualisierungs- und AR-Technologien für die digitale Transformation der AEC-Branche. Der Artikel beschreibt branchenspezifische Herausforderungen und identifiziert Einsatzmöglichkeiten für Visualisierung in Entwurf, Fertigung und Bauausführung.
      `,
    },
    sections: [
      {
        title: { en: "Summary", de: "Zusammenfassung" },
        content: {
          en: `
  This article explores the unique challenges of the AEC industry and outlines the potential for **visualization research** to play a transformative role in its digital future. Drawing on long-term interdisciplinary collaboration, the article characterizes the AEC ecosystem, its complexity, and the need for **human-in-the-loop visual tools** that support decision-making across design, fabrication, and construction phases.
          `,
          de: `
  Dieser Artikel beleuchtet die spezifischen Herausforderungen der AEC-Branche und zeigt auf, wie **Visualisierungsforschung** eine transformative Rolle in ihrer digitalen Zukunft spielen kann. Basierend auf langjähriger interdisziplinärer Zusammenarbeit beschreibt der Artikel das komplexe AEC-Ökosystem und betont den Bedarf an **human-in-the-loop** Visualisierungstools, die Entscheidungen in Entwurf, Fertigung und Bau unterstützen.
          `,
        },
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        content: {
          en: `
  - Contributed to the conceptual framing and writing of the article  
  - Helped articulate domain challenges and translate them into visualization research opportunities  
  - Synthesized examples from collaborative projects involving architectural design optimization
          `,
          de: `
  - Mitwirkung an der konzeptionellen Ausrichtung und am Schreiben des Artikels  
  - Formulierung branchenspezifischer Herausforderungen und Übertragung in Forschungsfragen zur Visualisierung  
  - Zusammenstellung von Beispielen aus Kooperationsprojekten zur architektonischen Designoptimierung
          `,
        },
      },
      {
        title: { en: "Article Highlights", de: "Kernaussagen" },
        content: {
          en: `
  - Discusses critical AEC characteristics and why it lags behind in automation compared to other sectors such as manufacturing or agriculture  
  - Highlights key AEC solution strategies, including **robotic fabrication**, **design generation and optimization**, **adaptive structures**, and **sustainable materials**  
  - Identifies areas where visualization can offer value, such as **AR for human-robot collaboration**, **visual analytics for design space exploration**, and **situated visualization for adaptive structures**
          `,
          de: `
  - Diskussion zentraler Merkmale der AEC-Branche und Gründe, warum sie in Sachen Automatisierung anderen Bereichen wie Fertigung oder Landwirtschaft hinterherhinkt  
  - Darstellung von Lösungsansätzen: **robotergestützte Fertigung**, **generatives Design**, **adaptive Strukturen**, **nachhaltige Materialien**  
  - Identifikation von Einsatzmöglichkeiten für Visualisierung, etwa **AR für Mensch-Roboter-Kollaboration**, **Visual Analytics für Designspace-Exploration**, **situative Visualisierung für adaptive Strukturen**
          `,
        },
      },
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
        content: {
          en: `
  The article advocates for **human-in-the-loop** solutions that reflect the contextual and cognitive needs of AEC professionals — and suggests that no community is better positioned to tackle these challenges than the visualization and visual analytics community.
          `,
          de: `
  Der Artikel spricht sich für **human-in-the-loop**-Lösungen aus, die den kontextuellen und kognitiven Anforderungen von AEC-Fachleuten gerecht werden – und betont, dass die Visualisierungs-Community besonders gut aufgestellt ist, diese Herausforderungen anzugehen.
          `,
        },
      },
      {
        title: { en: "Reflection", de: "Reflexion" },
        content: {
          en: `
  Writing this article helped me step back from individual research projects and think more broadly about how design, engineering, and digital technologies intersect at a systems level. It also allowed me to reflect on the interplay between the **visualization** and **AEC** domains—and what these two design-driven disciplines can learn from one another.
          `,
          de: `
  Das Schreiben dieses Artikels ermöglichte mir, Abstand von einzelnen Forschungsprojekten zu gewinnen und systemischer über die Schnittstellen von Design, Technik und digitalen Technologien nachzudenken. Es war auch eine Gelegenheit, das Zusammenspiel von **Visualisierung** und **AEC** zu reflektieren – und darüber, was beide gestaltungsorientierten Disziplinen voneinander lernen können.
          `,
        },
      },
      {
        title: { en: "Read More", de: "Mehr erfahren" },
        content: {
          en: `
  <p class="project-actions">
    <a href="https://ieeexplore.ieee.org/abstract/document/9709159" target="_blank" class="contact-button">
      📄 Read Full Article
    </a>
  </p>
          `,
          de: `
  <p class="project-actions">
    <a href="https://ieeexplore.ieee.org/abstract/document/9709159" target="_blank" class="contact-button">
      📄 Zum Artikel
    </a>
  </p>
          `,
        },
      },
    ],
  },
];

export default projects;
