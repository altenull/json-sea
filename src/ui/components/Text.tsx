import React, { HTMLAttributes, memo, useCallback } from 'react';
import { isString } from '../../utils/json.util';

type TextElement = HTMLParagraphElement | HTMLHeadingElement;

type Props = HTMLAttributes<TextElement> & {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  children: React.ReactNode;
};

const _Text = ({
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  children,
  className,
  ...props
}: Props) => {
  const extendClassName = useCallback(
    (base: string) => (isString(className) ? `${base} ${className}` : base),
    [className],
  );

  if (h1) {
    return (
      <h1
        className={extendClassName('mb-2 text-5xl font-bold leading-normal tracking-tighter text-gray-900')}
        {...props}
      >
        {children}
      </h1>
    );
  } else if (h2) {
    return (
      <h2 className={extendClassName('mb-2 text-4xl font-semibold tracking-tighter text-gray-900')} {...props}>
        {children}
      </h2>
    );
  } else if (h3) {
    return (
      <h3 className={extendClassName('mb-2 text-2xl font-semibold tracking-tighter text-gray-900')} {...props}>
        {children}
      </h3>
    );
  } else if (h4) {
    return (
      <h4 className={extendClassName('mb-2 text-xl font-semibold tracking-tighter text-gray-900')} {...props}>
        {children}
      </h4>
    );
  } else if (h5) {
    return (
      <h5 className={extendClassName('mb-2 text-base font-semibold tracking-tighter text-gray-900')} {...props}>
        {children}
      </h5>
    );
  } else if (h6) {
    return (
      <h6 className={extendClassName('mb-2 text-sm font-semibold tracking-tight text-gray-900')} {...props}>
        {children}
      </h6>
    );
  } else {
    return (
      <p className={extendClassName('text-base leading-relaxed tracking-tighter text-gray-900')} {...props}>
        {children}
      </p>
    );
  }
};

/**
 * The NextUI had `<Text>` component in v1, but it disappeared in v2.]
 * So I added `<Text>` UI component for temporary use until the actual `<Text>` component returns.
 * @see https://github.com/nextui-org/nextui/issues/1767
 */
export const Text = memo(_Text);
