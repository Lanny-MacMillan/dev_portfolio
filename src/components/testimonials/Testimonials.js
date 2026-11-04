import React from 'react';
import { testimonials } from './testimonials.data.js';
import {
  TestimonialsContainer,
  Heading,
  Subheading,
  Grid,
  QuoteCard,
  Quote,
  Credit,
  Name,
  Role,
} from './Testimonials.styles.js';

const Testimonials = () => {
  const approved = testimonials.filter((t) => t.approved);

  if (approved.length === 0) return null;

  return (
    <TestimonialsContainer>
      <Heading>Kind words</Heading>
      <Subheading>From teammates and partners I've worked with.</Subheading>
      <Grid>
        {approved.map((t, i) => (
          <QuoteCard
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Quote>{t.quote}</Quote>
            <Credit>
              <Name>{t.name}</Name>
              <Role>{t.title}</Role>
            </Credit>
          </QuoteCard>
        ))}
      </Grid>
    </TestimonialsContainer>
  );
};

export default Testimonials;
