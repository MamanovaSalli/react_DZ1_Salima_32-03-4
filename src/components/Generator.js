// import *as React from "react";
//
// import qoutes from "./qoutes";
// import FancyText from "./FancyText"
//
// export default function Generator({children}) {
//     const [index, setIndex] = React.useState(0)
//     const qoute = qoutes[index]
//     const next = () => setIndex((index + 1) % qoute.length)
//
//     return (
//         <>
//             <p>Ваши любимые цитаты</p>
//             <FancyText text={qoute}/>
//             <button onClick={next}>Переключи цитату</button>
//             {children}
//         </>
//     )
// }