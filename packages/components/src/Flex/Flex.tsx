import styled from 'styled-components';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: number;
  children: React.ReactNode;
}

const Flex = ({
  direction,
  justify,
  align,
  gap,
  children,
  ...props
}: Props) => {
  return (
    <Layout
      $direction={direction}
      $justify={justify}
      $align={align}
      $gap={gap}
      {...props}
    >
      {children}
    </Layout>
  );
};

export default Flex;

const Layout = styled.div<{
  $direction?: string;
  $justify?: string;
  $align?: string;
  $gap?: number;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'flex-start'};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : 'initial')};
`;
