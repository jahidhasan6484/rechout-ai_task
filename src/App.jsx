import "./App.css";
import { useEffect, useState } from "react";
import socialMediaData from "./Data/socialMedia";
import SocialCard from "./ReusableComponents/SocialCard";
import Buttons from "./Components/Buttons/Buttons";

function App() {
  const [socialMediaList, setSocialMediaList] = useState([]);
  useEffect(() => {
    setSocialMediaList(socialMediaData);
  }, []);

  return (
    <div className="h-screen">
      <div className="bg-primary flex items-center justify-center h-1/4">
        <h1 className="text-white text-xl">How did you hear about us?</h1>
      </div>

      <div className="bg-lightGray h-3/4 pt-4">
        <div className="w-1/3 mx-auto space-y-12">
          <div className="grid grid-cols-3 gap-8">
            {socialMediaList.length > 0 &&
              socialMediaList.map((media, index) => {
                const { name, imageURL } = media;

                return (
                  <SocialCard key={index} name={name} imageURL={imageURL} />
                );
              })}
          </div>

          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
