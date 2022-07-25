/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   App.tsx                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:01:54 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/25 18:17:10 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./App.css";
import Canvas from "./Containers/Canvas/Canvas"
import Toolbar from "./Containers/Toolbar/Toolbar"
import React from "react";

// const Toggle = () => {
//     const [isToggleOn, setIsToggleOn] = useState(false);
//     // var1 setVar1
//     const handleClick = () => {
//         setIsToggleOn(() => !isToggleOn);
//     };

//     return <button onClick={handleClick}>{isToggleOn ? "ON" : "OFF"}</button>;
// };

function App() {
    return (
        <>
			<Toolbar />
			<Canvas />
        </>
    );
}

export default App;
