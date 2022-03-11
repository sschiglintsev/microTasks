import React, {FC} from 'react';
type HeaderType = {
    title: string
}
const Header: FC<HeaderType> = ({title}) => {
    return (
            <header>
                {title}
            </header>
    );
};

export default Header;