import Section from './Section';
import Image from './Image';

import persons from './data';

const themeColor = ['first', 'second', 'third', 'fourth', 'fifth'];

export default function Index() {
  return (
    <main className="container">
      {persons.map((person, index) => {
        return (
          <Section
            key={index}
            className="section"
            themeClass={themeColor[index]}
            theme={person.theme}
          >
            {index === 0 && (
              <div className="quote-holder">
                <Image
                  file="bg-pattern-quotation.svg"
                  alt="quote icon"
                  className="quote-icon"
                />
              </div>
            )}
            <div className="section-title">
              <Image file={person.image} alt={person.name} />
              <div>
                <h4 className="section-name">{person.name}</h4>
                <h4 className="section-verify">{person.verify}</h4>
              </div>
            </div>
            <p className="section-text">{person.text}</p>
            <p className="section-review">" {person.review} "</p>
          </Section>
        );
      })}
    </main>
  );
}
