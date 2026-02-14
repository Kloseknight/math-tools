import React from 'react';
import parse, { DOMNode, Text } from 'html-react-parser';
import { InlineMath, BlockMath } from 'react-katex';

interface RenderGuideContentProps {
  content: string;
}

const renderTextWithMath = (text: string) => {
  const regex = /(\$\$[\s\S]*?\$\$|\\\([\s\S]*?\\\))/g;
  const parts = text.split(regex).filter(Boolean);

  if (parts.length <= 1) {
    return text;
  }

  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      const latex = part.substring(2, part.length - 2).trim();
      return <BlockMath key={index} math={latex} />;
    }
    if (part.startsWith('\\(') && part.endsWith('\\)')) {
      const latex = part.substring(2, part.length - 2).trim();
      return <InlineMath key={index} math={latex} />;
    }
    return part;
  });
};

const RenderGuideContent: React.FC<RenderGuideContentProps> = ({ content }) => {
  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Text && domNode.data) {
        const processed = renderTextWithMath(domNode.data);
        if (Array.isArray(processed)) {
          return <>{processed}</>;
        }
      }
    },
  };

  return <>{parse(content, options)}</>;
};

export default RenderGuideContent;
