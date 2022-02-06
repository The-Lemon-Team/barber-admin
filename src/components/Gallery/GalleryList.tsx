import React from "react";
import {
	Datagrid,
	EditButton,
	List,
	TextField,
	ResourceComponentProps,
	ImageField,
} from "react-admin";

export const GalleryList = (props: ResourceComponentProps) => {
	return (
		<List {...props}>
			<Datagrid>
				<ImageField source="imageSrc" />
				<EditButton />
			</Datagrid>
		</List>
	);
};
