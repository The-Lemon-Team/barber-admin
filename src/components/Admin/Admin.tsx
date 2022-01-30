import React from "react";
import {
	Admin,
	Resource,
	ListGuesser,
	EditGuesser,
	ShowGuesser,
} from "react-admin";
import {
	FirebaseDataProvider,
	FirebaseAuthProvider,
	RAFirebaseOptions,
} from "react-admin-firebase";

import { CommentsList } from "../Comments/CommentsList";

import { firebaseConfig } from "../../firebase/firebaseConfig";

const options: RAFirebaseOptions = {
	logging: true,
	rootRef: "/",
	watch: ["comments", "features"],
};

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

const AdminPanel: React.FC = () => {
	return (
		<Admin dataProvider={dataProvider} authProvider={authProvider}>
			<Resource
				name="comments"
				list={CommentsList}
				edit={EditGuesser}
				create={}
			/>
			<Resource
				name="features"
				list={ListGuesser}
				show={ShowGuesser}
				edit={EditGuesser}
			/>
		</Admin>
	);
};

export default AdminPanel;
