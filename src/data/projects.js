const projects = [
  {
    id: "mturk-study",
    title: "MTurk Visualization Study",
    type: ["ux", "viz"],
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
    title: "Architect Lab Study",
    type: ["ux", "viz"],
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
    image: `${import.meta.env.BASE_URL}/assets/images/architect.png`,
    caption: `An interactive user interface for exploring architectural design space.`
  },
  {
    id: "creativity-workshops",
    title: "Creativity Workshops",
    type: ["ux"],
    summary: "Exploring early-stage design through participatory workshops.",
    content:
      "We conducted creativity workshops to gather requirements and explore how visualization might support ideation in early-stage tool development.",
    image: "/assets/images/workshop.png",
  },
  {
    id: "literature-review",
    title: "Systematic Literature Review",
    type: ["viz"],
    summary:
      "Systematic coding of visualization-related academic publications.",
    content:
      "Participated in the classification and synthesis of literature related to visualization tool development. Helped extract trends, gaps, and design implications.",
    image: "/assets/images/review.png",
  },
];

export default projects;
