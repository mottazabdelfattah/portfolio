import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ZoomImage({ src, alt = "", caption = "", style = {}, className = "" }) {
  return (
    <figure style={{ marginTop: "1rem", ...style }} className={className}>
      <Zoom>
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: "100%", borderRadius: "6px" }}
        />
      </Zoom>
      {caption && (
        <figcaption style={{ fontSize: "0.9rem", color: "#64748b", marginTop: "0.5rem", textAlign:"center" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
