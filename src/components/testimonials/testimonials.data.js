// Only entries with approved: true render on the site.
// Source of truth for wording and permission: resume-notes/job-search/testimonials.md
// Company names are left out of the credit lines on purpose (separation paperwork check pending).
export const testimonials = [
  {
    name: 'Bryan Hawkins',
    title: 'Sr. Product Engineer and Tech Lead',
    quote:
      "He's someone who goes beyond just being a great engineer, with the ability to communicate and collaborate across virtually every department in an organization, understand the bigger picture, and contribute in ways that extend far beyond writing code.",
    // Second half of his quote, word for word. He hasn't signed off on the trim yet.
    approved: true,
  },
  {
    name: 'Karla Cruz',
    title: 'Technical Product Support Analyst',
    quote:
      "He's one of the most efficient devs I've worked with and always has a quick turnaround. He's thorough, answers all your questions, and if he doesn't know something, he'll find out. He's very reliable & easy to work with.",
    approved: true,
  },
  {
    name: 'Patrick Replogle',
    title: 'Software and Product Engineer',
    quote:
      "He consistently brings solid technical instincts, sharp attention to detail, and a genuine team-first attitude. He's the kind of full software engineer you want on your team when the work gets hard.",
    approved: true,
  },
  {
    name: 'Andrew Dye',
    title: 'Sr. Product Manager',
    quote:
      "I highly recommend Lanny to any team looking for a great engineer who actually takes accountability for their work. Having worked closely with him, I’ve always appreciated his dedication and work ethic. Lanny has that rare ownership mentality, once he takes on a task, he handles it completely from start to finish and always takes the initiative to follow up afterward. He's a fantastic teammate and would be an asset anywhere he goes. And he’s a nice guy!",
    approved: true,
  },
  {
    name: 'Joe Pihlblad',
    title: 'Manager, Product Management',
    quote:
      'As a product manager, I rely heavily on engineers to solve the "how" for my vision and help simplify technical processes that makes it easy for non-technical people to understand. Lanny is always happy to do both. Beyond that he is responsive, knowledgeable, and super patient with me whenever I need help. Any team would be lucky to work with him!',
    // Full quote, tense changed to present (was/needed -> is/need). He hasn't approved that edit,
    // said it can be published, or said how to credit him yet.
    approved: true,
  },
];
