import { useState } from "react";

export default function NewState() {
  const [i, setI] = useState(0);

  const names = ["Otaru", "Ohinoyi", "Daudu", "Ozi - Ohinoyi"];

  const [profile, setProfile] = useState({
    firstname: "Aka'aba",
    lastname: "Abdullah",
    middlename: "Akidi",
  });

  function updateProfile() {
    setProfile((prev) => {
      return {
        ...prev,
        middlename: names[i],
      };
    });

    setI((state) => {
      return state + 1;
    });
  }

  return (
    <>
      <div>
        {profile.firstname} - {profile.lastname} - {profile.middlename}
        <button
          onClick={updateProfile}
          style={{
            display: "block",
            marginTop: "20px",
          }}
        >
          change
        </button>
        {/* map
        {names.map((name) => {
          return <>{console.log(name)}</>;
        })} */}
      </div>
    </>
  );
}
