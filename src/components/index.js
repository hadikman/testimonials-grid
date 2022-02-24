import Section from './Section';
import Image from './Image';

export default function Index() {
  return (
    <main className="container">
      <Section className="section" first light>
        <div className="section-title">
          <Image file="image-daniel.jpg" alt="daniel clifford" />
          <div>
            <h4 className="section-name">This is H2</h4>
            <h4 className="section-verify">This is H2</h4>
          </div>
        </div>
        <p className="section-text">
          lorem upsom in the firsd and transaction in buddy. for the feature
          please contact to us.
        </p>
        <p className="section-review">
          lorem upsom in the firsd and transaction in buddy. for the feature
          please contact to us.
        </p>
      </Section>
      <Section className="section" second light></Section>
      <Section className="section" third dark>
        <div className="section-title">
          <Image file="image-daniel.jpg" alt="daniel clifford" />
          <div>
            <h4 className="section-name">This is H2</h4>
            <h4 className="section-verify">This is H2</h4>
          </div>
        </div>
        <p className="section-text">
          lorem upsom in the firsd and transaction in buddy. for the feature
          please contact to us.
        </p>
        <p className="section-review">
          lorem upsom in the firsd and transaction in buddy. for the feature
          please contact to us.
        </p>
      </Section>
      <Section className="section" fourth light></Section>
      <Section className="section" fifth dark></Section>
    </main>
  );
}
