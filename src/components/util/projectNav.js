// Route a project's detail page is served from
export const projectPath = ({ nameText }) => `/${nameText.replace(/\s/g, '')}`;

// Router state ViewPage reads. Only plain data goes in: history state is
// structured-cloned, which fails on the JSX icons held by each project
export const toViewState = ({
  nameText,
  nameTextExpanded,
  image,
  heroImage,
  gameplayImage,
  gameplayImageTwo,
  description,
  mobileDescription,
  fullDescription,
  link,
  liveLink,
  packages,
  colorSplash,
  devTypeOneofTwo,
  devTypeTwoofTwo,
  status,
}) => ({
  nameText,
  nameTextExpanded,
  // Show pages use the text-free art when a project has it
  img: heroImage || image,
  gameplayImage,
  gameplayImageTwo,
  description,
  mobileDescription,
  fullDescription,
  link,
  liveLink,
  packages,
  colorSplash,
  devTypeOneofTwo,
  devTypeTwoofTwo,
  status,
});
