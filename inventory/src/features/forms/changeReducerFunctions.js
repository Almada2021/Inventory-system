export default function changeReducerFunction(fn, eventValue, type){
    const value = eventValue.target.value;
    fn({type, value})

}