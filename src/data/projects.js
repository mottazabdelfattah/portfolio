const projects = [
  {
    id: "mturk-study",
    title: "MTurk Visualization Study",
    type: ["ux", "viz"],
    summary:
      "Quantitative evaluation of static network representations.",
    content: `### Summary  
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
      "In-person evaluation with professionals to understand how they interact with early visualization prototypes in a tool for design exploration.",
    image: "/assets/images/architect.png",
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
