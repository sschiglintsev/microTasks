import React, {useState} from 'react';
import Header from "./Header";
import Body from "./Body";
import TopCars from "./TopCars";
import Button from "./Button";
import Filter from "./Filter";

const topCars = [
    {id: 0, manufacturer: 'BMW', model: 'm5cs'},
    {id: 1, manufacturer: 'Mercedes', model: 'e63s'},
    {id: 2, manufacturer: 'Audi', model: 'rs6'}
]

function App() {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const onClickButton2 = (banknots:string) => {
        const moneyState = money.filter(t => t.banknots === banknots)
        setMoney(moneyState)
        console.log(moneyState)
    }

    let [a,setA] =useState(1)

    const onClickButton1 = () => {
        setA(++a)
        console.log(a)
    }
    const onClickButton = (age: number) => {
        console.log(age)
    }
    return (
        <div>
            <Header title={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <TopCars topCar={topCars}/>
            <Button callBack={()=>onClickButton(77)} nameButton={77}/>
            <Button callBack={onClickButton1} nameButton={a}/>
            <Filter callBack={()=>onClickButton2('Dollars')} name={'Dollars'}/>
            <Filter callBack={()=>onClickButton2('RUBLS')} name={'RUBLS'}/>
        </div>
    );
}

export default App;
