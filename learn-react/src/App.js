import "./App.css";
import UserList from "./components/UserList";

//컴포넌트 : 하나의 조각

const boxStyle = { backgroundColor: "red", color: "#fff" };

function App() {
  const text = "리액트";
  return (
    /*
    jsx : 
1. 닫혀 있는 태그를 사용해야한다.
2. 하나의 태그로 감싸야 된다. => <></>(Fragment)를 통해서 부모 요소 없이 감쌀 수 있다.
3. js값을 포함시킬 때는 {}안에 표현식을 넣는다.
4. class는 className이라는 속성으로 사용한다.
5. 스타일 적용은 style 속성에 객체를 넣는다. =>css속성명 카멜케이스로 작성한다.
*/
    <>
      {/* <MyComponent title="Component" color="red" active />
      <MyComponent title="React" />
    
      <div className="box" style={boxStyle}>
        {text}
      </div> */}
      {/* <Counter num={2} /> */}
      {/* <InputText /> */}
      <UserList />
    </>
  );
}

export default App;
