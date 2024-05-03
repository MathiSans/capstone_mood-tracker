import { Container, MenuItem } from "./Menu.styled";
import { useData } from "@/lib/useData";
import { useSession } from "next-auth/react";

export default function Menu({
  session,
  selectedColumn,
  handleSelectedColumnChange,
  menuItems,
}) {
  const { allMessages, isLoadingAllMessages, errorAllMessages } =
    useData().fetchedAllMessages;

  let NumberOfMessagesForUser = 0;

  if (!isLoadingAllMessages) {
    NumberOfMessagesForUser = allMessages.filter(
      (message) => message.recipientId === session?.user.id
    ).length;
  }

  return (
    <Container>
      {menuItems.map((item) => (
        <MenuItem
          $indicator={
            item.id === "community" && NumberOfMessagesForUser ? "true" : ""
          }
          key={item.id}
          onClick={() => handleSelectedColumnChange(item.id)}
          $isActive={selectedColumn === item.id}
        >
          {item.label}
        </MenuItem>
      ))}
    </Container>
  );
}
