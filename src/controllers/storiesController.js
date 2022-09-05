export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const trending = (req, res) =>
  res.render("trending", { pageTitle: "trending" });
export const newStories = (req, res) =>
  res.render("newStories", { pageTitle: "newStories" });
export const seeStory = (req, res) =>
  res.render(`<h1>seeStory: ${req.params.id}</h1>`);
export const editStory = (req, res) =>
  res.render(`<h1>editStory: ${req.params.id}</h1>`);
export const deleteStory = (req, res) =>
  res.render(`<h1>delaeteStory: ${req.params.id}</h1>`);
