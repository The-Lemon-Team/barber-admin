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
import { CreateComment } from "../Comments/CreateComment";
import { EditComment } from "../Comments/EditComment";

import { FeaturesList } from "../Features/FeaturesList";

import { GalleryList } from "../Gallery/GalleryList";

import { MainPage } from "../MainPage/MainPage";
import { MainPageList } from "../MainPage/MainPageList";

import { firebaseConfig } from "../../firebase/firebaseConfig";

const options: RAFirebaseOptions = {
	logging: true,
	rootRef: "/",
	watch: ["comments", "features", "gallery", "mainPage"],
};

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

const AdminPanel: React.FC = () => {
	return (
		<Admin dataProvider={dataProvider} authProvider={authProvider}>
			<Resource
				name="comments"
				list={CommentsList}
				edit={EditComment}
				create={CreateComment}
			/>
			<Resource
				name="features"
				list={FeaturesList}
				show={ShowGuesser}
				edit={EditGuesser}
			/>
			<Resource
				name="gallery"
				list={GalleryList}
				show={ShowGuesser}
				edit={EditGuesser}
			/>
			<Resource name="mainPage" list={MainPageList} edit={MainPage} />
		</Admin>
	);
};

export default AdminPanel;
