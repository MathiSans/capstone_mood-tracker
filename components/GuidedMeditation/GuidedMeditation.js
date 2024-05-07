import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MeditationContainer } from "./GuidedMeditation.styled";
import { Article } from "./GuidedMeditation.styled";
import { SourceContainer } from "./GuidedMeditation.styled";
import { BrightLink } from "./GuidedMeditation.styled";
import { TextContainer } from "./GuidedMeditation.styled";

export default function GuidedMeditation() {
  return (
    <>
      <MeditationContainer>
        <TextContainer>
          <h3>Meditation: Living Presence – with Body Scan (12:06 min.)</h3>

          <Article>
            A key pathway to full presence is awakening through the body. This
            meditation guides us through a body scan, relaxing and receiving the
            play of sensations. We then deepen attention to the breath, and rest
            with the rhythmic waves of breathing, experiencing the background of
            the whole domain of physical aliveness.
          </Article>
        </TextContainer>

        <AudioPlayer
          src="https://traffic.libsyn.com/tarabrach/2023-10-11-Meditation-Living-Presence-with-Body-Scan-2016-05-25-TaraBrach.mp3?_=1"
          onPlay={(e) => console.log("onPlay")}

          // other props here
        />

        <SourceContainer>
          source: Meditation: Living Presence – with Body Scan (12:06 min.) Oct
          11, 2023;
          <br />
          <BrightLink href="https://www.tarabrach.com/meditation-living-presence-body-scan-2/">
            https://www.tarabrach.com/meditation-living-presence-body-scan-2/
          </BrightLink>
        </SourceContainer>
      </MeditationContainer>
    </>
  );
}
