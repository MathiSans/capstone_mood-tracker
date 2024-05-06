import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "@/components/Layout/Layout.styled";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/index");
    }, 0);
  }, []);

  return <Container>logo</Container>;
}
