import ToolMoodMeasurer from "@/components/ToolMoodMeasurer/ToolMoodMeasurer";
import { useState } from "react";
import QuotesWrapper from "../../components/QuotesWrapper/QuotesWrapper";
import SmileTrainerWrapper from "@/components/SmileTrainerWrapper/SmileTrainerWrapper";
import { Container, Page } from "@/components/Layout/Layout.styled";
import GuidedMeditation from "@/components/GuidedMeditation/GuidedMeditation";
import EmotionTextAnalysis from "@/components/EmotionTextAnalysis/EmotionTextAnalysis";

export default function ToolWrapper({ tool }) {
  const [page, setPage] = useState(0);

  return (
    <>
      <Container>
        <Page>
          {!tool.includes(tool) ? (
            <p>(404) tool not found</p>
          ) : (
            <>
              <ToolMoodMeasurer page={page} setPage={setPage} />
              {page === 1 && tool.includes("quotes") && <QuotesWrapper />}
              {page === 1 && tool.includes("smiletrainer") && (
                <SmileTrainerWrapper />
              )}
              {page === 1 && tool.includes("meditation") && (
                <GuidedMeditation />
              )}
              {tool === "textanalyser" && page === 1 && <EmotionTextAnalysis />}{" "}
            </>
          )}
        </Page>
      </Container>
    </>
  );
}
