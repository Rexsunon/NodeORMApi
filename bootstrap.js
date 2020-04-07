module.exports = async () => {
  const User = require("./models/User");
  const Tweet = require("./models/Tweet");

  User.hasMany(Tweet, { as: "Tweets", foreignKey: "userId" });
  Tweet.belongsTo(User, { as: "User", forwignKey: "userId" });

  const errorHandler = (err) => console.error("Error: ", err);

  const user = await User.create({
    username: "Rexsunon",
    password: "1234567",
  }).catch(errorHandler);

  const tweet = await Tweet.create({
    content: "This is a tweet content. tweeted from android",
    userId: user.id,
  }).catch(errorHandler);

  const users = await User.findAll({
    where: { username: "Rexsunon" },
    include: [{ model: Tweet, as: "Tweets" }],
  }).catch(errorHandler);

  console.log("User data: ", JSON.stringify(users));
};
