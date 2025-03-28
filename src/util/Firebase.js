const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

constructor(){

    this._config  = {
            apiKey: "AIzaSyAniI6NNoXhF95-_d016joxhenXyzi8xRU",
            authDomain: "whatsapp-clone-96f1b.firebaseapp.com",
            projectId: "whatsapp-clone-96f1b",
            storageBucket: "whatsapp-clone-96f1b.firebasestorage.app",
            messagingSenderId: "183647378810",
            appId: "1:183647378810:web:a699561fc97dfc739a8ac3"
          };
    
    this.init();

}
    init(){

        if(!window._initializedFirebase){

            firebase.initializeApp(this._config)
            
            firebase.firestore().settings({

                timestampsInSnapshots: true
            });
            
            window._initializedFirebase = true;

        }
        
    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();
    }
    initAuth(){
        
        return new Promise((s,f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(result =>{

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user,
                    token
                });

            })
            .catch(err=>{


                f(err);

            });

        });

    }

}