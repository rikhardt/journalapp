import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const dispatch = useDispatch();

    useEffect(() => {
       firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                
                dispatch(startLoadingNotes(user.uid));
                
            } else {
                setIsLoggedIn(false)
            }

            setChecking(false);
       });

    }, [dispatch, setChecking])


    if (checking) {
        return (
            <h1>Wait...</h1>
        )
    }

    return (

        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        path="/auth" 
                        component={AuthRouter}
                        isLoggedIn={isLoggedIn}
                    />                        
                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={JournalScreen}
                        isLoggedIn={isLoggedIn}    
                    />

                    <Redirect to="/auth/login" />  

                </Switch>
            </div>

        </Router>
    )
}
