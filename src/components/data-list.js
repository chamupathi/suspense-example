import { useEffect, useState } from "react"

const names1 = ['James 1', 'Bob', 'Alice']
const names2 = ['James 2', 'Bob 2', 'Alice 2']
const DataList = ({isStatic = false}) => {
    const [names, setNames] = useState(names1);
    const [list, setList] = useState(true);


    useEffect(() => {
        if(isStatic) return;
        const t = setInterval(() => {
            setNames(list ? names2 : names1);
            setList(!list);
        }, 3000);

        return () => clearInterval(t)
    })

    
    return <>
        <h4>Name list</h4>
        {
            names.map(name => <div key={name}>
                {name}
            </div>)}
    </>
}

export default DataList;