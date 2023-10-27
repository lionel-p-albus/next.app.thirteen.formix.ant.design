import {makeObservable, observable} from "mobx";
import {SignInForm} from "@/models/SignIn";

export class TestStore {
    constructor() {
        makeObservable(this);
    }

    // @observable count: number = 0;
    @observable form!: SignInForm;

    // setCount = () => {
    //     this.count += 1;
    // }
    //
    // getCount = (): number => {
    //     return this.count;
    // }

    initForm = (): SignInForm => {
        return {
            userId: '',
            password: ''
        }
    }

    onAdd = (form: SignInForm) => {
        console.log(form)
    }
}
