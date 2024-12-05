import { useState } from "react";
import Header from "../components/UserPage/Header";
import UserHobby from "../components/UserPage/UserHobby";
import UserInfo from "../components/UserPage/UserInfo";

export default function UserPage() {
  const [selectedSection, setSelectedSection] = useState<"hobby" | "info">("hobby");

  const handleSection = (text: "hobby" | "info") => {
    setSelectedSection(text);
  };
  return (
    <>
      <Header handleSection={handleSection} />
      {selectedSection === "hobby" ? <UserHobby /> : <UserInfo />}
    </>
  );
}
