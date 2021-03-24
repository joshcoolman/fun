import { Page, Text, Button, Row, useToasts } from "@geist-ui/react"
import { Router } from "next/router";
import firebase from "firebase/app"
import "firebase/auth"

import initFirebase from "../services/firebase"
import { useState } from "react";

initFirebase();

const provider = new firebase.auth.GoogleAuthProvider();

export default function Join() {
    const [authorizing, setAuthorizing] = useState(false);

    const handleAuthentication = async () => {
        setAuthorizing(true);
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const { user, credentials } = result;

            console.log(user, credentials);

            if (!user) {
                throw new Error("Huston, we have a problem.")
            }

        } catch (error) {

        }
        setAuthorizing(false);
    }
    return (
        <Page>
            <Row justify="center">
                <Text h1>Join this Stupid thing</Text>
            </Row>
            <Row justify="center">
                <Text h2>Click below to sign in or join</Text>
            </Row>
            <Row justify="center">
                <Button onClick={handleAuthentication} loading={authorizing}>Get Started</Button>
            </Row>
        </Page>
    )
}