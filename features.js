
/*
Purana tarika to export modules
module.exports = gfName; 

*/

//new way of exporting

// export default gfName;

export const generateLovePercent = ()=>{
    return `${Math.floor(Math.random()*100)}%`;
}