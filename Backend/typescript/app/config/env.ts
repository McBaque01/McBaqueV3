import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import dotenv from "dotenv"

dotenv.config()

export const env = {
    Port: process.env.PORT || "PORT_NUMBER",
    Host: process.env.HOST || "LOCAL_HOST",
    MongoURI: process.env.MongoDbURI || "MONGO_DB_URI",
    GmailEmail: process.env.GMAIL_EMAIL || "GMAIL_EMAIL",
    GmailPassword: process.env.GMAIL_PASSWORD || "GMAIL_PASSWORD",
    SpotifyClient: process.env.SpotifyClientID || "SPOTIFY_CLIENT_ID",
    SpotifySecret: process.env.SpotifySecret || "SPOTIFY_SECRET",
    SpotifyCallbackURI: process.env.CallbackURI || "SPOTIFY_CALLBACK",
  };

  