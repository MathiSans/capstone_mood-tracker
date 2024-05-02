import { Container, MenuItem } from "./Menu.styled";

export default function Menu({
  session,
  selectedColumn,
  handleSelectedColumnChange,
  menuItems,
}) {
  return (
    <Container>
      {menuItems.map((item) => (
        <MenuItem
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
