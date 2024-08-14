import styled from "styled-components";
import Wrapper from "./Wrapper";
import Block from "./Block";

const blockItems = [
  {
    label: "1",
    padding: "1rem",
    backgroundColor: "red",
    margin: "10px",
    backgroundImage: `url("https://blog.kakaocdn.net/dn/bhWZTq/btrr1MBYWuc/Ct0TpC5iAi8pOV6CkkFZeK/img.jpg")`,
  },
  {
    label: "2",
    padding: "1rem",
    backgroundColor: "green",
    margin: "10px",
    backgroundImage: `url("https://mblogthumb-phinf.pstatic.net/MjAxODA2MjNfMTEy/MDAxNTI5NzMxMTU4MTM3.28zEZBHsO9RhxASP2dUkXRPEBqb7V-SLm7qMZ26-tugg.Nz8144FCGE5Ll1BC1yPwNG47-bGPHjcCRzOY-40I8aMg.PNG.guswh2678/%25EC%258A%25AC%25EB%259D%25BC%25EC%259D%25B4%25EB%2593%259C6.PNG?type=w800")`,
  },
  {
    label: "3",
    padding: "1rem",
    backgroundColor: "blue",
    margin: "10px",
    backgroundImage: `url("https://photo.coolenjoy.co.kr/data/editor/2008/thumb-Bimg_e81361f5afaad2e3274e59518ccb3d40_rn1r.jpg")`,
  },
  {
    label: "4",
    padding: "1rem",
    backgroundColor: "gold",
    margin: "10px",
    backgroundImage: `url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1Tg4y%2FbtqDurHhxax%2FrFjK7yUIuO0fwMsZsvubU0%2Fimg.jpg")`,
  },
  {
    label: "5",
    padding: "1rem",
    backgroundColor: "darkblue",
    margin: "10px",
    backgroundImage: `url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQro8K%2FbtqDvh5lVQm%2FO765YYrxZwDO8mtY59Zo80%2Fimg.jpg")`,
  },
];

const Blocks = (props) => {
  return (
    <Wrapper {...props}>
      {blockItems.map((blockItem) => {
        return (
          <Block
            margin={blockItem.margin}
            padding={blockItem.padding}
            backgroundImage={blockItem.backgroundImage}
          >
            {blockItem.label}
          </Block>
        );
      })}
    </Wrapper>
  );
};

export default Blocks;
