const projects = [
  {
    id: "mturk-study",
    title: "Quantitative Visualization Study",
    type: ["ux"],
    summary:
      "Quantitative evaluation of static network representations.",
    content: `> **TL;DR**  
> Conducted a quantitative study via MTurk to compare three static network representations: Node-Link diagrams (NL), Adjacency Matrices (AM), and Bipartite layouts (BP). AM and BP supported better high-level comprehension, while NL helped with cluster detection. Results inform layout choices based on task type and user goals.
    
### Summary  
I led a quantitative user study comparing three network visualization techniques — node-link diagrams (NL), adjacency matrices (AM), and bipartite layouts (BP) — with a focus on large networks and high-level overview tasks. The study was conducted using Amazon Mechanical Turk (MTurk) to achieve statistically significant results.

### My Role  
- Designed a between-subjects study, including task structure and layout conditions
- Generated the study stimuli using **R** and **d3.js**
- Built the study platform using **JsPsych**, **PHP**, and **MySQL**  
- Recruited and screened 150 participants via MTurk based on demographics, HIT score, and attention checks  
- Conducted two rounds of pilot testing to refine task clarity and flow  
- Interpreted findings to inform visualization design decisions

### Study Details  
- **Participants:** 150 MTurk users, screened for quality  
- **Design:** Randomized assignment to one of three layout types across five network tasks  
- **Tasks Included:** Density estimation, cluster detection, structural overviews  
- **Metrics Recorded:** Accuracy, response time, and perceived difficulty  

### Key Insights  
- BP and AM layouts supported better high-level comprehension of network structure, while NL excelled at visualizing clusters  
- BP was the weakest layout for density estimation; AM performed best  
- For tasks involving node attributes or directionality, AM and BP provided clearer overviews due to their dual-axis structure  

### Implications  
- For understanding overall network structure, layouts based on vertex ordering (AM and BP) performed better than force-directed approaches (NL)  
- For density estimation, edge packing (as in AM) provided more accurate results than edge overdrawing (NL and BP)  
- For cluster detection, node proximity had more impact than edge visibility — spatial grouping helped users more than clearly drawn connections

### Reflection  
This project sharpened my skills in remote study design, visual stimulus development, and translating quantitative findings into actionable design recommendations. If repeated, I’d combine quantitative metrics with qualitative follow-ups to better understand users’ reasoning during task performance.

Read more → [Project Report](https://ieeexplore.ieee.org/document/9908291)
`,

    image: `${import.meta.env.BASE_URL}/assets/images/mturk.png`,
  },
  {
    id: "architect-lab",
    title: "Qualitative Study with Architects",
    type: ["ux", "aec"],
    summary:
      "Evaluating design decisions in a visualization tool for architects.",
    content:
      `> **TL;DR**  
> Studied how projection and visualization methods affect design exploration. Star Coordinates was preferred; continuous maps encouraged open exploration, while discrete maps supported detailed analysis. Results suggest value in user-adaptive visualization tools.
      
### Summary  
I led a qualitative lab study to evaluate how different visualization techniques and projection methods influence architects’ exploration of a design space. The study focused on how two visualization techniques (continuous vs. discrete maps) and two methods for projecting multivariate data into 2D space (Star Coordinates vs. UMAP) influenced user behavior and insight generation. The study was conducted with 12 architects in a controlled lab setting.

### My Role  
- Designed the overall study structure, including four domain-specific tasks  
- Integrated the visualization tool developed in **.NET WPF** with **LimeSurvey** for capturing task responses  
- Ran pilot testing with three visualization experts to refine the setup  
- Collected and analyzed qualitative data, including screen and audio recordings  
- Synthesized insights to inform future visualization tool design  

### Study Details  
- **Participants:** 12 architects from academic backgrounds  
- **Design:** Mixed study design; participants were split into three groups to vary exposure to projection methods and visualization techniques  
- **Tasks Included:** Participants completed four domain-specific tasks: estimating solution positions on the map, identifying alternative designs, detecting influential parameters, and analyzing parameter-performance correlations.
- **Data Collected:** Think-aloud protocols, screen/audio recordings, task difficulty ratings, mouse movement data, and subjective preferences regarding visualization and projection methods  

### Key Insights  
- **Star Coordinates** was consistently preferred across tasks due to its intuitiveness and the presence of navigation axes  
- **Continuous maps** supported open-ended exploration, while **discrete maps** facilitated detailed analysis and comparison  
- Participants exhibited three primary navigation strategies: **axis sweeping** (often with Star Coordinates), **random exploration** (frequent with UMAP), and **systematic scanning** (more common with discrete maps)  

![Navigation Strategies](${import.meta.env.BASE_URL}/assets/images/nav_strategy.png)  *The heatmaps of the mouse trajectories reveal three navigation strategies followed by the participants.*

### Implications  
This study highlights the need for **user-adaptive visual analytics tools** — systems that tailor interaction based on user traits such as expertise, visualization literacy, and cognitive preferences. Participants with lower familiarity or confidence, especially with UMAP, showed signs of frustration and disengagement. Future systems should aim to reduce cognitive load through intuitive adaptation while maintaining transparency and user control. Balancing adaptability with user trust remains a complex but critical design challenge.

### Reflection  
While the small sample size limited the generalizability of our findings, conducting in-person evaluations with domain experts provided unique value. The lab setting enabled close observation of user strategies, detailed feedback, and rich think-aloud commentary — insights difficult to achieve through crowd-sourced studies. In future work, I would combine this in-depth qualitative approach with larger-scale, quantitative studies to validate and expand on the observed patterns.

Read more → [Project Report](https://link.springer.com/article/10.1007/s00371-024-03491-3)
`,
    image: `${import.meta.env.BASE_URL}/assets/images/archiect_user_study_diagram.png`,
    caption: `A visual summary of the study design, highlighting procedure, tasks, independent variables, and collected measures.`
  },
  {
    id: "creativity-workshops",
    title: "Creativity Workshops",
    type: ["ux","aec"],
    summary: "Exploring early-stage design through participatory workshops.",
    content:
      `> **TL;DR**  
> Facilitated a creativity workshop with architects to explore their current workflows and identify opportunities for visualization. Used structured activities—including wishful thinking, brainstorming, and visual analogies—to elicit design needs and data-driven tool ideas.

### Summary  
I facilitated a creativity workshop with five architects to explore their current design workflows and uncover how visualization could support early-stage decision-making. Based on the **Creative Visualization-Opportunities (CVO)** framework, the session aimed to elicit domain challenges, inspire ideation, and surface opportunities for new visualization tools.

### My Role  
- Designed and facilitated a half-day **CVO-inspired workshop** with five architectural designers  
- Selected and led key workshop activities: **wishful thinking**, **brainstorming**, and **visualization analogies**  
- Collected and analyzed artifacts including **sticky notes**, **sketches**, and **audio recordings**  
- Synthesized the results into themes and opportunity areas to inform future tool development

### Workshop Methods  
- **Wishful Thinking**: Participants shared ideal visualization capabilities without technological constraints  
- **Brainstorming**: Small group discussion and sketching generated concepts around data types, tasks, and interaction modes  
- **Visualization Analogies**: Participants reflected on existing visualizations from other domains and imagined how these could map to their design context  

### Key Takeaway  
The **visualization analogy** activity was especially effective at prompting participants to link unfamiliar visuals to their domain needs. Across activities, participants expressed a preference for tools that connect abstract data to **geometric and material representations**—a recurring theme in architectural workflows. 

### Reflection  
This was my first hands-on experience conducting a creativity-focused research workshop. It gave me a deeper understanding of how to structure open-ended, participatory sessions and how letting participants lead the conversation and resisting the urge to steer the discussion are essential for uncovering authentic insights.

Read more → [A Framework for Creative Visualization-Opportunities Workshops](https://ieeexplore.ieee.org/abstract/document/8440830/)
`,
    image: `${import.meta.env.BASE_URL}/assets/images/workshop2.png`,
    caption: `Sticky notes collected from the workshop.`
  },
  {
    id: "literature-review",
    title: "Thematic Analysis",
    type: ["ux"],
    summary:
      "Thematic coding of visualization literature on scalability.",
    content:
      `> **TL;DR**  
> Contributed to a large-scale literature review by thematically coding 127 visualization papers to analyze how scalability is defined and justified. The project highlighted inconsistencies in terminology and the need for shared frameworks across visualization subfields.

### Summary  
As part of a larger literature review project on scalability in visualization, I contributed to the thematic coding of over 120 visualization publications. The goal was to analyze how scalability is defined and communicated in visualization research and to support the development of a conceptual model that clarifies the different meanings and dimensions of scalability across subfields.

### My Role  
- Participated in the **manual coding** of all 127 selected papers using a structured coding scheme  
- Identified how scalability claims were defined and supported across papers (e.g., through metrics, case studies, or user studies)  
- Worked collaboratively to ensure consistency and accuracy in coding through consensus reviews  
- Contributed to refining the coding scheme and surfacing recurring patterns in the literature

### Study Details  
- **Data Source:** 127 peer-reviewed visualization papers  
- **Coding Method:** Manual thematic coding of paper content  
- **Goal:** Understand how scalability is presented and justified, and validate our conceptual model for consistent use across the field

### Key Takeaway  
Scalability is defined and evaluated in very different ways across visualization research — from performance metrics and plots in technical papers to subjective reasoning in design-focused studies.

### Implications  
Our work showed the need for shared frameworks and terminology that help researchers communicate and share knowledge, especially when working across disciplines.

### Reflection  
This project sharpened my skills in **thematic coding**. It also reminded me how important it is to be **precise and evidence-based** when making claims about concepts like scalability, both in research and product contexts.

Read more → [Project Report](https://ieeexplore.ieee.org/document/10003102/)
`,
    image: `${import.meta.env.BASE_URL}/assets/images/thematic.png`,
  },
  {
    id: "dynamic-network",
    title: "Dynamic Network Visualization",
    type: ["viz"],
    summary:
      "Scalable layouts for visualizing dynamic networks.",
    content: `> **TL;DR**  
> Designed and evaluated two scalable layout techniques for dynamic networks based on bipartite graph layouts. The layouts support temporal pattern recognition while minimizing overdraw, and were tested through parameter studies and real-world datasets.

### Summary  
I led the design and evaluation of two alternative approaches for visualizing dynamic networks using bipartite layouts. The goal was to create scalable visual representations that preserve both **temporal patterns** and **network structure** as the number of time points increases. The two designs were developed, tested, and applied to datasets from different domains.

### My Role  
- Designed two layout strategies (SEP and TEP) for dynamic network visualization  
- Implemented interactive prototypes using **Java**, later re-developed in **Angular** and **Node.js**  
- Conducted a **parameter study** using synthetic network data generated in **R**  
- Applied both designs to real-world datasets: **global trade**, **US domestic flights**, and **software call graphs**
### Project Details  
- **Design Goal:** Visualize dynamic networks in a way that scales over time (i.e., thousands of time points) while retaining readability of both structural and temporal features  
- **Approach:**
  - Developed two layout strategies—**Stacked Edge Plot (SEP)** and **Time-aligned Edge Plot (TEP)**—that compress small multiples into a stacked layout  
  - Built a frontend to interact with various visualization parameters and data operations, including **timeline partitioning** and **vertex ordering**
- **Evaluation:**  
  - Conducted a parameter study using synthetic graphs with varying density and number of time points  
  - Applied the designs to real datasets to assess generalizability and insight generation

### Key Takeaway  
Both designs mitigated overdraw and supported temporal pattern recognition better than existing techniques. However, scalability remains constrained by screen space, especially for large networks (i.e., more than a few hundred nodes). **Edge filtering** and **timeline partitioning** were key to making dense datasets interpretable.

### Reflection  
Although the focus was on layout design, this project highlighted how **data-layer operations** (like timeline partitioning) are critical to the effectiveness of visual mapping. Our designs outperformed state-of-the-art techniques in flexibility but also revealed how certain visual mapping decisions can limit the impact of those data operations.

### Future Work  
Next steps include developing a **quantitative user study** to validate the findings from our work, as well as building a **graph generation model** that integrates temporal and structural features.
`
  },
  {
    id: "timber-stakeholders",
    title: "Timber Stakeholders Explorer",
    type: ["viz", "aec"],
    summary:
      "An interactive tool to explore global stakeholder networks in timber construction.",
    content: `> **TL;DR**  
> Built an interactive web app to visualize relationships among global timber construction stakeholders. The tool supports exploration of stakeholder networks and was developed iteratively with domain experts.

### Summary  
I designed and developed an interactive web application to explore stakeholder relationships in the global timber construction industry. The goal was to help users uncover collaboration patterns and identify key players across the industry. The tool provides both geographic and network-based views of stakeholder interactions.

### My Role  
- Cleaned and structured raw data, identifying key attributes for stakeholder classification and visual encoding  
- Designed and implemented an interactive UI for exploring stakeholders by geography, type, and connection patterns using **D3.js**, **Leaflet**, and **JavaScript**  
- Collaborated iteratively with subject matter experts to refine the feature set and improve usability

### Project Details  
- **Use Case:** Help policymakers, researchers, and industry analysts explore how different players in the timber construction sector collaborate globally  
- **Core Features:**  
  - Two interactive views of the stakeholder network: a **node-link diagram** and a **geographical map**  
  - Multiple **visual encoding options** for the node-link diagram, a **fisheye zoom lens**, and **filtering by stakeholder role**
- **Technology Stack:**  
  - Frontend: **JavaScript**, **HTML**, **CSS**  
  - Visualization: **D3.js** for network graphs, **Leaflet** for geographic mapping

### Key Takeaway  
Working closely with domain experts was essential to shaping the tool's functionality and ensuring its value. A flexible, dual-mode visualization approach allowed users to shift between **network structure** and **spatial distribution**, helping uncover patterns not obvious in tabular format.

### Reflection  
This project reinforced the importance of **designing with—not just for—domain experts**. It also deepened my experience with D3.js.

Explore the tool → [Live Prototype](https://archstakeholders.github.io/).

Read more → [Project Report](https://www.mdpi.com/2075-5309/13/9/2287)
`
  },

  {
    id: "fitness-landscape",
    title: "Fitness Landscape Explorer",
    type: ["viz", "aec"],
    summary:
      "An interactive tool for exploring architectural design optimization through visualized fitness landscapes.",
    content: `> **TL;DR**  
> Contributed to the design and delivery of an interactive tool for exploring high-dimensional design spaces in architectural design. The tool enables trade-off analysis and optimization insight through two visual encodings and was evaluated through a structured case study with domain experts.

### Summary  
I contributed to the development of an interactive desktop tool for exploring **fitness landscapes** in architectural design optimization. Fitness landscapes visualize how design parameters relate to objective functions, such as performance or material efficiency. The tool enables designers to identify correlations between parameters, detect parameters with significant influence on performance, and find alternative solutions with similar performance but differing parameter configurations.

### My Role  
- Conducted **requirements analysis** in collaboration with engineering and architectural stakeholders  
- Implemented an early proof of concept to validate core ideas and interactions 
- Supported the core developer and oversaw integration with **Rhino/Grasshopper**, the geometry engine used by design professionals  
- Contributed to the **UI design**, helping define exploration modes and interaction behavior  
- Evaluated usability and performance through a structured case study and feedback sessions

### Project Details  
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

### Key Takeaway  
The expert was able to confirm existing hypotheses about the design space and also uncover new insights. They appreciated both visualization modes, with the **glyph-based map** offering focused interaction and the **density map** providing spatial overviews. The **3D render view** proved essential part of the analysis workflow, as not every high-performing solution is a feasible design.

### Reflection  
This project reinforced the importance of designing within the tools and visual language familiar to domain experts. Integration with Rhino/Grasshopper was essential for adoption. Likewise, architects ultimately want to “see” the 3D representation of the designs. For exploration tools to be adopted, they must strike a balance between data abstraction and 3D design representation.

Read more → [Project Report](https://link.springer.com/article/10.1007/s00371-024-03491-3)
`,
image: `${import.meta.env.BASE_URL}/assets/images/fitness.png`,
    caption: `An interactive user interface for exploring for exploring fitness landscapes in architectural design optimization.`
  },

  {
    id: "vis-future-aec",
    title: "Visualization for the Future of AEC",
    type: ["aec"],
    summary:
      "A perspective article on visualization's role in shaping AEC’s future.",
    content: `> **TL;DR**  
> Co-authored a perspective article on how visualization and AR technologies can support the digital transformation of the architecture, engineering, and construction (AEC) industry. The piece outlines domain challenges and identifies visualization opportunities across design, fabrication, and construction workflows.

### Summary  
This article explores the unique challenges of the AEC industry and outlines the potential for **visualization research** to play a transformative role in its digital future. Drawing on long-term interdisciplinary collaboration, the article characterizes the AEC ecosystem, its complexity, and the need for **human-in-the-loop visual tools** that support decision-making across design, fabrication, and construction phases.

### My Role  
- Contributed to the conceptual framing and writing of the article  
- Helped articulate domain challenges and translate them into visualization research opportunities  
- Synthesized examples from collaborative projects involving architectural design optimization

### Article Highlights  
- Discusses critical AEC characteristics and why it lags behind in automation compared to other sectors such as manufacturing or agriculture  
- Highlights key AEC solution strategies, including **robotic fabrication**, **design generation and optimization**, **adaptive structures**, and **sustainable materials**  
- Identifies areas where visualization can offer value, such as **AR for human-robot collaboration**, **visual analytics for design space exploration**, and **situated visualization for adaptive structures**  

### Key Takeaway  
The article advocates for **human-in-the-loop** solutions that reflect the contextual and cognitive needs of AEC professionals — and suggests that no community is better positioned to tackle these challenges than the visualization and visual analytics community.

### Reflection  
Writing this article helped me step back from individual research projects and think more broadly about how design, engineering, and digital technologies intersect at a systems level. It also allowed me to reflect on the interplay between the **visualization** and **AEC** domains—and what these two design-driven disciplines can learn from one another.

Read more → [Full Article]( https://ieeexplore.ieee.org/abstract/document/9709159)
`
  }
];

export default projects;
