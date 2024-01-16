import React from 'react';


const user = {
    name: 'Hady Limarr',
    imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
}

const user2 = {
    name: 'Marilyn Monroe',
    imageUrl: 'https://i.imgur.com/VCGLGhVb.jpg',
    imageSize: 200,
    info: 'Мэ́рилин Монро́ — американская киноактриса, секс-символ 1950-х годов, певица и модель. Стала одним из наиболее культовых образов американского кинематографа и всей мировой культуры.'
}

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img className='avatar'
                 src={user.imageURL}
                 alt={"photo" + user.name}
                 style={{width: user.imageSize, height: user.imageSize}}
            />
            <h1>{user2.name}</h1>
            <img className='avatar'
                 src={user2.imageUrl}
                 alt={"photo" + user2.name}
                 style={{width: user2.imageSize, height: user2.imageSize, }}
            />
            <p>{user2.info}</p>
        </>
    )
}