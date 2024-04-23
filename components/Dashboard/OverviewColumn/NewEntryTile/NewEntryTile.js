import * as Styled from "./NewEntryTile.styled";
import { LuActivity } from "react-icons/lu";
import { AiFillSmile } from "react-icons/ai";
import Link from "next/link";

export default function NewEntryTile() {
  return (
    <>
      <Styled.Container>
        <Styled.NewEntryTileIcon>
          <AiFillSmile />
        </Styled.NewEntryTileIcon>
        {/* <Styled.Pill>
          <LuActivity />
        </Styled.Pill> */}
        <Styled.NewEntryTileH2>Add a new mood entry</Styled.NewEntryTileH2>
        <Link href="/flow" style={{ textDecoration: "none" }}>
          <Styled.LinkContainer>
            <Styled.LinkText>NEW ENTRY</Styled.LinkText>
          </Styled.LinkContainer>
        </Link>
      </Styled.Container>
    </>
  );
}
