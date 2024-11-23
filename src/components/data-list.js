const names = ['James', 'Bob', 'Alice']
const DataList = () => {
 return names.map(name => <div key={name}>
    {name}
 </div>)   
}

export default DataList;