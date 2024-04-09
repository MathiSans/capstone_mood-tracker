import Link from "next/link";
import styled from "styled-components";

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

        <iframe
          frameborder="0"
          width={300}
          src="https://content.libsyn.com/p/d/e/9/de98f386edbc4f63/2023-10-11-Meditation-Living-Presence-with-Body-Scan-2016-05-25-TaraBrach.mp3?c_id=162738893&cs_id=162738893&response-content-type=audio%2Fmpeg&Expires=1712703716&Signature=TAAy3dPD17cr3OQDJ7wkrBkUzS0jnC9ZL70zL02znwLcBHxlQed0K0VbqbOnuwAmFmC0Y62oLXQYuuaZH-Jxly7NY-rPa1QuUFXyDrxmDxhiJ~EjcycUarCMPsZblZ3NEgXaseX1z8NWxdLkjUCaW1e1EnA6SeMqUPM64DjxiUzJIwCtVHUGNYujflXVHhMF6a6qagNoe6tP52uRt7k9347A7lB4nXAmaMnrSIht51Bpi~LeCPnVZTya3kiKs~nGRcg9PyJU4Mrdmq0It1ZmMfdF-buEl2GQ7QE0dJGUCONHaz4MUMp4t1ZVc-DGKAw8jKMiDGpqnpjm-XvHsW1Hzg__&Key-Pair-Id=K1YS7LZGUP96OI"
        />
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
