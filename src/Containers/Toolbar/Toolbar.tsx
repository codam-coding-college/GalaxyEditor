/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Toolbar.tsx                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/25 16:35:16 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Assets
import "./Toolbar.scss";
import FTLogo from "../../Assets/42_Logo";
import APIData from "../../Assets/APIData";

import Button from "../../Components/Button/Button";
import CampusSelect from "./Components/CampusSelect/CampusSelect";
import CursusSelect from "./Components/CursusSelect/CursusSelect";
import ProjectSearch from "./Components/ProjectSearch/ProjectSearch";
import Separator from "../../Components/Separator/Separator";
import React from "react";
import { useAppData } from "../../App";
import { NameIDCollection } from "../../Utilities/Types";

////////////////////////////////////////////////////////////////////////////////

// NOTE (W2): Campus->Cursus->Project
// Campus defines the cursi which in turn defines what projects are available.
// We need to make sure everything updates accordingly and is set correctly when
// we change the comboboxes

/**
 * Constructs the toolvar navigation bar.
 * @returns The toolbar.
 */
const Toolbar = () => {
	const appData = useAppData();

	return (
		<nav>
			<div id="editor-toolbar">
				{/* Toolbar stack */}
				<div className="stack">
					<FTLogo id="logo-toolbar" />

					{/* Project Search */}
					{/* NOTE (W2): Update when cursus or campus changes */}
					<ProjectSearch
						callback={(data: NameIDCollection) => {
							console.log("Searching for:", data);
							appData.updateFocusProject(data);
						}}
					/>

					{/* Campus */}
					{/* NOTE (W2): Data only ever initalized on startup from user data*/}
					<CampusSelect
						callback={(data: NameIDCollection) => {
							console.log("Switching campus to:", data);
							appData.updateCurrentCampus(data);
							appData.updateFocusProject(null!);
						}}
					/>

					{/* Cursus selection */}
					{/* NOTE (W2): Update when campus changes */}
					<CursusSelect
						callback={(data: NameIDCollection) => {
							console.log("Switching cursus to:", data);
							appData.updateCurrentCursus(data);
							appData.updateFocusProject(null!);
						}}
					/>

					<Separator />

					{/* Options*/}
					<Button
						text={"Center view"}
						callback={() => {
							console.log("Hello!");
						}}
						icon={"fa-solid fa-crop-simple"}
					/>
					<Button
						text={"Reset"}
						callback={() => {
							console.log("Hello!");
						}}
						icon={"fa-solid fa-repeat"}
					/>
					<Button
						text={"Export"}
						callback={() => {
							console.log("Hello!");
						}}
						icon={"fa-solid fa-upload"}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Toolbar;
