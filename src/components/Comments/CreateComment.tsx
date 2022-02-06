import React from "react";
import {
	Create,
	SimpleForm,
	TextInput,
	DateInput,
	ImageInput,
	CreateProps,
} from "react-admin";

export const CreateComment = (props: CreateProps) => {
	return (
		<Create {...props}>
			<SimpleForm>
				<TextInput source="authorName" />
				<DateInput source="date" defaultValue={new Date()} />
				<ImageInput source="avatar" />
				<TextInput source="text" />
			</SimpleForm>
		</Create>
	);
};
