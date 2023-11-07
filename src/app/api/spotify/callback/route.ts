import axios from "axios";
import { NextRequest } from "next/server";
import querystring from "querystring";

export async function GET(request: NextRequest) {
  let code = request.nextUrl.searchParams.get("code") || null;
  let state = request.nextUrl.searchParams.get("state") || null;

  const basic = `Basic ${Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64")}`;

  if (state == null) {
    return Response.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    const data = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URL,
        grant_type: "authorization_code",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: basic,
        },
      }
    );

    // console.log(data.data);
    return Response.json({
      access_token: data.data.access_token,
      token_type: data.data.token_type,
      scope: data.data.scope,
      expires_in: data.data.expires_in,
      refresh_token: data.data.refresh_token,
    });

    // const track = await axios.get(
    //   "https://api.spotify.com/v1/me/player/currently-playing?market=ID",
    //   {
    //     headers: {
    //       Authorization: `Bearer ${data.data.access_token}`,
    //     },
    //   }
    // );
    // console.log(track.data.item);
  }
}
