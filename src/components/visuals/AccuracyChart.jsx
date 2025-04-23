import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./AccuracyChart.css";
import { useLanguage } from "../../context/LanguageProvider";
import uiText from "../../data/uiText";
import InlineIcon from "./InlineIcon";

const accuracyByTask = {
  "Structural Overview": [
    { method: "NL", mean: 0.535, ci: 0.041 },
    { method: "AM", mean: 0.916, ci: 0.025 },
    { method: "BP", mean: 0.863, ci: 0.025 },
  ],
  "Cluster Detection": [
    { method: "NL", mean: 0.805, ci: 0.030 },
    { method: "AM", mean: 0.769, ci: 0.033 },
    { method: "BP", mean: 0.655, ci: 0.038 },
  ],
  "Density Estimation": [
    { method: "NL", mean: 0.883, ci: 0.023 },
    { method: "AM", mean: 0.902, ci: 0.027 },
    { method: "BP", mean: 0.758, ci: 0.033 },
  ],
};

const methodColors = {
  NL: "#94a3b8",
  AM: "#94a3b8",
  BP: "#94a3b8",
};

export default function AccuracyChart({ task }) {
  const [loaded, setLoaded] = useState(false);
  const { language } = useLanguage();
  const chartText = uiText[language].accuracyChart;

  useEffect(() => {
    setLoaded(true);
  }, []);

  const data = accuracyByTask[task] || [];

  return (
    <div className="accuracy-chart">
      <div className="chart-label">{chartText.title}</div>
      {data.map(({ method, mean, ci }) => (
        <div key={method} className="bar-group">
          <div className="bar-label"><InlineIcon type={method}/></div>
          <div className="bar-container">
            <motion.div
              className="bar"
              initial={{ width: 0 }}
              animate={{ width: `${mean * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ backgroundColor: methodColors[method] }}
            >
              <span className="bar-value">{(mean * 100).toFixed(0)}%</span>
            </motion.div>
            <div
              className="error-bar"
              style={{
                left: `${(mean - ci) * 100}%`,
                width: `${ci * 2 * 100}%`,
              }}
            />
          </div>
        </div>
      ))}
      <p className="media-caption">
        {chartText.caption}
      </p>
    </div>
  );
}
