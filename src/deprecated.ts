import * as warning from 'warning';
import {IDictionary} from '@totalpave/interfaces';

let warned: IDictionary<boolean> = {};

export interface IValidateFunction {
    (props: any, propName: string, componentName: string, ...rest: Array<any>): any;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function deprecated(propType: any, explanation: string): IValidateFunction {
    return function validate(props, propName, componentName, ...rest) { // Note ...rest here
        if (props[propName] !== null && props[propName] !== undefined) {
            let message: string = `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`;
            if (!warned[message]) {
                warning(false, message);
                warned[message] = true;
            }
        }

        return propType(props, propName, componentName, ...rest); // and here
    };
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function _resetWarned() {
    warned = {};
}

deprecated._resetWarned = _resetWarned;
