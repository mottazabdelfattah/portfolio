// LayoutIcon.jsx
const layoutIcons = {
    NL: `${import.meta.env.BASE_URL}/assets/icons/symbol_NL2.png`,
    AM: `${import.meta.env.BASE_URL}/assets/icons/symbol_AM2.png`,
    BP: `${import.meta.env.BASE_URL}/assets/icons/symbol_BP2.png`,
    CFL: `${import.meta.env.BASE_URL}/assets/icons/CFL.png`,
    GFL: `${import.meta.env.BASE_URL}/assets/icons/GFL.png`,
    SC: `${import.meta.env.BASE_URL}/assets/icons/SC.png`,
    UMAP: `${import.meta.env.BASE_URL}/assets/icons/UMAP.png`,
  };
  
  const InlineIcon = ({ type, alt, size = 20 }) => (
    <img
      src={layoutIcons[type]}
      alt={alt || type}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "contain",
      }}
    />
  );
  
  export default InlineIcon;
  