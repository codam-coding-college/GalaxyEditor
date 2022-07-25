/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Toolbar.tsx                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/25 18:07:04 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./Toolbar.css";

import React from 'react';
import FTLogo from "../../Assets/42_Logo"
import Button from "../../Components/Button/Button"
import Search from "../../Components/SearchBox/SearchBox"
import Cursus from "../../Components/ComboBox/ComboBox"
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
				<Cursus />

				<Separator />

				<Button text={"Center view"} callback={print}/>
				<Separator />
				<Button text={"Reset"} callback={print}/>
				<Button text={"Edit Mode"} callback={print}/>

				<Separator />
				<Button text={"Export"} callback={print}/>
				
			</div>

		</header>
	)
}

export default Toolbar;