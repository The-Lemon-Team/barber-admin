import React from "react";
import {
	Datagrid,
	DateField,
	EditButton,
	List,
	TextField,
	ImageField,
	ResourceComponentProps,
} from "react-admin";

export const CommentsList = (props: ResourceComponentProps) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source="authorName" />
				<ImageField source="avatar" />
				<DateField source="date" />
				<TextField source="text" />
				<EditButton />
			</Datagrid>
		</List>
	);
};
