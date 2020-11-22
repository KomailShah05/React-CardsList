import React from "react";
import Card from "./Card"
import contacts from "../contacts"
import Avatar from "./Avatar"

function createCard(contact){
  return (
    <Card
      id={contact.id}
      key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
  />)
}

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar  img="https://media-exp1.licdn.com/dms/image/C4D35AQGof32ovykoBg/profile-framedphoto-shrink_200_200/0?e=1605250800&v=beta&t=S85OnNWxMS27rpFtISSeQRKWEAzrNfIsLXnKoLl1ZzE"/>
      {contacts.map(createCard)}
      {/* <Card name={contacts[0].name}
         img={contacts[0].imgURL}
         email={contacts[0].email}
         tel={contacts[0].phone}/>

         <Card name={contacts[1].name}
            img={contacts[1].imgURL}
            email={contacts[1].email}
            tel={contacts[1].phone}/>

            <Card name={contacts[2].name}
               img={contacts[2].imgURL}
               email={contacts[2].email}
               tel={contacts[2].phone}/> */}
    </div>
  );
}

export default App;
