import React, {FC} from 'react';

type TopCarType = {
    topCar: Array<Model>
}
type Model = {
    id: number
    manufacturer: string
    model: string
}

const TopCars: FC<TopCarType> = ({topCar}) => {

        const carJSXElement = topCar.map(t => {
            return (
                <li key={t.id}>
                    {t.manufacturer} {t.model}
                </li>
            )

        })

        return (
            <ul>
                {carJSXElement}
            </ul>
        );
    }
;

export default TopCars;