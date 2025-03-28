import {Firebase} from "./../util/Firebase";
import { classEvent } from "../util/ClassEvent";

export class User {

    static getRef(){

        return Firebase.db().collection('/users');

    }

    static findByEmail(email){

        return User.getRef().doc(email);

    }

}