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
  > Conducted a quantitative study via MTurk to compare three static network representations: Node-Link diagrams ([[Component:InlineIcon type="NL"]]), Adjacency Matrices ([[Component:InlineIcon type="AM"]]), and Bipartite layouts ([[Component:InlineIcon type="BP"]]). [[Component:InlineIcon type="AM"]] and [[Component:InlineIcon type="BP"]] supported better high-level comprehension, while [[Component:InlineIcon type="NL"]] helped with cluster detection. Results inform layout choices based on task type and user goals.
      `,
      de: `
  > **Kurzfassung**  
  > Durchführung einer quantitativen Studie über MTurk zum Vergleich von drei statischen Netzwerkdarstellungen: Node-Link-Diagramme ([[Component:InlineIcon type="NL"]]), Adjazenzmatrizen ([[Component:InlineIcon type="AM"]]) und bipartite Layouts ([[Component:InlineIcon type="BP"]]). [[Component:InlineIcon type="AM"]] und [[Component:InlineIcon type="BP"]] unterstützten ein besseres Gesamtverständnis, während [[Component:InlineIcon type="NL"]] bei der Clustererkennung hilfreich war. Die Ergebnisse geben Empfehlungen zur Wahl geeigneter Layouts je nach Aufgabentyp und Nutzerziel.
      `,
    },

    sections: [
      {
        title: {
          en: "Summary",
          de: "Zusammenfassung",
        },
        content: {
          en: `I led a quantitative user study comparing three network visualization techniques — node-link diagrams ([[Component:InlineIcon type="NL"]]), adjacency matrices ([[Component:InlineIcon type="AM"]]), and bipartite layouts ([[Component:InlineIcon type="BP"]]) — with a focus on large networks and high-level overview tasks. The study was conducted using Amazon Mechanical Turk (MTurk) to achieve statistically significant results.`,
          de: `Ich leitete eine quantitative Nutzerstudie, in der drei Visualisierungstechniken für Netzwerke verglichen wurden – Node-Link-Diagramme ([[Component:InlineIcon type="NL"]]), Adjazenzmatrizen ([[Component:InlineIcon type="AM"]]) und bipartite Layouts ([[Component:InlineIcon type="BP"]]) – mit Fokus auf große Netzwerke und Aufgaben auf Übersichtsebene. Die Studie wurde über Amazon Mechanical Turk (MTurk) durchgeführt, um statistisch signifikante Ergebnisse zu erzielen.`,
        },
      },
      {
        title: {
          en: "My Role",
          de: "Meine Rolle",
        },
        mediaComponentId: "DetailBoard",
        layout: "accordion",
        mediaCaption: {
          en: "Click on each item to learn more about your contributions.",
          de: "Klicken Sie auf einen Eintrag, um mehr über Ihren Beitrag zu erfahren.",
        },
        content: {
          en: [
            {
              id: "research",
              title: "Research",
              subtitle: "Study design & planning",
              icon: "flask",
              detail:
                "- Designed a between-subjects study, including task structure and layout conditions.",
            },
            {
              id: "development",
              title: "Development",
              subtitle: "Stimuli generation & platform setup",
              icon: "code",
              detail:
                "- Generated the study stimuli using **R** and **d3.js**  \n- Built the study platform using **JsPsych**, **PHP**, and **MySQL**",
            },
            {
              id: "execution",
              title: "Execution",
              subtitle: "Participant recruitment & data collection",
              icon: "users",
              detail:
                "- Recruited and screened 150 participants via MTurk based on demographics, HIT score, and attention checks  \n- Conducted two rounds of pilot testing to refine task clarity and flow",
            },
            {
              id: "analysis",
              title: "Analysis",
              subtitle: "Insight extraction",
              icon: "brain",
              detail:
                "- Interpreted findings to inform visualization design decisions.",
            },
          ],
          de: [
            {
              id: "research",
              title: "Forschung",
              subtitle: "Studienaufbau & Planung",
              icon: "flask",
              detail:
                "- Konzipierte eine Between-Subjects-Studie mit Aufgabenstruktur und Layoutbedingungen.",
            },
            {
              id: "development",
              title: "Entwicklung",
              subtitle: "Stimulierungs- und Plattformaufbau",
              icon: "code",
              detail:
                "- Erstellte die Stimuli mit **R** und **d3.js**  \n- Entwickelte die Studienplattform mit **JsPsych**, **PHP** und **MySQL**",
            },
            {
              id: "execution",
              title: "Durchführung",
              subtitle: "Rekrutierung & Datenerhebung",
              icon: "users",
              detail:
                "- Rekrutierte und filterte 150 MTurk-Teilnehmer basierend auf Demografie, HIT-Score und Aufmerksamkeitschecks  \n- Führte zwei Pilotphasen durch, um Aufgabenverständnis und Ablauf zu optimieren",
            },
            {
              id: "analysis",
              title: "Analyse",
              subtitle: "Erkenntnisgewinnung",
              icon: "brain",
              detail:
                "- Interpretierte die Ergebnisse zur Ableitung von Visualisierungsentscheidungen.",
            },
          ],
        },
      },
      {
        title: {
          en: "Study Details",
          de: "Studienaufbau",
        },
        mediaComponentId: "DetailBoard",
        layout: "bubble",
        mediaCaption: {
          en: "Click to explore the study's structure, parameters, tasks, and measures.",
          de: "Klicken Sie, um Aufbau, Parameter, Aufgaben und Messgrößen der Studie zu erkunden.",
        },
        content: {
          en: [
            {
              id: "design",
              icon: "users",
              title: "Study Design",
              detail: `
- Between-subject design with three layout conditions: [[Component:InlineIcon type="NL"]], [[Component:InlineIcon type="AM"]], and [[Component:InlineIcon type="BP"]]  
- 150 participants recruited via Amazon Mechanical Turk (MTurk), 50 per layout  
- HIT approval rate ≥ 97% and at least 1,000 completed HITs required  
- Attention-check trials included throughout the study
`,
            },
            {
              id: "parameters",
              icon: "sliders-h",
              title: "Parameters",
              detail: `We varied [[Component:InlineReveal label="network size" content="The number of nodes in the network."]], [[Component:InlineReveal label="network density" content="The number of edges relative to the number of nodes."]], and [[Component:InlineReveal label="network class" content="This parameter captures different structural properties commonly found in real-world networks. Four classes were used: small-world networks, scale-free networks, community structure, and random networks."]] to simulate different network configurations.`,
            },
            {
              id: "tasks",
              icon: "tasks",
              title: "Tasks",
              detail: `Tasks included [[Component:InlineReveal label="Class Identification" content="Participants were shown one network and asked which class it belonged to, selecting from reference images of four known network classes. This task tested how well visual characteristics of each class were preserved."]], [[Component:InlineReveal label="Cluster Detection" content="Participants were shown a single network and asked how many clusters they could detect. This assessed the representation ability to reveal cluster structure under different densities."]], and [[Component:InlineReveal label="Density Estimation" content="Participants were shown two networks from the same class side by side and asked: “Which network has more connections?” This tested how sensitive they were to differences in network density."]]`,
            },
            {
              id: "measures",
              icon: "clipboard-check",
              title: "Measures",
              detail: `We collected accuracy, completion time, and [[Component:InlineReveal label="user feedback" content="Participants were asked to rate the difficulty of the task on a 5-point Likert scale and to describe the strategy they followed to solve the task."]] for analysis.`,
            },
          ],
          de: [
            {
              id: "design",
              icon: "users",
              title: "Studiendesign",
              detail: `
- Between-Subjects-Design mit drei Layout-Bedingungen: [[Component:InlineIcon type="NL"]], [[Component:InlineIcon type="AM"]] und [[Component:InlineIcon type="BP"]]  
- 150 Teilnehmende rekrutiert über Amazon Mechanical Turk (MTurk), 50 pro Bedingung  
- HIT-Zulassungsrate ≥ 97 % und mindestens 1.000 abgeschlossene HITs erforderlich  
- Aufmerksamkeitstests waren über die Studie verteilt eingebettet
`,
            },
            {
              id: "parameters",
              icon: "sliders-h",
              title: "Parameter",
              detail: `Wir haben [[Component:InlineReveal label="Netzwerkgröße" content="Die Anzahl der Knoten im Netzwerk."]], [[Component:InlineReveal label="Netzwerkdichte" content="Das Verhältnis von Kanten zu Knoten im Netzwerk."]], und [[Component:InlineReveal label="Netzwerkklasse" content="Dieser Parameter beschreibt strukturelle Eigenschaften, wie sie in realen Netzwerken häufig vorkommen. Es wurden vier Klassen verwendet: Small-World-Netzwerke, Scale-Free-Netzwerke, Community-Strukturen und Zufallsnetzwerke."]] variiert, um unterschiedliche Netzwerkk`,
            },
            {
              id: "tasks",
              icon: "tasks",
              title: "Aufgaben",
              detail: `Die Aufgaben umfassten [[Component:InlineReveal label="Klassifikation" content="Den Teilnehmenden wurde ein Netzwerk gezeigt und sie sollten entscheiden, zu welcher Klasse es gehört. Zur Auswahl standen Referenzbeispiele von vier bekannten Netzwerkklassen. Diese Aufgabe prüfte, wie gut die visuellen Merkmale jeder Klasse erhalten blieben."]], [[Component:InlineReveal label="Clustererkennung" content="Den Teilnehmenden wurde ein einzelnes Netzwerk gezeigt und sie sollten angeben, wie viele Cluster sie erkennen können. Damit wurde getestet, wie gut die Darstellung Clusterstrukturen bei unterschiedlichen Dichten erkennen lässt."]], und [[Component:InlineReveal label="Dichteabschätzung" content="Den Teilnehmenden wurden zwei Netzwerke derselben Klasse nebeneinander gezeigt. Sie sollten entscheiden: „Welches Netzwerk hat mehr Verbindungen?“ So wurde die Sensitivität für Unterschiede in der Netzwerkdichte geprüft."]]`,
            },
            {
              id: "measures",
              icon: "clipboard-check",
              title: "Messgrößen",
              detail: `Es wurden Genauigkeit, Bearbeitungszeit und [[Component:InlineReveal label="Teilnehmendenfeedback" content="Die Teilnehmenden wurden gebeten, die Schwierigkeit der Aufgabe auf einer 5-Punkte-Likert-Skala von „sehr einfach“ bis „sehr schwierig“ zu bewerten und die Strategie zu beschreiben, mit der sie die Aufgabe gelöst haben."]] zur Analyse erfasst.`,
            },
          ],
        },
      },
      {
        title: {
          en: "Key Insights",
          de: "Zentrale Erkenntnisse",
        },
        mediaComponentId: "DetailBoard",
        layout: "accordion",
        mediaCaption: {
          en: "Click on the tasks to explore detailed results with accuracy charts for each task.",
          de: "Klicke auf die Aufgaben, um detaillierte Ergebnisse mit Genauigkeitsdiagrammen für jede Aufgabe zu sehen.",
        },
        content: {
          en: [
            {
              id: "Structural Overview",
              title: "Class Identification",
              subtitle: `[[Component:InlineIcon type="AM"]] and [[Component:InlineIcon type="BP"]] gave clearer structural overview`,
              detail: `For understanding overall network structure, layouts based on vertex ordering ([[Component:InlineIcon type="AM"]] and [[Component:InlineIcon type="BP"]]) performed better than force-directed approaches ([[Component:InlineIcon type="NL"]]).
      [[Component:AccuracyChart task="Structural Overview"]]
              `,
            },
            {
              id: "Cluster Detection",
              title: "Cluster Detection",
              subtitle: `[[Component:InlineIcon type="NL"]] excelled due to the spatial grouping between nodes`,
              detail: `For cluster detection, node proximity had more impact than edge visibility — spatial grouping helped users more than clearly drawn connections.
              [[Component:AccuracyChart task="Cluster Detection"]]
              `,
            },
            {
              id: "Density Estimation",
              title: "Density Estimation",
              subtitle: `[[Component:InlineIcon type="BP"]] was weakest; [[Component:InlineIcon type="AM"]] gave most accurate results`,
              detail: `For density estimation, edge packing (as in [[Component:InlineIcon type="AM"]]) provided more accurate results than edge overdrawing ([[Component:InlineIcon type="NL"]] and [[Component:InlineIcon type="BP"]]).  
      [[Component:AccuracyChart task="Density Estimation"]]
              `,
            },
          ],
          de: [
            {
              id: "Structural Overview",
              title: "Klassifikation",
              subtitle: `[[Component:InlineIcon type="AM"]] und [[Component:InlineIcon type="BP"]] boten eine klarere strukturelle Übersicht`,
              detail: `Für das Gesamtverständnis waren Layouts mit Knotenordnung ([[Component:InlineIcon type="AM"]], [[Component:InlineIcon type="BP"]]) effektiver als Kraft-basierte Ansätze ([[Component:InlineIcon type="NL"]]).
      [[Component:AccuracyChart task="Structural Overview"]]
              `,
            },

            {
              id: "Cluster Detection",
              title: "Clustererkennung",
              subtitle: `[[Component:InlineIcon type="NL"]] war am besten durch räumliche Gruppierung`,
              detail: `Für Clustererkennung war Knotennähe wichtiger als Kantenzeichnung — räumliche Gruppierung half mehr als deutlich sichtbare Verbindungen.  
      [[Component:AccuracyChart task="Cluster Detection"]]
              `,
            },
            {
              id: "Density Estimation",
              title: "Dichteabschätzung",
              subtitle: `[[Component:InlineIcon type="BP"]] war am schwächsten; [[Component:InlineIcon type="AM"]] lieferte die genauesten Ergebnisse`,
              detail: `Bei Dichteschätzungen war Kantenverdichtung (wie bei [[Component:InlineIcon type="AM"]]) präziser als überlagerte Kanten ([[Component:InlineIcon type="NL"]], [[Component:InlineIcon type="BP"]]).
      [[Component:AccuracyChart task="Density Estimation"]]
              `,
            },
          ],
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
    }/assets/images/archiect_user_study_variables2.png`,
    caption: {
      en: `Examples of the four maps resulting from the combination of two study variables: projection method (Star Coordinates [[Component:InlineIcon type="SC"]] vs. UMAP [[Component:InlineIcon type="UMAP"]]) and visualization type (continuous [[Component:InlineIcon type="CFL"]] vs. discrete [[Component:InlineIcon type="GFL"]]).`,
      de: `Beispiele der vier Karten, die resultieren aus der Kombination zweier Studienvariablen: Projektionsmethode (Star Coordinates [[Component:InlineIcon type="SC"]] vs. UMAP [[Component:InlineIcon type="UMAP"]]) und Visualisierungstyp (kontinuierlich [[Component:InlineIcon type="CFL"]] vs. diskret [[Component:InlineIcon type="GFL"]]).`,
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
  I led a qualitative lab study to evaluate how different visualization techniques and projection methods influence architects’ exploration of a design space. The study focused on how two visualization techniques (continuous [[Component:InlineIcon type="CFL"]] vs. discrete maps [[Component:InlineIcon type="GFL"]]) and two methods for projecting multivariate data into 2D space (Star Coordinates [[Component:InlineIcon type="SC"]] vs. UMAP [[Component:InlineIcon type="UMAP"]]) influenced user behavior and insight generation. The study was conducted with 12 architects in a controlled lab setting.
          `,
          de: `
  Ich leitete eine qualitative Laborstudie zur Untersuchung, wie verschiedene Visualisierungstechniken und Projektionsmethoden die Designexploration von Architekt:innen beeinflussen. Dabei wurden zwei Visualisierungstypen (kontinuierlich [[Component:InlineIcon type="CFL"]] vs. diskret [[Component:InlineIcon type="GFL"]]) und zwei Projektionsmethoden (Star Coordinates [[Component:InlineIcon type="SC"]] vs. UMAP [[Component:InlineIcon type="UMAP"]]) verglichen. Die Studie wurde mit 12 Architekt:innen in einer kontrollierten Laborumgebung durchgeführt.
          `,
        },
      },
      {
        title: {
          en: "My Role",
          de: "Meine Rolle",
        },
        mediaComponentId: "DetailBoard",
        layout: "accordion",
        mediaCaption: {
          en: "Click on each item to learn more about your contributions.",
          de: "Klicken Sie auf einen Eintrag, um mehr über Ihren Beitrag zu erfahren.",
        },
        content: {
          en: [
            {
              id: "design",
              title: "Study Design",
              subtitle: "Task planning and pilot testing",
              icon: "flask",
              detail: `
  - Designed the study structure, including four domain-specific tasks  
  - Integrated visualization tool with [[Component:InlineReveal label="LimeSurvey" content="An open-source survey platform used to collect task responses."]]  
  - Piloted with three visualization experts to refine the procedure`,
            },
            {
              id: "execution",
              title: "Execution",
              subtitle: "Participant testing & data capture",
              icon: "users",
              detail: `
  - Conducted the study with 12 architects in a lab setting  
  - Captured screen/audio recordings and think-aloud protocols`,
            },
            {
              id: "analysis",
              title: "Analysis",
              subtitle: "Qualitative insight generation",
              icon: "brain",
              detail: `
  - Analyzed verbal data and user interaction  
  - Extracted patterns to inform tool design`,
            },
          ],
          de: [
            {
              id: "design",
              title: "Studienaufbau",
              subtitle: "Aufgabenplanung und Pilotierung",
              icon: "flask",
              detail: `
  - Entwarf die Studienstruktur inklusive vier fachspezifischer Aufgaben  
  - Integrierte Visualisierungstool mit [[Component:InlineReveal label="LimeSurvey" content="Eine Open-Source-Plattform zur Erhebung von Aufgabenantworten."]]  
  - Pilotiert mit drei Visualisierungsexpert:innen zur Optimierung des Ablaufs`,
            },
            {
              id: "execution",
              title: "Durchführung",
              subtitle: "Tests mit Teilnehmenden & Datenerhebung",
              icon: "users",
              detail: `
  - Durchführung mit 12 Architekt:innen im Labor  
  - Bildschirm-/Audioaufzeichnungen und Laut-Denken-Protokolle erfasst`,
            },
            {
              id: "analysis",
              title: "Analyse",
              subtitle: "Qualitative Auswertung",
              icon: "brain",
              detail: `
  - Analyse der verbalen Daten und Nutzerinteraktionen  
  - Ableitung von Mustern zur Weiterentwicklung des Tools`,
            },
          ],
        },
      },
      {
        title: {
          en: "Study Details",
          de: "Studiendetails",
        },
        mediaComponentId: "DetailBoard",
        layout: "bubble",
        mediaCaption: {
          en: "Explore participant demographics, experimental design, tasks, and collected data.",
          de: "Erkunde Teilnehmende, Studiendesign, Aufgaben und erhobene Daten.",
        },
        content: {
          en: [
            {
              id: "participants",
              icon: "user",
              title: "Participants",
              detail: `12 participants from architecture background. The study was conducted in-person in a controlled lab setting. `,
            },
            {
              id: "design",
              icon: "cogs",
              title: "Study Design",
              detail: `We used a mixed study design. Participants were assigned to one of three groups, varying the [[Component:InlineReveal label="projection method" content="A mathematical technique used to reduce high-dimensional data (like design parameters) into two dimensions for visualization."]] ([[Component:InlineIcon type="SC"]] or [[Component:InlineIcon type="UMAP"]]) and/or the visualization type ([[Component:InlineIcon type="CFL"]] or [[Component:InlineIcon type="GFL"]]). `,
            },
            {
              id: "tasks",
              icon: "tasks",
              title: "Tasks",
              detail: `Participants completed four domain-specific tasks:  
  - [[Component:InlineReveal label="Projection mental map" content="Participants are provided with two parameters and are asked to approximate the location of a solution on the map, considering parameters having either low or high values."]]  
  - [[Component:InlineReveal label="Design alternatives" content="Participants have to find two or three design alternatives that achieve relatively high performance but differ in their parameter configurations."]] 
  - [[Component:InlineReveal label="Significant parameters" content="We ask participants to identify parameters that have a significant impact on the performance and identify the impact type (positive or negative)."]]  
  - [[Component:InlineReveal label="Parameters correlations" content="Participants have to identify correlations between parameter pairs and the performance."]]`,
            },
            {
              id: "data",
              icon: "clipboard-list",
              title: "Collected Data",
              detail: `Collected data included think-aloud protocols, screen/audio recordings, mouse movements, task difficulty ratings, and subjective preferences.`,
            },
          ],
          de: [
            {
              id: "participants",
              icon: "user",
              title: "Teilnehmende",
              detail: `12 Architekt:innen aus akademischen Einrichtungen nahmen an der Studie teil. Die Durchführung erfolgte in einer kontrollierten Laborsituation.`,
            },
            {
              id: "design",
              icon: "cogs",
              title: "Studiendesign",
              detail: `Wir verwendeten ein gemischtes Studiendesign. Die Teilnehmenden wurden einer von drei Gruppen zugeteilt, wobei die [[Component:InlineReveal label="Projektionsmethode" content="Eine mathematische Technik zur Reduktion hochdimensionaler Daten (wie Designparameter) auf zwei Dimensionen zur Visualisierung."]] ([[Component:InlineIcon type="SC"]] oder [[Component:InlineIcon type="UMAP"]]) und/oder der Visualisierungstyp ([[Component:InlineIcon type="CFL"]] oder [[Component:InlineIcon type="GFL"]]) variiert wurde.`,
            },
            {
              id: "tasks",
              icon: "tasks",
              title: "Aufgaben",
              detail: `Die Teilnehmenden führten vier fachspezifische Aufgaben durch:  
- [[Component:InlineReveal label="Projektion mentale Karte" content="Teilnehmende sollten anhand zweier Parameter eine Position auf der Karte schätzen, bei der diese Parameter hohe/niedrige Werte aufweisen."]]  
- [[Component:InlineReveal label="Alternative Designs" content="Teilnehmende sollten zwei bis drei Designalternativen finden, die gute Leistung zeigen, sich aber in der Parameterausprägung unterscheiden."]]  
- [[Component:InlineReveal label="Signifikante Parameter" content="Teilnehmende sollten Parameter mit starkem Einfluss auf die Leistung identifizieren und die Art des Einflusses angeben (positiv oder negativ)."]]  
- [[Component:InlineReveal label="Parameterkorrelationen" content="Teilnehmende sollten Korrelationen zwischen Parameterpaaren und der Leistung erkennen."]]`,
            },
            {
              id: "data",
              icon: "clipboard-list",
              title: "Erhobene Daten",
              detail: `Erhoben wurden Laut-Denken-Protokolle, Bildschirm-/Audioaufnahmen, Mausbewegungen, Einschätzungen der Aufgabenkomplexität und subjektive Präferenzen.`,
            },
          ],
        },
      },
      {
        title: {
          en: "Key Insights",
          de: "Zentrale Erkenntnisse",
        },
        mediaComponentId: "DetailBoard",
        layout: "accordion",
        mediaCaption: {
          en: "Click on each insight to learn more about participants’ behavior and preferences.",
          de: "Klicken Sie auf eine Erkenntnis, um mehr über Verhalten und Präferenzen der Teilnehmenden zu erfahren.",
        },
        content: {
          en: [
            {
              id: "star-coordinates",
              title: "Preference for Star Coordinates",
              subtitle: "Intuitiveness and navigation axes",
              icon: "thumbs-up",
              detail: `[[Component:InlineIcon type="SC"]] was consistently preferred across tasks due to its intuitiveness and the presence of navigation axes.

> Participants described [[Component:InlineIcon type="SC"]] as “easy to understand,” “quick to learn,” and “straightforward.” Many cited the axes as helping them locate solutions more easily — something they missed in [[Component:InlineIcon type="UMAP"]], which felt harder to navigate by comparison.`,
            },
            {
              id: "map-types",
              title: "Map Behaviors",
              subtitle: "Exploration vs. analysis modes",
              icon: "map",
              detail: `[[Component:InlineIcon type="CFL"]] supported more open-ended exploration, while [[Component:InlineIcon type="GFL"]] facilitated detailed comparison.

> Participants who preferred [[Component:InlineIcon type="CFL"]] highlighted the ease of spotting differences in “color gradient” or “brightness.” Those favoring [[Component:InlineIcon type="GFL"]] appreciated how it helped compare the “shapes” or “geometry” of solutions.`,
            },
            {
              id: "navigation-strategies",
              title: "Navigation Strategies",
              subtitle: "How participants moved through design space",
              icon: "compass",
              detail: `Participants exhibited three primary navigation strategies:  
- **Axis sweeping** — methodically sliding along one or more axes (common with [[Component:InlineIcon type="SC"]]).  
  _“I like moving along one line and seeing what changes.”_

- **Random exploration** — sporadic movement, often seen with [[Component:InlineIcon type="UMAP"]].  
  _“I kind of clicked around until something interesting popped up.”_

- **Systematic scanning** — row/column traversal, typical with [[Component:InlineIcon type="GFL"]].  
  _“It felt like I was reading the map cell by cell.”_

[[Component:ZoomImage src="${
                import.meta.env.BASE_URL
              }assets/images/navigation_strategies.png" alt="Navigation strategies" caption="Participants’ three navigation strategies observed in the study"]]
  `,
            },
          ],
          de: [
            {
              id: "star-coordinates",
              title: "Bevorzugung von Star Coordinates",
              subtitle: "Intuitives Verständnis und Navigationsachsen",
              icon: "thumbs-up",
              detail: `[[Component:InlineIcon type="SC"]] wurde durchweg bevorzugt, da es intuitiv ist und Navigationsachsen bietet.

> Teilnehmende beschrieben [[Component:InlineIcon type="SC"]] als „einfach zu verstehen“, „schnell erlernbar“ und „selbsterklärend“. Die Achsen halfen ihnen, Lösungen leichter zu lokalisieren – etwas, das ihnen bei [[Component:InlineIcon type="UMAP"]] fehlte, das schwerer zu navigieren war.
`,
            },
            {
              id: "map-types",
              title: "Kartentypen im Vergleich",
              subtitle: "Exploration vs. Analyse",
              icon: "map",
              detail: `[[Component:InlineIcon type="CFL"]] förderte offene Exploration, während [[Component:InlineIcon type="GFL"]] detaillierte Vergleiche ermöglichte.

> Teilnehmende, die [[Component:InlineIcon type="CFL"]] bevorzugten, betonten die Erkennbarkeit von Unterschieden durch „Farbverläufe“ oder „Helligkeit“. Befürworter:innen von [[Component:InlineIcon type="GFL"]] hoben hervor, dass sie damit besser die „Formen“ oder „Geometrie“ von Lösungen vergleichen konnten.`,
            },
            {
              id: "navigation-strategies",
              title: "Navigationsstrategien",
              subtitle: "Wie sich Teilnehmende durch den Designraum bewegten",
              icon: "compass",
              detail: `Drei Hauptstrategien wurden beobachtet:  
  - **Achsen-Sweeping** – systematisches Bewegen entlang von Achsen ([[Component:InlineIcon type="SC"]])  
    _„Ich bewege mich entlang einer Linie und schaue, was sich verändert.“_

  - **Zufällige Exploration** – zufälliges Klicken, häufig bei [[Component:InlineIcon type="UMAP"]]  
    _„Ich habe einfach drauflosgeklickt, bis etwas Interessantes erschien.“_

  - **Systematisches Scannen** – zeilen-/spaltenweises Vorgehen, oft bei [[Component:InlineIcon type="GFL"]]  
    _„Ich habe die Karte Zelle für Zelle durchgearbeitet.“_

[[Component:ZoomImage src="${
                import.meta.env.BASE_URL
              }assets/images/navigation_strategies.png" alt="Navigationsstrategien" caption="Drei beobachtete Navigationsstrategien der Teilnehmenden"]]
`,
            },
          ],
        },
      },
      {
        title: { en: "Implications", de: "Implikationen" },
        content: {
          en: `
  This study highlights the need for **user-adaptive visual analytics tools** — systems that tailor interaction based on user traits such as expertise, visualization literacy, and cognitive preferences. Participants with lower familiarity or confidence, especially with [[Component:InlineIcon type="UMAP"]], showed signs of frustration and disengagement. Future systems should aim to reduce cognitive load through intuitive adaptation while maintaining transparency and user control. Balancing adaptability with user trust remains a complex but critical design challenge.
          `,
          de: `
  Diese Studie zeigt den Bedarf an **nutzeradaptiven Visual-Analytics-Tools** — Systeme, die Interaktionen an individuelle Merkmale wie Expertise oder Visualisierungskompetenz anpassen. Weniger vertraute Teilnehmer:innen, insbesondere mit [[Component:InlineIcon type="UMAP"]], waren häufig frustriert. Zukünftige Systeme sollten die kognitive Belastung reduzieren, intuitive Anpassungen bieten und gleichzeitig Kontrolle und Vertrauen erhalten.
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
    caption:{
      en: `Thematic word cloud capturing the diverse interpretations of 'scalability' across visualization research subfields.`,
      de:  `Thematische Wortwolke, die die vielfältigen Interpretationen von „Skalierbarkeit“ in verschiedenen Bereichen der Visualisierungsforschung einfängt.`
    },

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
          en: `As part of a larger literature review project on [[Component:InlineReveal label="scalability" content="The ability of a system, method, or visualization to maintain performance, usability, or clarity when increasing the amount, complexity, or resolution of data. Scalability can be technical (e.g., computation time) or human (e.g., readability)."]] in visualization, I contributed to the analysis of over 120 visualization publications. The goal was to better understand how scalability is defined and communicated across subfields of visualization research.`,
          de: `Im Rahmen eines umfassenderen Literaturprojekts zu [[Component:InlineReveal label="Skalierbarkeit" content="Die Fähigkeit eines Systems, Verfahrens oder einer Visualisierung, bei zunehmender Datenmenge, -komplexität oder -auflösung Leistung, Nutzbarkeit oder Klarheit aufrechtzuerhalten. Skalierbarkeit kann technisch (z. B. Rechenzeit) oder menschlich (z. B. Lesbarkeit) sein."]] in der Visualisierung analysierte ich über 120 wissenschaftliche Publikationen. Ziel war es, besser zu verstehen, wie Skalierbarkeit in verschiedenen Teilbereichen der Visualisierungsforschung definiert und kommuniziert wird.`,
        },
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        mediaComponentId: "DetailBoard",
        layout: "accordion",
        content: {
          en: [
            {
              id: "coding",
              title: "Manual Coding",
              subtitle: "Thematic work across 127 papers",
              icon: "list",
              detail: `- Participated in the manual coding of all 127 selected papers using a structured coding scheme  \n- Identified how scalability claims were defined and supported (e.g., through metrics, case studies, or user studies)`,
            },
            {
              id: "collaboration",
              title: "Collaboration",
              subtitle: "Ensuring consistency",
              icon: "handshake",
              detail: `- Worked collaboratively to ensure consistency and accuracy in coding through consensus reviews  \n- Contributed to refining the coding scheme and surfacing recurring patterns in the literature`,
            },
          ],
          de: [
            {
              id: "coding",
              title: "Manuelle Codierung",
              subtitle: "Thematische Arbeit an 127 Artikeln",
              icon: "list",
              detail: `- Beteiligung an der manuellen Codierung aller 127 ausgewählten Publikationen mit einem strukturierten Codierschema  \n- Analyse, wie Aussagen zur Skalierbarkeit definiert und gestützt wurden (z. B. durch Metriken, Fallstudien oder Nutzerstudien)`,
            },
            {
              id: "collaboration",
              title: "Zusammenarbeit",
              subtitle: "Konsistenz sichern",
              icon: "handshake",
              detail: `- Zusammenarbeit im Team zur Sicherstellung von Konsistenz und Genauigkeit durch Konsensabgleiche  \n- Mitwirkung an der Weiterentwicklung des Codierschemas und der Identifikation wiederkehrender Muster in der Literatur`,
            },
          ],
        },
      },
      {
        title: { en: "Study Details", de: "Studiendetails" },
        mediaComponentId: "DetailBoard",
        layout: "bubble",
        content: {
          en: [
            {
              id: "source",
              icon: "database",
              title: "Data Source",
              detail: `127 peer-reviewed visualization papers from major conferences including IEEE VIS, EuroVis, and PacificVis, covering a wide range of subfields such as visual analytics, information visualization, and scientific visualization.`,
            },
            {
              id: "method",
              icon: "edit",
              title: "Coding Method",
              detail: `Manual [[Component:InlineReveal label="thematic coding" content="A qualitative analysis method used to identify recurring ideas or themes in a set of texts — in this case, research papers. Themes are manually assigned to describe how concepts like scalability are presented and justified."]] conducted using a collaborative coding scheme.`,
            },
            {
              id: "goal",
              icon: "bullseye",
              title: "Goal",
              detail: `Understand how scalability is defined and justified, and validate a [[Component:InlineReveal label="conceptual model" content="A formal framework introduced to describe different notions of scalability in visualization. It maps problem size, resources, and assumptions to a form of effort (like time, readability, or interaction difficulty)."]] across the field.`,
            },
          ],
          de: [
            {
              id: "source",
              icon: "database",
              title: "Datenquelle",
              detail: `127 peer-reviewte Visualisierungsartikel aus führenden Konferenzen wie IEEE VIS, EuroVis und PacificVis – mit Beiträgen aus verschiedenen Teilbereichen wie Visual Analytics, Informationsvisualisierung und wissenschaftlicher Visualisierung.`,
            },
            {
              id: "method",
              icon: "edit",
              title: "Codierungsmethode",
              detail: `Manuelle [[Component:InlineReveal label="thematische Codierung" content="Eine qualitative Analysemethode zur Identifikation wiederkehrender Ideen oder Themen in Texten — hier: wissenschaftliche Artikel. Themen werden manuell zugewiesen, um z. B. Aussagen zur Skalierbarkeit zu beschreiben und zu bewerten."]] anhand eines kollaborativen Codierschemas.`,
            },
            {
              id: "goal",
              icon: "bullseye",
              title: "Ziel",
              detail: `Analyse, wie Skalierbarkeit definiert und begründet wird, sowie Validierung eines [[Component:InlineReveal label="konzeptionellen Modells" content="Ein formales Rahmenmodell zur Beschreibung unterschiedlicher Konzepte von Skalierbarkeit in der Visualisierung. Es verknüpft Problemgröße, Ressourcen und Annahmen mit einem Aufwand, z. B. Zeit, Lesbarkeit oder Interaktionsschwierigkeit."]] zur einheitlichen Nutzung im Fachbereich.`,
            },
          ],
        },
      },
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
        content: {
          en: `
Scalability is defined and evaluated in very different ways across visualization research — from performance metrics and plots in technical papers to subjective reasoning in design-focused studies.
        Our work showed the need for shared frameworks and terminology that help researchers communicate and share knowledge, especially when working across disciplines.`,
          de: `
Skalierbarkeit wird in der Visualisierungsforschung sehr unterschiedlich definiert und bewertet — von Leistungskennzahlen in technischen Arbeiten bis hin zu subjektiven Einschätzungen in gestaltungsorientierten Studien.
        Unsere Arbeit verdeutlichte den Bedarf an gemeinsamen Frameworks und Begrifflichkeiten, die den Austausch und die Verständigung über Fachgrenzen hinweg erleichtern`,
        },
      },
      
//       {
//         title: { en: "Reflection", de: "Reflexion" },
//         content: {
//           en: `
// This project sharpened my skills in **thematic coding**. It also reminded me how important it is to be precise and evidence-based when making claims about concepts like scalability, both in research and product contexts.
//         `,
//           de: `
// Das Projekt schärfte meine Fähigkeiten in der **thematischen Codierung**. Es erinnerte mich auch daran, wie wichtig es ist, bei Aussagen zu Konzepten wie Skalierbarkeit präzise und evidenzbasiert zu sein — sowohl in der Forschung als auch in der Produktentwicklung.
//         `,
//         },
//       },
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
          en: `I facilitated a creativity workshop with five architects to explore their current design workflows and uncover how visualization could support early-stage decision-making. Based on the [[Component:InlineReveal label="CVO framework," content="The Creative Visualization-Opportunities (CVO) framework, introduced by Kerzner et al. (2019), is a structured method to identify opportunities for visualization by engaging domain experts in creative, participatory activities."]] the session aimed to elicit domain challenges, inspire ideation, and surface opportunities for new visualization tools.`,
          de: `Ich leitete einen Kreativitäts-Workshop mit fünf Architekt:innen, um ihre bestehenden Designprozesse zu analysieren und herauszufinden, wie Visualisierung in frühen Phasen unterstützen kann. Der Workshop basierte auf dem [[Component:InlineReveal label="CVO-Framework" content="Das Creative Visualization-Opportunities (CVO)-Framework, eingeführt von Kerzner et al. (2019), ist eine strukturierte Methode zur Ermittlung von Visualisierungspotenzialen durch kreative, partizipative Aktivitäten mit Domänenexpert:innen."]] und zielte darauf ab, Herausforderungen zu identifizieren, Ideen zu fördern und neue Toolpotenziale aufzuzeigen.`,
        },
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        mediaComponentId: "DetailBoard",
        layout: "accordion",
        content: {
          en: [
            {
              id: "planning",
              title: "Workshop Design",
              subtitle: "Framing and structure",
              icon: "flask",
              detail: `- Designed and facilitated a half-day [[Component:InlineReveal label="CVO-inspired workshop" content="The CVO approach emphasizes creative, participant-driven methods to surface unmet needs and design ideas through hands-on activities."]] with five architectural designers`,
            },
            {
              id: "activities",
              title: "Activity Facilitation",
              subtitle: "Leading creative exercises",
              icon: "edit",
              detail: `- Led structured activities: wishful thinking, brainstorming, and [[Component:InlineReveal label=\"visualization analogies.\" content=\"A technique where participants examine existing visualizations—often outside their domain—and imagine how similar designs could be adapted to their needs.\"]]`,
            },
            {
              id: "collection",
              title: "Artifact Collection",
              subtitle: "Capturing design ideas",
              icon: "clipboard-list",
              detail: `- Collected and analyzed sticky notes, sketches, and audio recordings`,
            },
            {
              id: "synthesis",
              title: "Synthesis",
              subtitle: "Mapping findings to themes",
              icon: "lightbulb",
              detail: `- Synthesized outcomes into key themes and opportunity areas for future tools`,
            },
          ],
          de: [
            {
              id: "planning",
              title: "Workshop-Design",
              subtitle: "Rahmen und Struktur",
              icon: "flask",
              detail: `- Konzipierte und moderierte einen halbtägigen [[Component:InlineReveal label="CVO-inspirierten Workshop" content="Der CVO-Ansatz setzt auf kreative, partizipative Methoden zur Erkennung von Bedürfnissen und Toolideen durch praktische Aktivitäten."]] mit fünf Architekt:innen`,
            },
            {
              id: "activities",
              title: "Aktivitäten leiten",
              subtitle: "Kreative Übungen durchführen",
              icon: "edit",
              detail: `- Durchführung strukturierter Methoden: Wunschdenken, Brainstorming und [[Component:InlineReveal label=\"visuelle Analogien.\" content=\"Eine Methode, bei der existierende Visualisierungen – oft aus fremden Domänen – analysiert und gedanklich auf eigene Anwendungskontexte übertragen werden.\"]]`,
            },
            {
              id: "collection",
              title: "Materialsammlung",
              subtitle: "Gestaltungsansätze erfassen",
              icon: "clipboard-list",
              detail: `- Sammlung und Analyse von Haftnotizen, Skizzen und Audioaufnahmen`,
            },
            {
              id: "synthesis",
              title: "Synthese",
              subtitle: "Erkenntnisse strukturieren",
              icon: "lightbulb",
              detail: `- Ableitung zentraler Themen und Chancenbereiche für künftige Tools`,
            },
          ],
        },
      },
      {
        title: { en: "Workshop Methods", de: "Workshop-Methoden" },
        mediaComponentId: "DetailBoard",
        layout: "bubble",
        content: {
          en: [
            {
              id: "wishful",
              icon: "star",
              title: "Wishful Thinking",
              detail: `Participants shared ideal visualization capabilities without constraints, using prompts like:  
- What would you like to **see**?  
- What would you like to **do**?  
- What would you like to **know**?  `,
            },
            {
              id: "brainstorm",
              icon: "comments",
              title: "Brainstorming",
              detail: `Group sketching and discussion generated diverse ideas around:  
- **Data types** — what information matters most  
- **Tasks** — what do they want to achieve  
- **Interactions** — how they envision using a tool`,
            },
            {
              id: "analogy",
              icon: "project-diagram",
              title: "Visualization Analogies",
              detail:
                "Participants reflected on examples from other domains and explored how unfamiliar visuals could applied to thier domain.",
            },
          ],
          de: [
            {
              id: "wishful",
              icon: "star",
              title: "Wunschdenken",
              detail: `Teilnehmende beschrieben ideale Visualisierungsfunktionen ohne technische Einschränkungen und nutzten dabei Fragen wie:  
- Was würden Sie gerne **sehen**?  
- Was würden Sie gerne **tun**?  
- Was würden Sie gerne **wissen**?`,
            },
            {
              id: "brainstorm",
              icon: "comments",
              title: "Brainstorming",
              detail: `Gruppenskizzen und Diskussionen führten zu vielfältigen Ideen in Bezug auf:  
- **Datentypen** – welche Informationen am wichtigsten sind  
- **Aufgaben** – was möchten sie erreichen
- **Interaktionen** – wie sie sich die Nutzung eines Tools vorstellen`,
            },
            {
              id: "analogy",
              icon: "project-diagram",
              title: "Visuelle Analogien",
              detail:
                "Teilnehmende reflektierten über Beispiele aus anderen Domänen und erkundeten, wie ihnen unbekannte Visualisierungen auf ihren eigenen Kontext übertragbar sein könnten.",
            },
          ],
        },
      },
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
        content: {
          en: `
  The workshop highlighted the importance of allowing participants to lead the conversation without steering it in order to uncover authentic insights.<br>
          The **visualization analogy** activity was especially effective at prompting participants to link unfamiliar visuals to their domain needs. Across activities, participants expressed a preference for tools that connect abstract data to geometric and material representations. 
          `,
          de: `
  Der Workshop verdeutlichte die Bedeutung, den Teilnehmenden die Führung der Diskussion zu überlassen, ohne sie zu lenken, um echte Einsichten zu gewinnen.<br>
  Die Methode der **visuellen Analogien** war besonders wirksam, um Assoziationen zwischen fremden Visualisierungen und den eigenen Anforderungen herzustellen. Insgesamt äußerten die Teilnehmenden eine Präferenz für Tools, die abstrakte Daten mit geometrischen und materiellen Darstellungen verbinden.
          `,
        },
      },
  //     {
  //       title: { en: "Reflection", de: "Reflexion" },
  //       content: {
  //         en: `
  // This was my first hands-on experience conducting a creativity-focused research workshop. It gave me a deeper understanding of how to structure open-ended, participatory sessions and how letting participants lead the conversation and resisting the urge to steer the discussion are essential for uncovering authentic insights.
  //         `,
  //         de: `
  // Dies war meine erste praktische Erfahrung mit einem kreativitätsorientierten Forschungsworkshop. Ich lernte, wie man offene, partizipative Sitzungen sinnvoll strukturiert — und wie wichtig es ist, die Diskussion nicht zu lenken, sondern den Teilnehmenden Raum für echte Einsichten zu geben.
  //         `,
  //       },
  //     },
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
    image: `${import.meta.env.BASE_URL}/assets/images/dynamic_graph_multiscale.png`,
    caption: {
      en: "A multi-timescale view of a dynamic graph dataset acquired from the US domestic flight dataset (January 1st, 2000 to December 31st, 2001). The three levels from top to bottom represent monthly, daily, and hourly patterns, respectively.",
      de: "Eine Multi-Timescale-Ansicht eines dynamischen Graphen, basierend auf dem US-Inlandsflugdatensatz (1. Januar 2000 bis 31. Dezember 2001). Die drei Ebenen von oben nach unten zeigen Muster auf Monats-, Tages- und Stundenebene.",
    },
    tldr: {
      en: `> **TL;DR**  
> Designed and evaluated layout techniques for dynamic networks that support multi-timescale analysis and reduce visual overdraw. The designs were tested on synthetic and real-world datasets.`,
      de: `> **Kurzfassung**  
> Entwicklung und Evaluation von Layouttechniken für dynamische Netzwerke, die Multi-Timescale-Analysen unterstützen und visuelle Überlagerung reduzieren. Die Designs wurden an synthetischen und realen Datensätzen getestet.`,
    },

    sections: [
      {
        title: { en: "Summary", de: "Zusammenfassung" },
        content: {
          en: `I contributed to the design and refinement of scalable layouts for [[Component:InlineReveal label="dynamic networks," content="Networks where the set of nodes and edges can change over time. Changes can include the appearance or disappearance of connections, reflecting dynamic processes."]] aimed at revealing both [[Component:InlineReveal label="structural" content="The arrangement and connectivity of nodes and edges within a network at a given time, including clusters, hubs, hierarchies, and global properties such as small-world effects (e.g., 'six degrees of separation')."]] and [[Component:InlineReveal label="temporal" content="Changes in the network over time, including emerging connections, persistent structures, fluctuations in activity, and periodicity (regular repeating patterns)."]] patterns across large time ranges and supporting [[Component:InlineReveal label="multi-timescale analysis." content="An approach that supports exploration across different temporal resolutions, from broad overviews to detailed patterns, without losing structural coherence."]] The resulting designs were evaluated on synthetic and real-world datasets.`,
          
          de: `Ich trug zur Gestaltung und Verfeinerung skalierbarer Layouts für [[Component:InlineReveal label="dynamische Netzwerke," content="Netzwerke, bei denen sich die Knoten- und Kantenstruktur im Zeitverlauf ändern kann. Änderungen umfassen das Auftreten oder Verschwinden von Verbindungen und spiegeln dynamische Prozesse wider."]] bei, mit dem Ziel, sowohl [[Component:InlineReveal label="strukturelle" content="Die Anordnung und Verbindung von Knoten und Kanten innerhalb eines Netzwerks zu einem bestimmten Zeitpunkt, einschließlich Cluster, Hubs, Hierarchien und globaler Eigenschaften wie Small-World-Phänomene (z. B. 'Six Degrees of Separation')."]] als auch [[Component:InlineReveal label="zeitliche Muster" content="Veränderungen im Netzwerk im Zeitverlauf, einschließlich neuer Verbindungen, persistenter Strukturen, Aktivitätsfluktuationen und Periodizität (regelmäßig wiederkehrende Muster)."]] sichtbar zu machen und [[Component:InlineReveal label="Multi-Timescale-Analysen." content="Ein Ansatz, der die Exploration über verschiedene zeitliche Auflösungen hinweg unterstützt – von globalen Übersichten bis hin zu detaillierten Mustern, ohne strukturellen Zusammenhang zu verlieren."]] zu ermöglichen. Die entwickelten Layouts wurden an synthetischen und realen Datensätzen evaluiert.`
        }
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        mediaComponentId: "DetailBoard",
        layout: "accordion",
        content: {
          en: [
            {
              id: "layout-adaptation",
              title: "Layout Adaptation",
              subtitle: "Adapting layout strategies",
              icon: "project-diagram",
              detail: `- Extended existing bipartite graph layouts to reduce [[Component:InlineReveal label="visual overdraw" content="A phenomenon where overlapping graphical elements obscure each other, making patterns harder to interpret. Overdraw is common in dense network visualizations."]]
- Improved the visibility of temporal patterns
- Supported analysis across multi-timescale views`
            },
            {
              id: "prototyping",
              title: "Prototyping",
              subtitle: "Interactive design tools",
              icon: "code",
              detail: `- Built interactive prototypes in **Java** and later re-developed them in **Angular/Node.js**
- Integrated user controls for [[Component:InlineReveal label="timeline partitioning," content="A technique that divides a network’s temporal range into smaller, manageable segments to improve readability and focus the analysis on specific time windows."]] edge filtering, and [[Component:InlineReveal label="vertex ordering" content="The process of rearranging node positions in a layout to enhance interpretability, typically aiming to reduce edge crossings, group related nodes, or emphasize structural patterns."]]`
            },
            {
              id: "comparative-evaluation",
              title: "Comparative Evaluation",
              subtitle: "Synthetic networks",
              icon: "sliders-h",
              detail: `- Conducted a parameter study on synthetic networks
- Compared layout variants in terms of scalability, readability, and temporal clarity`
            },
            {
              id: "data-application",
              title: "Real-world Application",
              subtitle: "Generalizability testing",
              icon: "chart-bar",
              detail: `- Applied the layouts to three real-world datasets to validate generalizability and practical insight generation across domains`
            }
          ],
          de: [
            {
              id: "layout-adaptation",
              title: "Layout-Anpassung",
              subtitle: "Anpassung von Layoutstrategien",
              icon: "project-diagram",
              detail: `- Erweiterung bestehender bipartiter Graph-Layouts zur Reduzierung von [[Component:InlineReveal label="visueller Überlagerung" content="Ein Phänomen, bei dem sich grafische Elemente überdecken und Muster schwer erkennbar werden. Überlagerung tritt häufig in dichten Netzwerken auf."]]
- Verbesserung der Sichtbarkeit zeitlicher Muster
- Unterstützung von Analysen über mehrere Zeitskalen hinweg`
            },
            {
              id: "prototyping",
              title: "Prototyping",
              subtitle: "Interaktive Design-Tools",
              icon: "code",
              detail: `- Entwicklung interaktiver Prototypen in **Java** und spätere Neuentwicklung in **Angular/Node.js**
- Integration von Benutzersteuerungen für [[Component:InlineReveal label="Timeline-Partitionierung" content="Eine Technik, die den zeitlichen Bereich eines Netzwerks in kleinere, handhabbare Segmente unterteilt, um die Lesbarkeit zu verbessern und gezielte Analysen zu ermöglichen."]], Edge Filtering und [[Component:InlineReveal label="Knotenordnung" content="Der Prozess der Anordnung von Knoten in einem Layout zur Verbesserung der Lesbarkeit, typischerweise durch Reduzierung von Kantenkreuzungen, Gruppierung verwandter Knoten oder Hervorhebung von Strukturen."]]`
            },
            {
              id: "comparative-evaluation",
              title: "Vergleichsstudie",
              subtitle: "Synthetische Netzwerke",
              icon: "sliders-h",
              detail: `- Durchführung einer Parameterstudie an synthetischen Netzwerken
- Vergleich von Layoutvarianten hinsichtlich Skalierbarkeit, Lesbarkeit und zeitlicher Klarheit`
            },
            {
              id: "data-application",
              title: "Anwendung auf reale Daten",
              subtitle: "Testen der Generalisierbarkeit",
              icon: "chart-bar",
              detail: `- Anwendung der Layouts auf drei reale Datensätze zur Validierung der Generalisierbarkeit und Gewinnung praktischer Erkenntnisse über verschiedene Domänen hinweg`
            }
          ]          
        }
      },      
      {
        title: { en: "Design Process", de: "Gestaltungsprozess" },
        mediaComponentId: "DetailBoard",
        layout: "bubble",
        content: {
          en: [
            {
              id: "goal",
              icon: "bullseye",
              title: "Design Goals",
              detail: `
  - Maintain structural readability 
  - Reveal temporal patterns across long time windows (i.e., thousands of timepoints)
  - Supporting exploration at multiple time scales (i.e., drilling down from overview to details)`
            },
            {
              id: "interaction",
              icon: "sliders-h",
              title: "Interaction Design",
              detail: `Interaction techniques were integrated to adapt the visualization to different tasks, densities, and analysis needs:
  - [[Component:InlineReveal label="Timeline partitioning" content="A technique that divides a network’s temporal range into smaller, manageable segments to improve readability and focus the analysis on specific time windows."]] 
  - Edge filtering
  - [[Component:InlineReveal label="Vertex ordering" content="The process of rearranging node positions in a layout to enhance interpretability, typically aiming to reduce edge crossings, group related nodes, or emphasize structural patterns."]]`
            },
            {
              id: "design-comparison",
              icon: "balance-scale",
              title: "Design Comparison",
              detail: `Layout variants were compared based on:
  - Scalability with respect to time dimension
  - Scalability with respect to edge dimestion
  - Ability to reveal both structural and temporal patterns`
            },
            {
              id: "application",
              icon: "chart-bar",
              title: "Application to Real Data",
              detail: `The layouts were applied to three real-world datasets with varying [[Component:InlineReveal label="densities" content="A measure of network sparsity, defined as the number of edges divided by the number of vertices (dℓ = |E| / |V|). Higher values indicate denser connectivity."]]:
  - **Global trade flows:** [[Component:InlineReveal label="SIPRI Arms Transfers dataset" content="Published by the Stockholm International Peace Research Institute. The dataset contains 259 vertices, 68 timepoints (years), and an average linear edge density of approximately dℓ = 1.16 per timepoint."]] 
  - **Domestic flight connections:** [[Component:InlineReveal label="US domestic flight dataset" content="Dataset from the aviation domain. Contains 402 vertices (airports), 363 timepoints (months), and an average linear edge density of approximately dℓ = 8.91 per timepoint."]] 
  - **Software call graphs:** [[Component:InlineReveal label="JHotDraw dataset" content="Dynamic method call graphs of the open-source Java application JHotDraw. Includes 787 vertices representing functions, across 1077 graphs (user actions), with an average linear edge density of approximately dℓ = 0.03 per timepoint."]]`
            }
          ],
          de: [
            {
              id: "goal",
              icon: "bullseye",
              title: "Designziele",
              detail: `
  - Erhaltung der strukturellen Lesbarkeit
  - Sichtbarmachung zeitlicher Muster über lange Zeiträume hinweg (d. h. tausende Zeitpunkte)
  - Unterstützung der Exploration auf mehreren Zeitskalen (d. h. Wechsel von Überblick zu Details)`
            },
            {
              id: "interaction",
              icon: "sliders-h",
              title: "Interaktionsdesign",
              detail: `Zur Anpassung der Visualisierung an unterschiedliche Aufgaben, Dichten und Analysebedürfnisse wurden folgende Interaktionstechniken integriert:
  - [[Component:InlineReveal label="Timeline-Partitionierung" content="Eine Technik, die den zeitlichen Bereich eines Netzwerks in kleinere, handhabbare Segmente unterteilt, um die Lesbarkeit zu verbessern und gezielte Analysen zu ermöglichen."]]
  - Edge Filtering
  - [[Component:InlineReveal label="Knotenordnung" content="Der Prozess der Anordnung von Knoten in einem Layout zur Verbesserung der Lesbarkeit, typischerweise durch Reduzierung von Kantenkreuzungen, Gruppierung verwandter Knoten oder Hervorhebung von Strukturen."]]`
            },
            {
              id: "design-comparison",
              icon: "balance-scale",
              title: "Designvergleich",
              detail: `Layoutvarianten wurden verglichen hinsichtlich:
  - Skalierbarkeit in Bezug auf die Zeitdimension
  - Skalierbarkeit in Bezug auf die Kantendimension
  - Fähigkeit, sowohl strukturelle als auch zeitliche Muster sichtbar zu machen`
            },
            {
              id: "application",
              icon: "chart-bar",
              title: "Anwendung auf reale Daten",
              detail: `Die Layouts wurden auf drei reale Datensätze mit unterschiedlichen [[Component:InlineReveal label="Dichten" content="Ein Maß für die Netzwerkdichte, definiert als Anzahl der Kanten geteilt durch die Anzahl der Knoten (dℓ = |E| / |V|). Höhere Werte deuten auf eine dichtere Vernetzung hin."]] angewendet:
  - **Welthandelsströme:** [[Component:InlineReveal label="SIPRI Arms Transfers Datensatz" content="Veröffentlicht vom Stockholm International Peace Research Institute. Der Datensatz enthält 259 Knoten, 68 Zeitpunkte (Jahre) und eine durchschnittliche lineare Kantendichte von etwa dℓ = 1,16 pro Zeitpunkt."]]
  - **Inlandsflugverbindungen:** [[Component:InlineReveal label="US Domestic Flight Datensatz" content="Datensatz aus dem Bereich Luftfahrt. Enthält 402 Knoten (Flughäfen), 363 Zeitpunkte (Monate) und eine durchschnittliche lineare Kantendichte von etwa dℓ = 8,91 pro Zeitpunkt."]]
  - **Software-Call-Graphen:** [[Component:InlineReveal label="JHotDraw Datensatz" content="Dynamische Methodenaufrufgraphen der Open-Source-Java-Anwendung JHotDraw. Enthält 787 Knoten (Funktionen) über 1077 Graphen (Benutzeraktionen) hinweg, mit einer durchschnittlichen linearen Kantendichte von etwa dℓ = 0,03 pro Zeitpunkt."]]`
            }
          ]          
        }
      },      
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
        content: {
          en: `Bipartite layouts are well-suited for compressing a large number of time points along the horizontal axis. Nonetheless, without proper node aggregation, scalability remains limited with respect to [[Component:InlineReveal label="network size." content="the number of nodes along the vertical axis."]]`,
          
          de: `Bipartite Layouts eignen sich hervorragend, um eine große Anzahl von Zeitpunkten entlang der horizontalen Achse zu komprimieren. Ohne geeignete Knotenaggregation bleibt jedoch die Skalierbarkeit in Bezug auf die [[Component:InlineReveal label="Netzwerkgröße." content="die Anzahl der Knoten entlang der vertikalen Achse."]] begrenzt.`
        }
      },      
      {
        title: { en: "Future Work", de: "Zukünftige Arbeiten" },
        content: {
          en: `Future work includes conducting a quantitative user study and building a graph generation model that integrates both temporal and structural features.`,
          
          de: `Zukünftige Arbeiten umfassen eine quantitative Nutzerstudie sowie die Entwicklung eines Graphgenerierungsmodells, das zeitliche und strukturelle Merkmale integriert.`
        }
      },
      {
        title: { en: "Read More", de: "Mehr erfahren" },
        content: {
          en: `
  <p class="project-actions">
    <a href="https://diglib.eg.org/items/ddf316e5-fa3e-41f2-a964-dd23f6e2ca22" target="_blank" class="contact-button">
      📄 Read More
    </a>
  </p>
          `,
          de: `
  <p class="project-actions">
    <a href="https://diglib.eg.org/items/ddf316e5-fa3e-41f2-a964-dd23f6e2ca22" target="_blank" class="contact-button">
      📄 Zum Artikel
    </a>
  </p>
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
    image: `${import.meta.env.BASE_URL}/assets/images/timber_stakeholders.png`,
    caption: {
      en: "A node-link visualization of the global timber construction stakeholder network. Flags represent stakeholder headquarters locations. Specific collaboration patterns and representative examples are highlighted through zoomed callouts. Visual polish and annotations by Luis Orozco.",
      de: "Eine Node-Link-Visualisierung des globalen Stakeholder-Netzwerks im Holzbau. Flaggen stellen die Standorte der Hauptsitze der Stakeholder dar. Spezifische Kollaborationsmuster und repräsentative Beispiele werden durch vergrößerte Hervorhebungen visualisiert. Visuelle Ausarbeitung und Annotationen von Luis Orozco."
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
        mediaComponentId: "DetailBoard",
        layout: "accordion",
        content: {
          en: [
            {
              id: "data-preparation",
              title: "Data Preparation",
              subtitle: "Structuring stakeholder information",
              icon: "database",
              detail: `- Cleaned and structured raw stakeholder data
- Identified key attributes for stakeholder classification and visual encoding`
            },
            {
              id: "interface-design",
              title: "Interface Design",
              subtitle: "Interactive exploration views",
              icon: "desktop",
              detail: `- Designed and implemented an interactive UI for stakeholder exploration
- Developed visualizations using **D3.js** for network graphs and **Leaflet** for geographic mapping`
            },
            {
              id: "collaboration",
              title: "User Collaboration",
              subtitle: "Iterative development with experts",
              icon: "users",
              detail: `- Worked closely with domain experts to refine the feature set`
            }
          ],
          de: [
            {
              id: "data-preparation",
              title: "Datenaufbereitung",
              subtitle: "Strukturierung von Stakeholder-Informationen",
              icon: "database",
              detail: `- Bereinigung und Strukturierung der Rohdaten zu Stakeholdern
- Identifikation von Schlüsselattributen für die Stakeholderklassifikation und visuelle Kodierung`
            },
            {
              id: "interface-design",
              title: "Interface-Design",
              subtitle: "Interaktive Explorationsansichten",
              icon: "desktop",
              detail: `- Entwurf und Implementierung einer interaktiven Benutzeroberfläche zur Stakeholder-Exploration
- Entwicklung von Visualisierungen mit **D3.js** für Netzwerkgraphen und **Leaflet** für geografische Karten`
            },
            {
              id: "collaboration",
              title: "Zusammenarbeit mit Nutzenden",
              subtitle: "Iterative Entwicklung mit Expert:innen",
              icon: "users",
              detail: `- Enge Zusammenarbeit mit Fachexpert:innen zur Verfeinerung der Funktionalität`
            }
          ]          
        }
      },      
      {
        title: { en: "Use Case", de: "Use Case" },
        mediaComponentId: "DetailBoard",
        layout: "bubble",
        content: {
          en: [
            {
              id: "goal",
              icon: "bullseye",
              title: "Goal",
              detail: `Support policymakers, researchers, and industry analysts in exploring collaboration patterns and key players in the global timber construction sector`
            },
            {
              id: "core-features",
              icon: "cogs",
              title: "Core Features",
              detail: `- [[Component:InlineReveal label="Node-link diagram" content="A common network visualization where nodes represent entities and links represent relationships."]]
- Geographical map
- Localized distortion using [[Component:InlineReveal label="fisheye zoom" content="A distortion-based interaction technique that magnifies a local area while preserving global context."]]
- User controls for different visual encodings and filtering by stakeholder role`
            },
            {
              id: "tech-stack",
              icon: "code",
              title: "Technology Stack",
              detail: `- Frontend technologies: **JavaScript**, **HTML**, **CSS**
- Visualization libraries: D3.js, [[Component:InlineReveal label="Leaflet" content="A lightweight JavaScript library for interactive maps."]]
      `
            }
          ],
          de: [
            {
              id: "goal",
              icon: "bullseye",
              title: "Ziel",
              detail: `Unterstützung von politischen Entscheidungsträger:innen, Forschenden und Branchenanalyst:innen bei der Analyse von Kollaborationsmustern und der Identifikation wichtiger Akteure im globalen Holzbausektor`
            },
            {
              id: "core-features",
              icon: "cogs",
              title: "Kernfunktionen",
              detail: `- [[Component:InlineReveal label="Node-Link-Diagramm" content="Eine gängige Netzvisualisierung, bei der Knoten Entitäten und Kanten deren Beziehungen darstellen."]]
- Geografische Karte
- Lokalisierte Verzerrung mithilfe von [[Component:InlineReveal label="Fisheye-Zoom" content="Eine verzerrungsbasierte Interaktionstechnik, die einen lokalen Bereich vergrößert, während der Gesamtkontext erhalten bleibt."]]
- Benutzersteuerungen für verschiedene visuelle Kodierungen und Filterung nach Stakeholder-Rollen`
            },
            {
              id: "tech-stack",
              icon: "code",
              title: "Technologie-Stack",
              detail: `- Frontend-Technologien: **JavaScript**, **HTML**, **CSS**
- Visualisierungsbibliotheken: D3.js, [[Component:InlineReveal label="Leaflet" content="Eine leichtgewichtige JavaScript-Bibliothek für interaktive Karten."]]`
            }
          ]          
        }
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
        title: { en: "Read More", de: "Mehr erfahren" },
        content: {
          en: `
  <p class="project-actions">
    <a href="https://www.mdpi.com/2075-5309/13/9/2287" target="_blank" class="contact-button">
      📄 Read Full Article
    </a>
    <a href="https://archstakeholders.github.io/" target="_blank" class="contact-button">
      🧭 Live Prototype (Desktop only)
    </a>
  </p>
          `,
          de: `
  <p class="project-actions">
    <a href="https://www.mdpi.com/2075-5309/13/9/2287" target="_blank" class="contact-button">
      📄 Zum Artikel
    </a>
    <a href="https://archstakeholders.github.io/" target="_blank" class="contact-button">
      🧭 Live-Demo (Nur für Desktop)
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
  > Led the design and development of an interactive tool for exploring high-dimensional design spaces in architectural design. The tool enables trade-off analysis and optimization insight through two visual encodings and was evaluated through a structured case study with domain experts.
      `,
      de: `
  > **Kurzfassung**  
  > Leitung der Konzeption und Entwicklung eines interaktiven Tools zur Erkundung hochdimensionaler Designräume in der architektonischen Gestaltung. Das Tool ermöglicht Kompromissanalyse und Optimierungseinblicke über zwei Visualisierungsansätze und wurde im Rahmen einer strukturierten Fallstudie mit Fachexpert:innen evaluiert.
`,
    },
    sections: [
      {
        title: { en: "Summary", de: "Zusammenfassung" },
        content: {
          en: `
  I led the development of an interactive desktop tool for exploring [[Component:InlineReveal label="fitness landscapes" content="Fitness landscapes visualize how design parameters relate to objective functions, such as performance or material efficiency."]] in architectural design optimization. The tool enables designers to identify correlations between parameters, detect parameters with significant influence on performance, and find alternative solutions with similar performance but differing parameter configurations.
          `,
          de: `
  Ich leitete die Entwicklung eines interaktiven Desktop-Tools zur Erkundung von [[Component:InlineReveal label="Fitness-Landschaften" content="Fitness-Landschaften visualisieren, wie Designparameter mit Zielgrößen wie Leistung oder Materialeffizienz zusammenhängen."]] in der architektonischen Designoptimierung.  
Das Tool ermöglicht es Designer:innen, Korrelationen zwischen Parametern zu erkennen, Einflussfaktoren auf die Leistung zu identifizieren und alternative Lösungen mit vergleichbarer Leistung, aber unterschiedlichen Parameterkonfigurationen zu finden.
          `,
        },
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        mediaComponentId: "DetailBoard",
        layout: "accordion",
        content: {
          en: [
            {
              id: "requirements-analysis",
              title: "Requirements Analysis",
              subtitle: "Understanding stakeholder needs",
              icon: "clipboard-list",
              detail: `- Contributed to the requirements analysis in collaboration with engineering and architectural domain experts`
            },
            {
              id: "prototype-development",
              title: "Prototype Development",
              subtitle: "Early proof of concept",
              icon: "flask",
              detail: `- Implemented an early proof of concept to validate the [[Component:InlineReveal label="glyph-based map" content="A visualization approach where glyphs represent multidimensional data points, allowing local structure and attributes to be seen at once."]]`
            },
            {
              id: "integration-support",
              title: "Integration Support",
              subtitle: "Linking visualization and geometry engines",
              icon: "plug",
              detail: `- Supported the core development and oversaw integration with [[Component:InlineReveal label="Rhino/Grasshopper" content="The geometry engine commonly used by architects and engineers for parametric modeling."]]`
            },
            {
              id: "ui-design",
              title: "UI Design",
              subtitle: "Exploration modes and interactions",
              icon: "desktop",
              detail: `- Contributed to UI and interaction design
- Helped define multiple exploration modes and dynamic cursor interactions`
            },
            {
              id: "evaluation",
              title: "Evaluation",
              subtitle: "Case study and usability feedback",
              icon: "user-check",
              detail: `- Organized and conducted a structured case study with a domain expert
- Collected feedback on usability, interpretability, and performance`
            }
          ],
          de: [
            {
              id: "requirements-analysis",
              title: "Anforderungsanalyse",
              subtitle: "Bedürfnisse der Stakeholder verstehen",
              icon: "clipboard-list",
              detail: `- Mitwirkung an der Anforderungsanalyse in Zusammenarbeit mit Ingenieur:innen und Architekt:innen`
            },
            {
              id: "prototype-development",
              title: "Prototyp-Entwicklung",
              subtitle: "Früher Machbarkeitsnachweis",
              icon: "flask",
              detail: `- Entwicklung eines frühen Proof-of-Concepts zur Validierung der [[Component:InlineReveal label="glyphenbasierten Karte" content="Ein Visualisierungsansatz, bei dem Glyphen multidimensionale Datenpunkte repräsentieren und lokale Strukturen sowie Attributmuster sichtbar machen."]]`
            },
            {
              id: "integration-support",
              title: "Integrationsunterstützung",
              subtitle: "Verknüpfung von Visualisierung und Geometrie-Engine",
              icon: "plug",
              detail: `- Unterstützung der Hauptentwicklung und Überwachung der Integration mit [[Component:InlineReveal label="Rhino/Grasshopper" content="Die von Architekt:innen und Ingenieur:innen häufig genutzte Geometrie- und Modellierungsumgebung."]]`
            },
            {
              id: "ui-design",
              title: "UI-Design",
              subtitle: "Explorationsmodi und Interaktionen",
              icon: "desktop",
              detail: `- Mitwirkung am UI- und Interaktionsdesign
- Definition verschiedener Explorationsmodi und dynamischer Cursor-Interaktionen`
            },
            {
              id: "evaluation",
              title: "Evaluation",
              subtitle: "Fallstudie und Usability-Feedback",
              icon: "user-check",
              detail: `- Organisation und Durchführung einer strukturierten Fallstudie mit einer Fachexpert:in
- Sammlung von Feedback zu Usability, Interpretierbarkeit und Performance`
            }
          ]
          
        }
      },      
      {
        title: { en: "Design Study", de: "Designstudie" },
        mediaComponentId: "DetailBoard",
        layout: "bubble",
        content: {
          en: [
            {
              id: "goal",
              icon: "bullseye",
              title: "Design Goals",
              detail: `
- Provide a spatial 2D representation of the design space
- Uncovering relationships between the design parameters and the performance
- Support discovery of multiple high-performing design alternatives
- Ensure interactivity and seamless integration into existing design workflows`
            },
            {
              id: "core-features",
              icon: "cogs",
              title: "Core Features",
              detail: `
- [[Component:InlineReveal label="Continuous density map" content="A visualization showing the estimated density of high-performing solutions across the design space."]] and dynamic linking of cursor position to parameter and objective values (features re-implemented and enhanced from prior tools)
- [[Component:InlineReveal label="Glyph-based map" content="A visualization method where glyphs encode multiple dimensions, enabling local pattern detection and parameter comparison."]] to complement the continuous view
- [[Component:InlineReveal label="Portal lens" content="An interactive zooming tool that enlarges local areas within the glyph-based map while preserving global context."]]
- 3D rendering view of selected designs
- Exploration history to track user navigation across the landscape`
            },
            {
              id: "tech-stack",
              icon: "code",
              title: "Technology Stack",
              detail: `- Core Application: **C#**, **.NET**, **WPF**
- Geometry and rendering integration via [[Component:InlineReveal label="Rhino/Grasshopper" content="A popular visual programming environment and geometry engine for architectural design."]]`
            },
            {
              id: "use-case",
              icon: "flask",
              title: "Case Study",
              detail: `- Applied to explore the design space of [[Component:InlineReveal label="coreless filament wound structures" content="Architectural components fabricated by winding fibers around a framework without using a mold or core, creating lightweight and efficient load-bearing forms."]]`
            }
          ],
          de: [
            {
              id: "goal",
              icon: "bullseye",
              title: "Designziele",
              detail: `
- Räumliche 2D-Repräsentation des Designraums bereitstellen
- Aufdecken von Beziehungen zwischen Designparametern und Leistung
- Unterstützung der Entdeckung mehrerer leistungsstarker Designalternativen
- Gewährleistung von Interaktivität und nahtloser Integration in bestehende Design-Workflows`
            },
            {
              id: "core-features",
              icon: "cogs",
              title: "Kernfunktionen",
              detail: `
- [[Component:InlineReveal label="Kontinuierliche Dichtekarte" content="Eine Visualisierung, die die geschätzte Dichte leistungsstarker Lösungen im Designraum zeigt."]] und dynamisches Verlinken der Cursorposition mit Parameter- und Zielfunktionswerten (re-implementiert und verbessert auf Basis bestehender Werkzeuge)
- [[Component:InlineReveal label="Glyphenbasierte Karte" content="Eine Visualisierungsmethode, bei der Glyphen mehrere Dimensionen codieren, um lokale Muster und Parametervergleiche zu ermöglichen."]] als Ergänzung zur Dichtekarte
- [[Component:InlineReveal label="Portal-Linse" content="Ein interaktives Zoom-Werkzeug, das lokale Bereiche innerhalb der glyphenbasierten Karte vergrößert und gleichzeitig den globalen Kontext bewahrt."]]
- 3D-Ansicht ausgewählter Designkonfigurationen
- Explorationshistorie zur Nachverfolgung der Navigation innerhalb des Designraums`
            },
            {
              id: "tech-stack",
              icon: "code",
              title: "Technologie-Stack",
              detail: `- Kernanwendung: **C#**, **.NET**, **WPF**
- Geometrie- und Renderintegration über [[Component:InlineReveal label="Rhino/Grasshopper" content="Eine verbreitete visuelle Programmierumgebung und Geometrie-Engine für architektonisches Design."]]`
            },
            {
              id: "use-case",
              icon: "flask",
              title: "Fallstudie",
              detail: `- Anwendung zur Analyse des Designraums von [[Component:InlineReveal label="kernlos gewickelten Strukturen" content="Architekturkomponenten, die durch das Umwickeln eines Rahmens ohne eine feste Form oder einen Kern gefertigt werden und dadurch leichte, effiziente Tragstrukturen bilden."]]`
            }
          ]          
        }
      },      
      {
        title: { en: "Case Study Findings", de: "Erkenntnisse aus der Fallstudie" },
        content: {
          en: `
  The domain expert was able to validate existing hypotheses about the design space and uncover new insights. They appreciated the combination of visualization modes, with the glyph-based map offering focused interaction and the continuous density map providing spatial overviews. The 3D render view proved to be an essential step for evaluating design feasibility, highlighting that not every high-performing solution is practically realizable.
          `,
          de: `
  Die Fachexpert:in konnte bestehende Hypothesen über den Designraum bestätigen und gleichzeitig neue Erkenntnisse gewinnen. Die Kombination der Visualisierungsmodi wurde besonders geschätzt: Die glyphenbasierte Karte ermöglichte fokussierte Interaktionen, während die kontinuierliche Dichtekarte räumliche Übersichten bot. Die 3D-Ansicht erwies sich als ein wesentlicher Schritt zur Bewertung der Realisierbarkeit von Designs, da nicht jede leistungsstarke Lösung praktisch umsetzbar ist.
          `,
        },
      },
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
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
    id: "fiber-structure-explorer",
    type: ["viz", "aec"],
    image: `${import.meta.env.BASE_URL}/assets/images/fiber_dashboard.png`, 
    caption: {
      en: "A screenshot of the Fiber Structure Design Explorer dashboard showing multiscale visualization of fiber structure simulations.",
      de: "Ein Screenshot des Fiber Structure Design Explorer Dashboards mit multiskaliger Visualisierung von Faserstruktur-Simulationen."
    },
    title: {
      en: "Fiber Structure Design Explorer",
      de: "Fiber Structure Design Explorer"
    },
    summary: {
      en: "An interactive dashboard to explore fiber structure design spaces at multiple levels of detail.",
      de: "Ein interaktives Dashboard zur Erkundung von Faserstruktur-Designräumen auf mehreren Detailebenen."
    },
    tldr: {
      en: `
  > **TL;DR**  
  > Built an interactive dashboard prototype for exploring fiber structure design spaces at multiple levels of detail. The tool supports navigation from high-level overviews to detailed inspections and was developed closely with two domain experts.
      `,
      de: `> **Kurzfassung**  
> Entwicklung eines interaktiven Dashboard-Prototyps zur Erkundung von Faserstruktur-Designräumen auf verschiedenen Detailebenen.  
> Das Tool unterstützt die Navigation von globalen Übersichten bis hin zu detaillierten Inspektionen und wurde in enger Zusammenarbeit mit zwei Domänenexpert:innen entwickelt.
`
    },
    sections: [
      {
        title: { en: "Summary", de: "Zusammenfassung" },
        content: {
          en: `I developed an interactive desktop application designed to support the exploration and analysis of fiber structure simulations. Built in close collaboration with two domain experts, the tool enables designers to navigate from high-level overviews to detailed inspections through coordinated views, supporting real-world analysis tasks across multiple scales.`,
          de: `Ich entwickelte eine interaktive Desktop-Anwendung zur Unterstützung der Exploration und Analyse von Faserstruktursimulationen. In enger Zusammenarbeit mit zwei Fachexperten entstanden, ermöglicht das Tool Designer:innen, von einer Übersicht auf hoher Ebene zu detaillierten Inspektionen über koordinierte Ansichten zu navigieren und unterstützt reale Analyseaufgaben über mehrere Skalen hinweg.`
        }
      },
      {
        title: { en: "My Role", de: "Meine Rolle" },
        mediaComponentId: "DetailBoard",
        layout: "accordion",
        content: {
          en: [
            {
              id: "requirements-analysis",
              title: "Requirements Analysis",
              subtitle: "Collaboration with experts",
              icon: "clipboard-list",
              detail: `- Defined analysis goals and tasks in collaboration with two architectural domain experts`
            },
            {
              id: "visualization-design",
              title: "Visualization and Interface Design",
              subtitle: "Multilevel exploration approach",
              icon: "desktop",
              detail: `- Designed the multi-level exploration strategy (overview, comparison, detailed inspection)
- Implemented visualizations including parallel coordinate plots, scatterplot matrices, small multiples, and matrix views
- Designed interactions for filtering, candidate selection, and detailed fiber inspection`
            },
            {
              id: "application-development",
              title: "Application Development",
              subtitle: "Building the dashboard",
              icon: "code",
              detail: `- Built the desktop dashboard using **WPF**, **SciChart**, **OpenGL**, and **SQLite**`
            }
          ],
          de: [
            {
              id: "requirements-analysis",
              title: "Anforderungsanalyse",
              subtitle: "Zusammenarbeit mit Expert:innen",
              icon: "clipboard-list",
              detail: `- Definition der Analyseziele und Aufgaben in Zusammenarbeit mit zwei architektonischen Domänenexpert:innen`
            },
            {
              id: "visualization-design",
              title: "Visualisierungs- und Interface-Design",
              subtitle: "Multiskaliger Explorationsansatz",
              icon: "desktop",
              detail: `- Entwurf der mehrstufigen Explorationsstrategie (Übersicht, Vergleich, Detailinspektion)
- Implementierung von Visualisierungen einschließlich Parallelkoordinaten-Diagrammen, Scatterplot-Matrizen, Small Multiples und Matrix-Ansichten
- Gestaltung von Interaktionen für Filterung, Kandidatenauswahl und detaillierte Faserinspektion`
            },
            {
              id: "application-development",
              title: "Anwendungsentwicklung",
              subtitle: "Erstellung des Dashboards",
              icon: "code",
              detail: `- Entwicklung des Desktop-Dashboards mit **WPF**, **SciChart**, **OpenGL** und **SQLite**`
            }
          ]          
        }
      },
      {
        title: { en: "Design Study", de: "Designstudie" },
        mediaComponentId: "DetailBoard",
        layout: "bubble",
        content: {
          en: [
            {
              id: "goal",
              icon: "bullseye",
              title: "Goal",
              detail: `
  - Support exploration of fiber structure design spaces across multiple levels of detail
  - Identify clusters and correlations at the overview level
  - Select and compare candidates based on quantitative metrics or aesthetic criteria
  - Inspect individual fiber structures to detect loose fibers, kinks, and analyze intersections`
            },
            {
              id: "core-features",
              icon: "cogs",
              title: "Core Features",
              detail: `
  - [[Component:InlineReveal label="Parallel Coordinate Plot" content="A multivariate visualization technique where each attribute is represented as a vertical axis, helping detect trends and clusters across high-dimensional data."]]
  - [[Component:InlineReveal label="Scatterplot Matrix" content="A grid of pairwise scatterplots showing relationships between different attribute pairs in high-dimensional data."]]
  - Small Multiples combined with bar and distribution charts for candidate comparison
  - Intersection Matrix for detailed visualization of fiber intersections
  - 3D Render View for spatial evaluation of fiber structures
  - Linked filtering and brushing across all views`
            },
            {
              id: "tech-stack",
              icon: "code",
              title: "Technology Stack",
              detail: `- Developed with **WPF**, **SciChart**, **OpenGL**, and **SQLite**`
            }
          ],
          de: [
            {
              id: "goal",
              icon: "bullseye",
              title: "Ziel",
              detail: `
  - Unterstützung der Exploration von Faserstruktur-Designräumen auf mehreren Detailebenen
  - Identifikation von Clustern und Korrelationen auf der Übersichtsebene
  - Auswahl und Vergleich von Kandidaten basierend auf quantitativen Metriken oder ästhetischen Kriterien
  - Inspektion einzelner Faserstrukturen zur Erkennung loser Fasern, Knicke und Analyse von Schnittpunkten`
            },
            {
              id: "core-features",
              icon: "cogs",
              title: "Kernfunktionen",
              detail: `
  - [[Component:InlineReveal label="Parallelkoordinaten-Diagramm" content="Eine multivariate Visualisierungstechnik, bei der jedes Attribut als vertikale Achse dargestellt wird, um Trends und Cluster in hochdimensionalen Daten zu erkennen."]]
  - [[Component:InlineReveal label="Scatterplot-Matrix" content="Ein Gitter aus paarweisen Streudiagrammen, das Beziehungen zwischen verschiedenen Attributpaaren in hochdimensionalen Daten zeigt."]]
  - Small Multiples kombiniert mit Balken- und Verteilungsdiagrammen für den Vergleich von Kandidaten
  - Matrixdarstellung zur detaillierten Visualisierung von Faserschnittpunkten
  - 3D-Ansicht zur räumlichen Bewertung von Faserstrukturen
  - Verknüpfte Filterung und Brushing über alle Ansichten hinweg`
            },
            {
              id: "tech-stack",
              icon: "code",
              title: "Technologie-Stack",
              detail: `- Entwickelt mit **WPF**, **SciChart**, **OpenGL** und **SQLite**`
            }
          ]          
        }
      },
      {
        title: { en: "Key Takeaway", de: "Zentrale Erkenntnis"},
        content: {
          en: `This prototype demonstrates the potential of visualization and visual analytics to support human-centered workflows and cognitive needs in the AEC domain. It was developed as part of a broader analysis of the industry's digital challenges, highlighting the value of interactive exploration tools for future architectural and engineering practice.`,
          de: `Dieser Prototyp demonstriert das Potenzial von Visualisierung und Visual Analytics zur Unterstützung menschzentrierter Arbeitsabläufe und kognitiver Anforderungen im AEC-Bereich. Er wurde im Rahmen einer umfassenderen Analyse der digitalen Herausforderungen der Branche entwickelt und unterstreicht den Wert interaktiver Explorationstools für die zukünftige Architektur- und Ingenieurpraxis.`
        }
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
    ]
  },  
  // {
  //   id: "vis-future-aec",
  //   type: ["aec"],
  //   title: {
  //     en: "Visualization for the Future of AEC",
  //     de: "Visualisierung für die Zukunft der AEC-Branche",
  //   },
  //   summary: {
  //     en: "A perspective article on visualization's role in shaping AEC’s future.",
  //     de: "Ein Perspektivartikel über die Rolle der Visualisierung in der Zukunft von Architektur, Ingenieurwesen und Bauwesen (AEC).",
  //   },
  //   tldr: {
  //     en: `
  // > **TL;DR**  
  // > Co-authored a perspective article on how visualization and AR technologies can support the digital transformation of the architecture, engineering, and construction (AEC) industry. The piece outlines domain challenges and identifies visualization opportunities across design, fabrication, and construction workflows.
  //     `,
  //     de: `
  // > **Kurzfassung**  
  // > Mitverfasser eines Perspektivartikels über das Potenzial von Visualisierungs- und AR-Technologien für die digitale Transformation der AEC-Branche. Der Artikel beschreibt branchenspezifische Herausforderungen und identifiziert Einsatzmöglichkeiten für Visualisierung in Entwurf, Fertigung und Bauausführung.
  //     `,
  //   },
  //   sections: [
  //     {
  //       title: { en: "Summary", de: "Zusammenfassung" },
  //       content: {
  //         en: `
  // This article explores the unique challenges of the AEC industry and outlines the potential for **visualization research** to play a transformative role in its digital future. Drawing on long-term interdisciplinary collaboration, the article characterizes the AEC ecosystem, its complexity, and the need for **human-in-the-loop visual tools** that support decision-making across design, fabrication, and construction phases.
  //         `,
  //         de: `
  // Dieser Artikel beleuchtet die spezifischen Herausforderungen der AEC-Branche und zeigt auf, wie **Visualisierungsforschung** eine transformative Rolle in ihrer digitalen Zukunft spielen kann. Basierend auf langjähriger interdisziplinärer Zusammenarbeit beschreibt der Artikel das komplexe AEC-Ökosystem und betont den Bedarf an **human-in-the-loop** Visualisierungstools, die Entscheidungen in Entwurf, Fertigung und Bau unterstützen.
  //         `,
  //       },
  //     },
  //     {
  //       title: { en: "My Role", de: "Meine Rolle" },
  //       content: {
  //         en: `
  // - Contributed to the conceptual framing and writing of the article  
  // - Helped articulate domain challenges and translate them into visualization research opportunities  
  // - Synthesized examples from collaborative projects involving architectural design optimization
  //         `,
  //         de: `
  // - Mitwirkung an der konzeptionellen Ausrichtung und am Schreiben des Artikels  
  // - Formulierung branchenspezifischer Herausforderungen und Übertragung in Forschungsfragen zur Visualisierung  
  // - Zusammenstellung von Beispielen aus Kooperationsprojekten zur architektonischen Designoptimierung
  //         `,
  //       },
  //     },
  //     {
  //       title: { en: "Article Highlights", de: "Kernaussagen" },
  //       content: {
  //         en: `
  // - Discusses critical AEC characteristics and why it lags behind in automation compared to other sectors such as manufacturing or agriculture  
  // - Highlights key AEC solution strategies, including **robotic fabrication**, **design generation and optimization**, **adaptive structures**, and **sustainable materials**  
  // - Identifies areas where visualization can offer value, such as **AR for human-robot collaboration**, **visual analytics for design space exploration**, and **situated visualization for adaptive structures**
  //         `,
  //         de: `
  // - Diskussion zentraler Merkmale der AEC-Branche und Gründe, warum sie in Sachen Automatisierung anderen Bereichen wie Fertigung oder Landwirtschaft hinterherhinkt  
  // - Darstellung von Lösungsansätzen: **robotergestützte Fertigung**, **generatives Design**, **adaptive Strukturen**, **nachhaltige Materialien**  
  // - Identifikation von Einsatzmöglichkeiten für Visualisierung, etwa **AR für Mensch-Roboter-Kollaboration**, **Visual Analytics für Designspace-Exploration**, **situative Visualisierung für adaptive Strukturen**
  //         `,
  //       },
  //     },
  //     {
  //       title: { en: "Key Takeaway", de: "Zentrale Erkenntnis" },
  //       content: {
  //         en: `
  // The article advocates for **human-in-the-loop** solutions that reflect the contextual and cognitive needs of AEC professionals — and suggests that no community is better positioned to tackle these challenges than the visualization and visual analytics community.
  //         `,
  //         de: `
  // Der Artikel spricht sich für **human-in-the-loop**-Lösungen aus, die den kontextuellen und kognitiven Anforderungen von AEC-Fachleuten gerecht werden – und betont, dass die Visualisierungs-Community besonders gut aufgestellt ist, diese Herausforderungen anzugehen.
  //         `,
  //       },
  //     },
  //     {
  //       title: { en: "Reflection", de: "Reflexion" },
  //       content: {
  //         en: `
  // Writing this article helped me step back from individual research projects and think more broadly about how design, engineering, and digital technologies intersect at a systems level. It also allowed me to reflect on the interplay between the **visualization** and **AEC** domains—and what these two design-driven disciplines can learn from one another.
  //         `,
  //         de: `
  // Das Schreiben dieses Artikels ermöglichte mir, Abstand von einzelnen Forschungsprojekten zu gewinnen und systemischer über die Schnittstellen von Design, Technik und digitalen Technologien nachzudenken. Es war auch eine Gelegenheit, das Zusammenspiel von **Visualisierung** und **AEC** zu reflektieren – und darüber, was beide gestaltungsorientierten Disziplinen voneinander lernen können.
  //         `,
  //       },
  //     },
  //     {
  //       title: { en: "Read More", de: "Mehr erfahren" },
  //       content: {
  //         en: `
  // <p class="project-actions">
  //   <a href="https://ieeexplore.ieee.org/abstract/document/9709159" target="_blank" class="contact-button">
  //     📄 Read Full Article
  //   </a>
  // </p>
  //         `,
  //         de: `
  // <p class="project-actions">
  //   <a href="https://ieeexplore.ieee.org/abstract/document/9709159" target="_blank" class="contact-button">
  //     📄 Zum Artikel
  //   </a>
  // </p>
  //         `,
  //       },
  //     },
  //   ],
  // },
];

export default projects;
