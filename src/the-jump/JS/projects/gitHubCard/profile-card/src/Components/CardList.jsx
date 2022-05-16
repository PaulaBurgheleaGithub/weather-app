import React from "react";
import Card from "./Card";
import Form from "./Form";

const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);
export default CardList;

// const testData = [
//   {
//     name: "Dan Abramov",
//     avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
//     company: "@facebook",
//   },
//   {
//     name: "Sophie Alpert",
//     avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
//     company: "Humu",
//   },
//   {
//     name: "Sebastian Markbåge",
//     avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
//     company: "Facebook",
//   },
// ];
