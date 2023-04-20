import React, { useState, useRef, useEffect } from 'react';

import { useSpring, useTransition, animated, config, SpringConfig } from '@react-spring/web';

function TextTransition( props ) {
  const {
    direction = 'up',
    inline = false,
    springConfig = config.default,
    delay = 0,
    className,
    style,
    translateValue: tv = '100%',
    children,
  } = props;

  const initialRun = useRef(true);
  const fromTransform = direction === 'down' ? `-${tv}` : tv;
  const leaveTransform = direction === 'down' ? tv : `-${tv}`;

  const transitions = useTransition([children], {
    enter: { opacity: 1, transform: 'translateY(0%)' },
    from: { opacity: 0, transform: `translateY(${fromTransform})` },
    leave: {
      opacity: 0,
      transform: `translateY(${leaveTransform})`,
      position: 'absolute',
    },
    config: springConfig,
    immediate: initialRun.current,
    delay: !initialRun.current ? delay : undefined,
  });

  const [width, setWidth] = useState(0);
  const currentRef = useRef(null);
  const heightRef = useRef('auto');

  useEffect(() => {
    initialRun.current = false;
    const element = currentRef.current;

    // If element doesn't exist, then do nothing
    if (!element) return;

    const { width, height } = element.getBoundingClientRect();

    setWidth(width);
    heightRef.current = height;
  }, [children, setWidth, currentRef, heightRef]);

  const widthTransition = useSpring({
    to: { width },
    config: springConfig,
    immediate: initialRun.current,
    delay: !initialRun.current ? delay : undefined,
  });

  return (
    <animated.div
      className={`text-transition ${className}`}
      style={{
        ...(inline && !initialRun.current ? widthTransition : undefined),
        ...style,
        whiteSpace: inline ? 'nowrap' : 'normal',
        display: inline ? 'inline-flex' : 'flex',
        height: heightRef.current,
      }}
    >
      {transitions((styles, item) => (
        <animated.div
          style={{ ...styles }}
          ref={item === children ? currentRef : undefined}
        >
          {item}
        </animated.div> 
      ))}
    </animated.div>
  );
}

export default TextTransition;