'use client';

import Test1 from "@/app/welcome/components/test-1/indext";
import {inject, observer} from "mobx-react";
import {TestStore} from "@/stores/TestStore";
import {useEffect} from "react";

interface TestProps {
    store?: TestStore;
}
const Test = (props: TestProps) => {
    useEffect(() => props.store?.setCount(), []);
    console.log('props.store', props.store)
    console.log(props.store?.getCount());

    return (
        <div>
            <label>test</label>
            <Test1></Test1>
        </div>
    );
}

export default inject('test')(observer(Test));
