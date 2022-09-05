export const join = (req, res) => res.render("join", { pageTitle: "join" });
export const login = (req, res) => res.render("login", { pageTitle: "login" });
export const seeUsers = (req, res) =>
  res.render("seeUsers", { pageTitle: "seeUsers" });
export const seeUser = (req, res) =>
  res.render(`<h1>seeUser: ${req.params.id}</h1>`);
export const editProfile = (req, res) => res.render("<h1>editProfile</h1>");
