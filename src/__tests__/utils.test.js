import {API_REQUEST_PATH} from "../utils/GlobalVariables";
import {INITIAL_ADD_JOB_REQUEST_VALUES} from "../types/InitialValues";

it('api request path is correct', () => {
    expect(API_REQUEST_PATH).toBe('http://localhost:8080/api');
})

it('should have proper initial values', () => {
    const initialValues = {name: '', price: 0};
    expect(INITIAL_ADD_JOB_REQUEST_VALUES).toStrictEqual(initialValues);
})