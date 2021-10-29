import React from "react";
import "./App.css";
import { Text } from "./component/polymorphic/Text";
// import { CustomButton } from "./html/Button";
// import { RandomNumber } from "./component/restrictions/RandomNumber";
// import { Toast } from "./component/templateliterals/Toast";
// import { List } from "./generics/List";
// import { Private } from "./component/auth/Private";
// import { Profile } from "./component/auth/Profile";
// import { Counter } from "./component/class/Counter";
// import { MutableRef } from "./component/ref/Mutable";
// import { User } from "./component/context/User";
// import { UserContextProvider } from "./component/context/UserContext";
// import { Box } from "./component/context/Box";
// import { ThemeContextProvider } from "./component/context/ThemeContext";
// import { Counrter } from "./component/State/Counter";
// import { LoggedIn } from "./component/State/LoggedIn";
// import { Container } from "./component/Container";
// import { Button } from "./component/Button";
// import { Input } from "./component/Input";
// import { Heading } from "./component/Heading";
// import { Oscar } from "./component/Oscar";
// import { Status } from "./component/Status";
// import { Greet } from './component/Greet';
// import { Person } from './component/Person';
// import { PersonList } from './component/PersonList';

function App() {
  // const personName = {
  //   first: 'Ashiqur',
  //   last: 'Sajid'
  // }
  // const nameList = [
  //   {
  //     first: 'shah',
  //     last: 'sajib'
  //   },
  //   {
  //     first: 'Emon',
  //     last: 'Ahmed'
  //   },
  //   {
  //     first: 'Aminul',
  //     last: 'Islam'
  //   }
  // ]
  return (
    <div className="App">
      {/* <Status status="error" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Shah</Heading>
      </Oscar>
      <Greet name="shah" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Button
        eventhandleClick={(event, id) =>
          console.log("button clicked", event, id)
        }
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      {/* <LoggedIn /> */}
      {/* <Counrter/> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}
      {/* <MutableRef/> */}
      {/* <Counter message="The value is"/> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List
        items={["Batman", "Supernam"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[{ first: "shah" }, { first: "Emon" }]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive/> */}
      {/* <Toast position='left-center' /> */}
      {/* <CustomButton variant="primary" onClick={()=> console.log('clicked')}>Primary</CustomButton> */}
      <Text as="h1" size="lg">Heading</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="label" htmlFor="someId" size="lg" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
