import axios from "axios";
import { NextRequest } from "next/server";
import querystring from "querystring";
import type { SpotifyCurrentlyPlaying } from "@/types/spotify";

export async function POST() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const basic = `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString(
    "base64"
  )}`;

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    {
      grant_type: "refresh_token",
      refresh_token,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: basic,
      },
    }
  );

  const track: SpotifyCurrentlyPlaying = await axios.get(
    "https://api.spotify.com/v1/me/player/currently-playing?market=ID",
    {
      headers: {
        Authorization: `Bearer ${response.data.access_token}`,
      },
    }
  );

  if (track.data == "" || !track.data.is_playing) {
    return Response.json({
      isPlaying: false,
      artist: "Spotify",
      title: "Not playing",
      trackUrl: "https://open.spotify.com",
    });
  }

  const isPlaying = track.data.is_playing;
  const title = track.data.item.name;
  const artist = track.data.item.artists.map(artist => artist.name).join(", ");
  const album = track.data.item.album.name;
  const albumImageUrl = track.data.item.album.images[0].url;
  const trackUrl = track.data.item.external_urls.spotify;
  const embedUrl = trackUrl.split("track").join("embed/track");

  return Response.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    trackUrl,
    embedUrl,
    title,
  });
}
