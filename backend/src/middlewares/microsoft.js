import passport from "passport";
import { Strategy as MicrosoftStrategy } from "passport-microsoft";
import { config } from "dotenv";

config();

passport.use(
    "auth-microsoft",
    new MicrosoftStrategy({
        clientID: process.env.MICROSOFT_CLIENT_ID,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/microsoft/callback",
        scope: ["user.read", "calendars.read", "mail.read", "offline_access"],
        // The authorization URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`
        authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
        // The token URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`
        tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
      }, function (accesToken, refreshToken, profile, done) {
        console.log(accesToken);

        done(null, profile)
    })
)