import React, {useState} from 'react';

const SquareColorToggle = () => {
    const [index, setIndex] = useState('red');
    const [index2, setIndex2] = useState('blue');

    const toggleColors = () => {
        setIndex((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
        setIndex2((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
    };

    return (
        <div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: index,
                    display: 'inline-block',
                    cursor: 'pointer',
                }}
                onClick={toggleColors}
            ></div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: index2,
                    display: 'inline-block',
                    cursor: 'pointer',
                }}
                onClick={toggleColors}
            ></div>
        </div>
    )
}

export default SquareColorToggle;



