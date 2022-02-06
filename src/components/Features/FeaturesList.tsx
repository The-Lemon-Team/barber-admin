import React from "react";
import {
	Datagrid,
	EditButton,
	List,
	TextField,
	ResourceComponentProps,
} from "react-admin";

export const FeaturesList = (props: ResourceComponentProps) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source="title" />
				<TextField source="description" />
				<EditButton />
			</Datagrid>
		</List>
	);
};
