import { useDashboardState } from "../DashboardStateProvider/DashboardStateProvider";
import * as Styled from "./LinkWrapper.styled";

export default function LinkWrapper({ children, link }) {
  const { handleDashboardIsOpen } = useDashboardState();
  return (
    <Styled.LinkWrapper onClick={handleDashboardIsOpen} href={link}>
      {children}
    </Styled.LinkWrapper>
  );
}
