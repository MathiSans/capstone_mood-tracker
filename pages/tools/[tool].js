import ToolMoodMeasurer from "@/components/ToolMoodMeasurer/ToolMoodMeasurer";
import { useState } from "react";
import { useRouter } from "next/router";
import QuotesWrapper from "../../components/QuotesWrapper/QuotesWrapper";
import SmileTrainerWrapper from "@/components/SmileTrainerWrapper/SmileTrainerWrapper";
import { Container, Page } from "@/components/Layout/Layout.styled";

export default function SingleToolPage() {
  const [page, setPage] = useState(0);
  const router = useRouter();
  const { tool } = router.query;

  //! Boolean Wert aus der Datenbank (isTool: true) herausfiltern
  //! Tools.js in pages Ordner verschieben; tools-Ordner löschen
  const links = ["quotes", "smiletrainer"];

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
            </>
          )}
        </Page>
      </Container>
    </>
  );
}
