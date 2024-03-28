import ToolMeasurement from "@/components/ToolMeasuremet/ToolMeasurement";
import { useState } from "react";
import { useRouter } from "next/router";
import QuotesPage from "./quote";
import SmileTrainer from "./smiletrainer_test";

export default function SingleToolPage() {
  const [page, setPage] = useState(0);
  const router = useRouter();
  const { tool } = router.query;

  return (
    <>
      <ToolMeasurement page={page} setPage={setPage} />

      {(page === 1) & (tool === "quotes") && <QuotesPage />}
      {(page === 1) & (tool === "smiletrainer") && <SmileTrainer />}
    </>
  );
}
