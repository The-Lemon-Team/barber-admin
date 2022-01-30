import React from "react";
import {
	Create,
	SimpleForm,
	TextInput,
	DateInput,
	ImageInput,
} from "react-admin";

export const CreateComment = () => {
	return (
		<Create>
			<SimpleForm>
				<TextInput source="authorName" />
				<DateInput source="date" defaultValue={new Date()} />
				<ImageInput />
				<TextInput source="text" />
			</SimpleForm>
		</Create>
	);
};
