require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");
const UserModel = require("./model/userModel");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const storeUer = async ({ name, email, picture }) => {

  try {
    const userExist = await UserModel.findOne({ email: email })
    if (!userExist) {

      const user = new UserModel({ name, email, avatar: picture })
      await user.save()
    }
  } catch (error) {
    console.log(error)
  }

}

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"], //test
    },
    function async(accessToken, refreshToken, profile, done) {

      storeUer(profile._json)
      done(null, profile);
    }
  )
);

//* cookie serialization purpose
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

/* try {
 


  //   if (userExist) {
  //     UserModel.patch({ email }, { name, email, avatar: picture })
  //   } else {

  //     const newUser = new UserModel({ name, email, avatar: picture });
  //     newUser.save();

  //   }

} catch (error) {
  console.log(error)
} */