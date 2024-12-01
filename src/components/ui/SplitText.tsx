import React, { cloneElement, isValidElement, memo } from 'react';

const CHARACTER_DELIMITER = '';
const WORD_DELIMITER = /(\s+)/;

const DELIMITERS = {
  chars: CHARACTER_DELIMITER,
  words: WORD_DELIMITER,
} as const;

export type SplitTextMethods = 'chars' | 'words';

export type SplitTextProps = {
  children: React.ReactNode;
  split?: SplitTextMethods;
  wrapperClass?: string;
  textClass?: string;
};

function splitText({
  text,
  wrapperClass = 'inline-block leading-none',
  textClass = 'inline-block',
  delimiter,
}: {
  text: string;
  wrapperClass?: string;
  textClass?: string;
  delimiter: string | RegExp;
}) {
  return (
    <>
      {text.split(DELIMITERS.words).map((fragment, index) => (
        <span key={index} className={wrapperClass}>
          {fragment
            .split(delimiter)
            .filter((fragment) => fragment)
            .map((fragment, fragmentIndex) => (
              <span key={fragmentIndex} className={textClass}>
                {fragment.trim().length === 0 ? '\u00A0' : fragment}
              </span>
            ))}
        </span>
      ))}
    </>
  );
}

function SplitText({
  children,
  split = 'words',
  wrapperClass,
  textClass,
}: SplitTextProps): React.ReactNode {
  const processChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (isValidElement(child)) {
        const childElement = child as React.ReactElement<any>;
        return cloneElement(childElement, {
          children: processChildren(child.props.children),
        });
      } else if (typeof child === 'string') {
        return splitText({
          text: child,
          wrapperClass,
          textClass,
          delimiter: DELIMITERS[split],
        });
      }
      return child;
    });
  };

  const processedChildren = processChildren(children);

  return <>{processedChildren}</>;
}

export default memo(SplitText)