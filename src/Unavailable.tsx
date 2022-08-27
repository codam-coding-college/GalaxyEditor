/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Unavailable.tsx                                    :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/08/27 20:05:15 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/08/27 20:05:15 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./Unavailable.scss";
import FTLogo from "./Assets/42_Logo";
import unavailable from "./Assets/unavailable.gif";

const Unavailable = () => {
	return (
		<>
		<FTLogo id="logo" />
		<div id="unavailable">
			<h1>Service is unavailable</h1>
			<p>
				{"Check the "}
				<a href="https://statuspage.freshping.io/22651-42Network/">
					API
				</a>
			</p>
			<img
				style={{ borderRadius: "8px" }}
				src={unavailable}
			></img>
		</div>
	</>
	);
};

export default Unavailable;