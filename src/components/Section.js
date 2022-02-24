import styled, {css} from 'styled-components';

const Card = styled.section`
  ${props =>
    props.themeClass === 'first' &&
    css`
      background-color: var(--moderate-violet);
    `}
  ${props =>
    props.themeClass === 'second' &&
    css`
      background-color: var(--very-dark-grayish-blue);
    `}
  ${props =>
    props.themeClass === 'third' &&
    css`
      background-color: var(--white);
    `}
  ${props =>
    props.themeClass === 'fourth' &&
    css`
      background-color: var(--very-dark-blackish-blue);
    `}
  ${props =>
    props.themeClass === 'fifth' &&
    css`
      background-color: var(--white);
    `}
  ${props =>
    props.theme === 'light' &&
    css`
      .section-name,
      .section-verify,
      .section-review {
        color: var(--light-gray);
      }
      .section-text {
        color: var(--white);
      }
    `}
  ${props =>
    props.theme === 'dark' &&
    css`
      .section-name,
      .section-verify,
      .section-review {
        color: var(--very-dark-grayish-blue);
      }
      .section-text {
        color: var(--very-dark-grayish-blue);
      }
    `}
`;

export default function Section(props) {
  const {className, children} = props;
  return (
    <Card {...props} className={className}>
      {children}
    </Card>
  );
}
