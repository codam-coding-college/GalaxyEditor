/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Toolbar.tsx                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/22 11:33:03 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Assets
import "./Toolbar.scss";
import FTLogo from "../../Assets/42_Logo";
import APIData from "../../Assets/APIData";

import Button from "../../Components/Button/Button";
import Search from "../../Components/SearchBox/SearchBox";
import ComboBox from "../../Components/ComboBox/ComboBox";
import Separator from "../../Components/Separator/Separator";
import { createContext, useContext, useState } from "react";

////////////////////////////////////////////////////////////////////////////////

/**
 * Callback function that returns a name and a given id back.
 * For example: Requesting '42Cursus' which has ID 21.
 */
interface NameIDCallbackFunction {
    (name: string, id: number): void;
}

/**
 * The toolbar context which lets you hook onto
 */
interface ToolbarContextType {
    // Canvas modifying callbacks
    onSearchChange: (callback: NameIDCallbackFunction) => void;
    onCursusChange: (callback: NameIDCallbackFunction) => void;
    onCampusChange: (callback: NameIDCallbackFunction) => void;
    onCenterView: (callback: VoidFunction) => void;
}

const ToolbarContext = createContext<ToolbarContextType>(null!);

////////////////////////////////////////////////////////////////////////////////

/**
 * Fetch all the projects of the current cursus.
 * @returns JSX.Element[] - Array of options with all the projects and their ID's.
 */
const getCursusProjectsElements = () => {
    return Object.entries(APIData).map((entry, index) => {
        const key = entry[1].name;
        const value = entry[1].id;
        return (
            <option key={index} value={key}>
                ID: {value}
            </option>
        );
    });
};

/**
 * Fetch all current accessible cursi of the current user.
 * @returns JSX.Element[] - Array of options with all current registered cursi.
 */
const getRegisteredCursiElements = () => {
    // TODO: Fetch this from the API.
    return <option value={1}>{"42Cursus"}</option>;
};

/**
 * Fetch all current accessible campuses of the current user.
 * @returns JSX.Element[] - Array of options with all current registered campuses.
 */
const getRegisteredCampusesElements = () => {
    // TODO: Fetch this from the API.
    return <option value={1}>{"Amsterdam"}</option>;
};

////////////////////////////////////////////////////////////////////////////////

/**
 * Constructs the toolvar navigation bar.
 * @returns The toolbar.
 */
const Toolbar = () => {
    return (
        <nav>
            <div id="editor-toolbar">
                {/* Toolbar stack */}
                <div className="stack">
                    <FTLogo id="logo-toolbar" />

                    {/* Project Search */}
                    <Search
                        id="cursi"
                        data={getCursusProjectsElements}
                        callback={() => {
                            console.log("Hello!");
                        }}
                    />

                    {/* Cursus selection */}
                    <ComboBox
                        data={getRegisteredCursiElements}
                        callback={() => {
                            console.log("Hello!");
                        }}
                    />

                    {/* Campus */}
                    <ComboBox
                        data={getRegisteredCampusesElements}
                        callback={() => {
                            console.log("Hello!");
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
