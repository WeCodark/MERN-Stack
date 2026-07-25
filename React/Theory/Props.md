# Props (Properties) --> Passing Data
* Props are like arguments passed into a function. They allow a parent component to send data to a child component.

## CHild Component
```
function UserInfo(props) {
    return <p> User: {props.username}</p>
}
```
## Parent Component
```
function App(){
    return<>
    <UserInfo username="Pranav" />
    <UserInfo username="Aryan" />
    <UserInfo username="Soham" />
    </>
}
```