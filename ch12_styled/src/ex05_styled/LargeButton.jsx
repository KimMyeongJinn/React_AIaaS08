import SimpleButton from "./SimpleButton";
import styled from "styled-components";

/* 이미 만들어진 SimpleButton을 기반으로 해서
   style을 추가해서 LargeButon을 만듬
 */
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
  margin: 10px;
`;

export default LargeButton;
