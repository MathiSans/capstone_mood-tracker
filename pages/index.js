import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "@/components/Layout/Layout.styled";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/start");
    }, 0);
  }, []);

  return (
    <Container>
      <Image
        src="/images/mood-tracker-logo1.png"
        alt="Ruh logo"
        width={36}
        height={36}
      />
    </Container>
  );
}
