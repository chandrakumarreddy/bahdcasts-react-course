import React from "react";

const ChannelsList = ({ channels }) => (
	<ul className="list-group">
		{channels.map(channel => (
			<li key={channel.id} className="list-group-item">
				{channel.name}
			</li>
		))}

		<li className="list-group-item">Angular</li>
		<li className="list-group-item">Vuejs</li>
		<li className="list-group-item">Web development</li>
	</ul>
);

export default ChannelsList;
