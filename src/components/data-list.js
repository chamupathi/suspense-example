import { useEffect, useState } from "react"

const names1 = ['James 1', 'Bob', 'Alice']
const names2 = ['James 2', 'Bob 2', 'Alice 2']
const DataList = ({isStatic = false}) => {
    const [names, setNames] = useState(names1);
    const [list, setList] = useState(true);


    useEffect(() => {
        if(isStatic) return;
        // when this is moved inside the set interval, 
        // it will have a constant value for each excecution
        let localList = list
        const t = setInterval(() => {
            
            setNames(list ? names2 : names1);
            localList = !localList
            setList(localList);

        }, 3000);

        console.log('use effect ran')

        return () => {
            console.log('clear ran')
            clearInterval(t)
        }
    }, [])

    
    return <>
        <h4>Name list</h4>
        {
            names.map(name => <div key={name}>
                {name}
            </div>)}
    </>
}

export default DataList;