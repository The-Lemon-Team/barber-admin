import React from "react";
import { Edit, EditProps, required, SimpleForm, TextInput } from "react-admin";

export const EditComment = (props: EditProps) => {
	return (
		<Edit {...props}>
			<SimpleForm>
				<TextInput source="authorName" validate={required()} />
				<TextInput source="avatar" validate={required()} />
				<TextInput source="date" validate={required()} />
				<TextInput source="text" validate={required()} />
			</SimpleForm>
		</Edit>
	);
};
