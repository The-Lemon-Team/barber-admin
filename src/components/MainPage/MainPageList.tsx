import * as React from "react";
import {
	Datagrid,
	EditDialog,
	TextField,
	EditButton,
	SimpleForm,
	ResourceComponentProps,
	List,
} from "react-admin";

interface IMainPageListProps {}

export const MainPageList = (props: ResourceComponentProps) => {
	return (
		<>
			<List {...props}>
				<Datagrid>
					<TextField source="id" />
					<EditButton />
				</Datagrid>
			</List>
			<EditDialog {...props}>
				<SimpleForm>
					<TextField source="mainPage" />
				</SimpleForm>
			</EditDialog>
		</>
	);
};
