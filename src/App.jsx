import "./App.css";
import "./Button.css";
import Contact from "../Components/Contact";
import Content from "../Components/Content";
import Profile from "../Components/Profile";

function App() {
  return (
    <>
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-mb-10 md:tw-mb-0">
        <div className="md:tw-w-[35%] lg:tw-w-[25%]">
          <Profile />
        </div>
        <div className="md:tw-w-[65%] lg:tw-w-[75%]  tw-h-full tw-mb-10">
          <Contact />
          <Content />      
        </div>
      </div>
    </>
  );
}

export default App;
