import logo from "./logo.svg";
import "./App.css";

// import WelcomeDesc from "./ex01_containment/WelcomeDesc";
// import WelcomeDialog from "./ex01_containment/WelcomeDialog";
// import SplitPane from "./ex02_containment/SplitPane";
// import WelcomeDesc from "./ex02_containment/WelcomeDesc";
// import WelcomeDialog from "./ex02_containment/WelcomeDialog";
import AlarmDialog from "./ex03_specialization/AlarmDialog";
import WelcomeDialog from "./ex03_specialization/WelcomeDialog";
import ProfileCard from "./ex04_inheritance/ProfileCard";
import CookCard from "./ex04_inheritance/CookCard";

function App() {
  /*
  return (
    <>
      <WelcomeDesc />
      <WelcomeDialog />
    </>
  );
  */
  /*
  return (
    <SplitPane
      npx={7}
      color="gray"
      left={<WelcomeDesc npx={3} color="red" />}
      right={<WelcomeDialog npx={3} color="blue" />}
    />
  );
  */
  /*
  return (
    <>
      <AlarmDialog />
      <WelcomeDialog />
    </>
  );
  */
  return (
    <>
      <ProfileCard />
      <CookCard />
    </>
  );
}

export default App;
