import { CSSProperties, PropsWithChildren, RefObject, forwardRef } from "react";
import styled from "styled-components";
import { H3 } from "../Headline/Headers";
import Text from "../Text/Text";

const P5ContainerTitle = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.space[5]};
`;

type P5ContainerBaseProps = {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
};

const P5ContainerBase = styled("div")<P5ContainerBaseProps>`
  width: ${({ width }) => `${width}px` ?? "100%"};
  height: ${({ height }) => `${height}px` ?? "auto"};
  position: relative;
  overflow: hidden;

  border-radius: ${({ theme }) => theme.radius[2]};
  margin: 3em;
  /* transform: translateZ(10px); */
  box-shadow: 0 2px 16px 0 rgba(10, 10, 14, 0.2);

  & canvas {
    border-radius: ${({ theme }) => theme.space[4]};
  }

  & .title {
    opacity: 0;
  }
  &:hover .title {
    opacity: 1;
  }

  & .title {
    /* Animation */
    @media (prefers-reduced-motion: no-preference) {
      transition-property: opacity;
      transition-duration: 420ms;
    }
  }
`;

type Props = P5ContainerBaseProps & {
  title: string;
  description?: string;
  className: string;
};

const P5Container = (
  {
    title,
    description,
    children,
    className,
    ...props
  }: PropsWithChildren<Props>,
  ref: RefObject<HTMLDivElement>
) => {
  return (
    <P5ContainerBase className={className} {...props}>
      <div ref={ref}>
        <P5ContainerTitle className="title">
          <H3 marginBottom={3}>{title}</H3>
          {description && (
            <Text fontSize={0} lineHeight={1} textAlign="right" opacity="0.5">
              {description}
            </Text>
          )}
        </P5ContainerTitle>
        {children}
      </div>
    </P5ContainerBase>
  );
};

export default forwardRef(P5Container);
