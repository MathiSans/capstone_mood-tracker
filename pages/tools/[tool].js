import ToolMoodMeasurer from "@/components/ToolMoodMeasurer/ToolMoodMeasurer";
import { useState } from "react";
import { useRouter } from "next/router";
import QuotesWrapper from "../../components/QuotesWrapper/QuotesWrapper";
import SmileTrainerWrapper from "@/components/SmileTrainerWrapper/SmileTrainerWrapper";
import { Container, Page } from "@/components/Layout/Layout.styled";
import GuidedMeditationWrapper from "@/components/GuidedMeditationWrapper/GuidedMeditationWrapper";

export default function SingleToolPage() {
  const [page, setPage] = useState(0);
  const router = useRouter();
  const { tool } = router.query;

  const links = ["quotes", "smiletrainer", "meditation"];

  return (
    <>
      <Container>
        <Page>
          {!links.includes(tool) ? (
            <p>(404) tool not found</p>
          ) : (
            <>
              <ToolMoodMeasurer page={page} setPage={setPage} />
              {page === 1 && tool === links[0] && <QuotesWrapper />}
              {page === 1 && tool === links[1] && <SmileTrainerWrapper />}
              {page === 1 && tool === links[2] && <GuidedMeditationWrapper />}
            </>
          )}
        </Page>
      </Container>
    </>
  );
}
