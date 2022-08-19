/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   App.tsx                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:01:54 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/19 16:44:39 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./App.css";
import React from "react";
import Canvas from "./Containers/Canvas/Canvas"
import Toolbar from "./Containers/Toolbar/Toolbar"

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
			<header>
				<Toolbar />
			</header>
			<main>
				<Canvas />
			</main>
        </>
    );
}

export default App;
