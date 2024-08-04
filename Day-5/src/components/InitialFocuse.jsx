import AddIcon from "@mui/icons-material/Add";
import { Field, Form, Formik } from "formik";
import React from "react";
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function InitialFocus() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	const addContacts = async (values, actions) => {
		try {
			await addDoc(collection(db, "contacts"), {
				...values,
			});
			actions.setSubmitting(false);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	return (
		<>
			<button onClick={onOpen} className="bg-white rounded-full p-2">
				<AddIcon />
			</button>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create your account</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={3}>
						<Formik
							initialValues={{ name: "", email: "" }}
							onSubmit={addContacts}
						>
							{(props) => (
								<Form>
									<Field name="name">
										{({ field }) => (
											<FormControl>
												<FormLabel>
													First name
												</FormLabel>
												<Input
													{...field}
													placeholder="name"
												/>
											</FormControl>
										)}
									</Field>
									<Field name="email">
										{({ field }) => (
											<FormControl>
												<FormLabel>Email</FormLabel>
												<Input
													{...field}
													placeholder="email"
												/>
											</FormControl>
										)}
									</Field>
									<ModalFooter>
										<Button
											mr={3}
											colorScheme="teal"
											isLoading={props.isSubmitting}
											onClick={onClose}
											type="submit"
										>
											Save
										</Button>
										<Button onClick={onClose}>
											Cancel
										</Button>
									</ModalFooter>
								</Form>
							)}
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
