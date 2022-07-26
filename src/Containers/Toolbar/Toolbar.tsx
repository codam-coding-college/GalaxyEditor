/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Toolbar.tsx                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/26 10:05:48 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./Toolbar.css";

import React from 'react';
import FTLogo from "../../Assets/42_Logo"
import Button from "../../Components/Button/Button"
import Search from "../../Components/SearchBox/SearchBox"
import ComboBox from "../../Components/ComboBox/ComboBox"
import Separator from "../../Components/Separator/Separator"

function print() {
	console.log("Hello!");
}

const Toolbar = () => {
	return (
		<header id="editor-toolbar">

			{/* Toolbar stack */}
			<div className="stack">

				<FTLogo id="logo-toolbar"/>

				{/* Project Search */}
				<Search />

				{/* Cursus selection */}
				<ComboBox />

				{/* Campus */}
				<ComboBox />

				<Separator />

				<Button text={"Center view"} callback={print} icon={"fa-solid fa-crop-simple"}/>
				<Button text={"Reset"} callback={print} icon={"fa-solid fa-repeat"}/>
				<Button text={"Export"} callback={print} icon={"fa-solid fa-upload"}/>
				
			</div>

		</header>
	)
}

export default Toolbar;