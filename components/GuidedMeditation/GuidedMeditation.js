import Link from "next/link";
import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function GuidedMeditation() {
  return (
    <>
      <div>
        <h3>Meditation: Living Presence – with Body Scan (12:06 min.)</h3>

        <article>
          A key pathway to full presence is awakening through the body. This
          meditation guides us through a body scan, relaxing and receiving the
          play of sensations. We then deepen attention to the breath, and rest
          with the rhythmic waves of breathing, experiencing the background of
          the whole domain of physical aliveness.
        </article>
        <br />

        <AudioPlayer
          autoPlay
          src="https://traffic.libsyn.com/tarabrach/2023-10-11-Meditation-Living-Presence-with-Body-Scan-2016-05-25-TaraBrach.mp3?_=1"
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/iHGj23psLNY?si=jhMt3-acuO-B3lBu&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
        <br />
        <br />

        <small>
          source: Meditation: Living Presence – with Body Scan (12:06 min.) Oct
          11, 2023;
          <br />
          <BrightLink href="https://www.tarabrach.com/meditation-living-presence-body-scan-2/">
            https://www.tarabrach.com/meditation-living-presence-body-scan-2/
          </BrightLink>
        </small>
        <br />
        <br />
      </div>
    </>
  );
}

const BrightLink = styled(Link)`
  text-decoration: none;
  color: #ffffff; /* Set the color to a bright blue (you can adjust the color as needed) */

  /* Hover effect (optional) */
  &:hover {
    text-decoration: underline; /* Underline on hover (you can modify this effect) */
  }
`;
