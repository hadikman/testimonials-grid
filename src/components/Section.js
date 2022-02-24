import styled, {css} from 'styled-components';

const Card = styled.section`
  ${props =>
    props.first &&
    css`
      background-color: var(--moderate-violet);
    `}
  ${props =>
    props.second &&
    css`
      background-color: var(--very-dark-grayish-blue);
    `}
  ${props =>
    props.third &&
    css`
      background-color: var(--white);
    `}
  ${props =>
    props.fourth &&
    css`
      background-color: var(--very-dark-blackish-blue);
    `}
  ${props =>
    props.fifth &&
    css`
      background-color: var(--white);
    `}
  ${props =>
    props.light &&
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
    props.dark &&
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
