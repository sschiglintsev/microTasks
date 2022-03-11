import React from 'react';
import Header from "./Header";
import Body from "./Body";
import TopCars from "./TopCars";
import Button from "./Button";

const topCars = [
    {id: 0, manufacturer: 'BMW', model: 'm5cs'},
    {id: 1, manufacturer: 'Mercedes', model: 'e63s'},
    {id: 2, manufacturer: 'Audi', model: 'rs6'}
]

function App() {
    const onClickButton = (age: number) => {
        console.log(age)
    }
    return (
        <div>
            <Header title={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <TopCars topCar={topCars}/>
            <Button callBack={()=>onClickButton(77)} nameButton={'Age'}/>
        </div>
    );
}

export default App;
