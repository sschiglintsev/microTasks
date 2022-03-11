import React, {FC} from 'react';
type BodyType = {
    titleForBody: string
}
const Body: FC<BodyType> = ({titleForBody}) => {
    return (
        <div>
            {titleForBody}
        </div>
    );
};

export default Body;