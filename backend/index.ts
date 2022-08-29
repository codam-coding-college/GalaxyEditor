/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   index.ts                                           :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/08/29 11:02:55 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/08/29 13:05:35 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import path from "path";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import Api42 from "@codam/fast42";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/api", (req, res) => {
	res.json({ user: 'tj' });
});

app.get("*", (req, res) => {
	res.status(403).redirect("https://http.cat/403");
});

// Start
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
