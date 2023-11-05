import querystring from "querystring";

export async function GET(request: Request) {
  function generateRandomString(length: number) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }

    return result;
  }

  let state = generateRandomString(16);
  let scope = "user-read-private user-read-email user-read-currently-playing";

  return Response.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URL,
        state: state,
      })
  );
}
