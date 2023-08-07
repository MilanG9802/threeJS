export const openProfileTab = (cc, hr, onObject) => {
  if (onObject.object.uuid === cc.current.uuid)
    window.open("https://github.com/MilanGolakiyaTST", "new");
  if (onObject.object.uuid === hr.current.uuid)
    window.open("https://www.linkedin.com/in/milan-golakiya-435a11236", "new");
  // if (onObject.object.uuid === lc.current.uuid)
  //   window.open("https://leetcode.com/vinaymatta63/", "new");
  // if (onObject.object.uuid === cc.current.uuid)
  //   window.open("https://www.codechef.com/users/vinay_matta_63", "new");
  // if (onObject.object.uuid === hr.current.uuid)
  //   window.open("https://www.hackerrank.com/vinaymatta63", "new");
};

export const openProjectTab = (
  weather,
  expense,
  movieBase,
  museum,
  onlineStore,
  meetup,
  onObject
) => {
  if (onObject.object.uuid === weather.current.uuid)
    window.open(
      "https://weather-india-milan.netlify.app/src/index.html",
      "new"
    );
  if (onObject.object.uuid === expense.current.uuid)
    window.open("https://taskmanagerbymilan.netlify.app/");
  if (onObject.object.uuid === movieBase.current.uuid)
    window.open("https://httppractice.netlify.app/", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://foodwithfirebasebymilan.netlify.app/", "new");
  if (onObject.object.uuid === meetup.current.uuid)
    window.open("https://meet-up-mauve.vercel.app/", "new");
  if (onObject.object.uuid === onlineStore.current.uuid)
    window.open("https://onlinestorebymilan.netlify.app/", "new");
};

export const openProjectGithub = (
  weather,
  expense,
  movieBase,
  museum,
  onlineStore,
  meetup,
  onObject
) => {
  if (onObject.object.uuid === weather.current.uuid)
    window.open("https://github.com/MilanGolakiyaTST/Weather", "new");
  if (onObject.object.uuid === expense.current.uuid)
    window.open("https://github.com/MilanGolakiyaTST/react-guide", "new");
  if (onObject.object.uuid === movieBase.current.uuid)
    window.open("https://github.com/MilanGolakiyaTST/practice_HTTP", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://github.com/MilanGolakiyaTST/react-food-order", "new");
  if (onObject.object.uuid === meetup.current.uuid)
    window.open("https://github.com/MilanGolakiyaTST/MeetUp", "new");
  if (onObject.object.uuid === onlineStore.current.uuid)
    window.open("https://github.com/MilanGolakiyaTST/react-online", "new");
};
