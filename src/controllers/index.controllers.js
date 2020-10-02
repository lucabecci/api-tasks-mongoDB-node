export const welcome = (req, res) => {
  res.json({
    message: "Welcome to my API rest",
    createdby: "Created by: Luca Becci",
    github: "https://github.com/lucabecci",
  });
};
