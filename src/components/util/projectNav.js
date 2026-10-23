// Route a project's detail page is served from
export const projectPath = ({ nameText }) => `/${nameText.replace(/\s/g, '')}`;

// Router state ViewPage reads. Only plain data goes in: history state is
// structured-cloned, which fails on the JSX icons held by each project
export const toViewState = ({
  nameText,
  nameTextExpanded,
  image,
  gameplayImage,
  gameplayImageTwo,
  description,
  mobileDescription,
  fullDescription,
  link,
  liveLink,
  colorSplash,
  devTypeOneofTwo,
  devTypeTwoofTwo,
  status,
}) => ({
  nameText,
  nameTextExpanded,
  img: image,
  gameplayImage,
  gameplayImageTwo,
  description,
  mobileDescription,
  fullDescription,
  link,
  liveLink,
  colorSplash,
  devTypeOneofTwo,
  devTypeTwoofTwo,
  status,
});
