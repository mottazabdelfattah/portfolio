import React, { Children, Fragment } from "react";
import InlineReveal from "../components/visuals/InlineReveal";
import AccuracyChart from "../components/visuals/AccuracyChart";
import InlineIcon from "../components/visuals/InlineIcon";
import ZoomImage from "../components/visuals/ZoomImage";

// Component map
export const componentMap = {
  InlineReveal: (props) => <InlineReveal {...props} />,
  AccuracyChart: (props) => <AccuracyChart {...props} />,
  InlineIcon: (props) => <InlineIcon {...props} />,
  ZoomImage: (props) => <ZoomImage {...props} />,
};

// Replacement function
export function replaceCustomComponents(children) {
  return Children.toArray(children).flatMap((child, outerIdx) => {
    if (typeof child === "string") {
      const parts = child.split(/(\[\[Component:.*?\]\])/g);

      return parts.map((part, innerIdx) => {
        const match = part.match(/\[\[Component:([A-Za-z0-9]+)(.*?)\]\]/);
        if (match) {
          const tag = match[1];
          const propsRaw = match[2];
          const props = {};

          const attrRegex = /([\w-]+)="(.*?)"/g;
          let attrMatch;
          while ((attrMatch = attrRegex.exec(propsRaw)) !== null) {
            props[attrMatch[1]] = attrMatch[2];
          }

          const Component = componentMap[tag];
          if (Component) {
            return (
              <Component key={`comp-${outerIdx}-${innerIdx}`} {...props} />
            );
          }
        }

        return <Fragment key={`text-${outerIdx}-${innerIdx}`}>{part}</Fragment>;
      });
    }

    return child;
  });
}
