export const sorting = (array) => {
    
    const mapObjectToArrayIndex = (array) => {
        let map = new Map();

        let i = 0;
    
        array.forEach(e=>{
        map.set(e.name, i)
        i++;
        })

        return map;
    }
    
    const sortObjectNames = (array) => {
        let names = [];
        array.forEach(e=> names.push(e.name));
    
        let namesSorted = [];
        names.sort().forEach(e=>namesSorted.push(e));
    return namesSorted;
    }

    const arrayMapped = mapObjectToArrayIndex(array);
    const sortedNamesFromArray = sortObjectNames(array);

    
    const sortObjects = (array, sortedNames, map) => {
        let result = [];
        let indices = [];

        sortedNames.forEach(name => indices.push(map.get(name)));
        indices.forEach(index => result.push(array[index]));

        return result;
    }

    return sortObjects(array, sortedNamesFromArray, arrayMapped);
    }
